CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `view_rcycle_epc_events` (
`id`,
`event_id`,
`event_type`,
`action`,
`record_time`,
`event_time`,
`event_time_zone_offset`,
`transformation_id`,
`biz_location_id_raw`,
`biz_location_join_key`,
`read_point_id_raw`,
`read_point_join_key`,
`epc_id_raw`,
`epc_type`,
`epc_rel_type`,
`epc_join_key`,
`product_join_key`,
`lot_number`,
`ilmd`,
`production_step`
) AS
SELECT
    `e`.`id` AS `id`,
    `e`.`event_id` AS `event_id`,
    `e`.`event_type` AS `event_type`,
    `e`.`action` AS `action`,
    `e`.`record_time` AS `record_time`,
    `e`.`event_time` AS `event_time`,
    `e`.`event_time_zone_offset` AS `event_time_zone_offset`,
    `e`.`transformation_id` AS `transformation_id`,
    `e`.`biz_location_id_raw` AS `biz_location_id_raw`,
    `e`.`biz_location_join_key` AS `biz_location_join_key`,
    `e`.`read_point_id_raw` AS `read_point_id_raw`,
    `e`.`read_point_join_key` AS `read_point_join_key`,
    `e`.`epc_id_raw` AS `epc_id_raw`,
    `e`.`epc_type` AS `epc_type`,
    `e`.`epc_rel_type` AS `epc_rel_type`,
    `e`.`epc_join_key` AS `epc_join_key`,
    `e`.`product_join_key` AS `product_join_key`,
    `e`.`lot_number` AS `lot_number`,
    `e`.`ilmd` AS `ilmd`,
    JSON_UNQUOTE(JSON_EXTRACT(`er`.`event_body`, _UTF8MB4'$.ilmd."rcycle:productionStep"')) AS `production_step`
FROM
    `data`.`epc_events` AS `e`
LEFT JOIN `data`.`epcis_events_raw` AS `er` ON
    `e`.`event_id` = `er`.`event_id`
WHERE
    JSON_EXTRACT(`er`.`event_body`, _UTF8MB4'$.ilmd."rcycle:productionStep"') IS NOT NULL;


-- `data`.view_plastics_epcs source