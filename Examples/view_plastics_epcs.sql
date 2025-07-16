CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `view_plastics_epcs` (`epc_id_raw`,
`epc_join_key`,
`lot_number`,
`commission_time`,
`commission_location_join_key`,
`commission_read_point_join_key`,
`commission_event_id`,
`produced_quantity`,
`produced_quantity_uom`,
`production_step`,
`product_join_key`,
`product_name`,
`gtin`,
`primary_image`,
`unit_height`,
`unit_height_uom`,
`unit_width`,
`unit_width_uom`,
`unit_depth`,
`unit_depth_uom`,
`unit_content`,
`unit_content_uom`,
`unit_weight`,
`unit_weight_uom`,
`density_value`,
`density_uom`,
`surface_weight_value`,
`surface_weight_uom`,
`content_of_packaging`,
`packaging_type_name`,
`food_approval`,
`biodegradability`,
`color_code`,
`filter_lot`,
`filter_product`) AS
SELECT
    `e`.`epc_id_raw` AS `epc_id_raw`,
    `e`.`epc_join_key` AS `epc_join_key`,
    `e`.`lot_number` AS `lot_number`,
    `e`.`event_time` AS `commission_time`,
    `e`.`biz_location_join_key` AS `commission_location_join_key`,
    `e`.`read_point_join_key` AS `commission_read_point_join_key`,
    `e`.`event_id` AS `commission_event_id`,
    `e`.`quantity` AS `produced_quantity`,
    COALESCE(`uq`.`description`, _UTF8MB4'units') AS `produced_quantity_uom`,
    `e`.`production_step` AS `production_step`,
    `e`.`product_join_key` AS `product_join_key`,
    `p`.`product_name` AS `product_name`,
    `p`.`gtin` AS `gtin`,
    `p`.`primary_image` AS `primary_image`,
    `p`.`in_package_height` AS `unit_height`,
    `uh`.`description` AS `unit_height_uom`,
    `p`.`in_package_width` AS `unit_width`,
    `uw`.`description` AS `unit_width_uom`,
    `p`.`in_package_depth` AS `unit_depth`,
    `ud`.`description` AS `unit_depth_uom`,
    `p`.`net_content` AS `unit_content`,
    `uc`.`description` AS `unit_content_uom`,
    `p`.`net_weight` AS `unit_weight`,
    `uwg`.`description` AS `unit_weight_uom`,
    `e`.`density_value` AS `density_value`,
    `dns`.`description` AS `density_uom`,
    `e`.`surface_weight_value` AS `surface_weight_value`,
    `sw`.`description` AS `surface_weight_uom`,
    `e`.`content_of_packaging` AS `content_of_packaging`,
    `ptc`.`packaging_type_name` AS `packaging_type_name`,
    `e`.`food_approval` AS `food_approval`,
    `e`.`biodegradability` AS `biodegradability`,
    `e`.`color_code` AS `color_code`,
    `e`.`lot_number` AS `filter_lot`,
    `p`.`product_name` AS `filter_product`
FROM
    (((((((((`data`.`view_plastics_epc_events` AS `e`
LEFT JOIN `data`.`product` AS `p` ON
    `p`.`id` = `e`.`product_join_key`)
LEFT JOIN `data`.`ref_uom` AS `uh` ON
    `uh`.`code` = `p`.`in_package_height_unit`)
LEFT JOIN `data`.`ref_uom` AS `uw` ON
    `uw`.`code` = `p`.`in_package_width_unit`)
LEFT JOIN `data`.`ref_uom` AS `ud` ON
    `ud`.`code` = `p`.`in_package_depth_unit`)
LEFT JOIN `data`.`ref_uom` AS `uc` ON
    `uc`.`code` = `p`.`net_content_unit`)
LEFT JOIN `data`.`ref_uom` AS `dns` ON
    `dns`.`code` = `e`.`density_unit_code`)
LEFT JOIN `data`.`ref_uom` AS `sw` ON
    `sw`.`code` = `e`.`surface_weight_unit`)
LEFT JOIN `data`.`ref_uom` AS `uq` ON
    `uq`.`code` = `e`.`uom`)
LEFT JOIN `data`.`ref_uom` AS `uwg` ON
    `uwg`.`code` = `p`.`net_weight_unit`)
LEFT JOIN `data`.`ref_packaging_type_codes` AS `ptc` ON
    `ptc`.`code` = `e`.`package_type`
WHERE
    `e`.`epc_rel_type` NOT IN (_UTF8MB4'inputQuantityList')
    AND `e`.`biz_step` IN (_UTF8MB4'commissioning');


-- `data`.view_plastics_input_material_origin source