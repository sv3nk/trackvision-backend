CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `view_rcycle_input_shares` (
`event_id`,
`idx`,
`material_id`,
`input_quantity`,
`percentage`,
`unit`,
`share_type`,
`output_epc_join_key`,
`output_product_join_key`,
`output_epc_id_raw`
) AS WITH `component_weights` AS (
    SELECT
        `event_id` AS `event_id`,
        SUM(`weight`) AS `total_weight`
    FROM
        `data`.`view_rcycle_component_details`
    GROUP BY
        `event_id`
),
`component_percentages` AS (
SELECT
    `cd`.`event_id` AS `event_id`,
    `cd`.`idx` AS `idx`,
    `cd`.`component_type` AS `material_id`,
    `cd`.`input_quantity` AS `input_quantity`,
    (`cd`.`weight` / `cw`.`total_weight` * 100) AS `percentage`,
    _UTF8MB4'P1' AS `unit`,
    _UTF8MB4'COMPONENT' AS `share_type`,
    `cd`.`epc_join_key` AS `epc_join_key`,
    `cd`.`product_join_key` AS `product_join_key`,
    `cd`.`epc_id_raw` AS `epc_id_raw`
FROM
    `data`.`view_rcycle_component_details` AS `cd`
JOIN `component_weights` AS `cw` ON
    `cd`.`event_id` = `cw`.`event_id`)
SELECT
    `event_id` AS `event_id`,
    `idx` AS `idx`,
    `material_id` AS `material_id`,
    `input_quantity` AS `input_quantity`,
    `percentage` AS `percentage`,
    `unit` AS `unit`,
    `share_type` AS `share_type`,
    `epc_join_key` AS `output_epc_join_key`,
    `product_join_key` AS `output_product_join_key`,
    `epc_id_raw` AS `output_epc_id_raw`
FROM
    (
    SELECT
        `event_id` AS `event_id`,
        `idx` AS `idx`,
        `type_code` AS `material_id`,
        NULL AS `input_quantity`,
        `value` AS `percentage`,
        `unit_code` AS `unit`,
        _UTF8MB4'PACKAGING_INGREDIENT' AS `share_type`,
        `epc_join_key` AS `epc_join_key`,
        `product_join_key` AS `product_join_key`,
        `epc_id_raw` AS `epc_id_raw`
    FROM
        `data`.`view_rcycle_packaging_ingredients_details`
UNION ALL
    SELECT
        `event_id` AS `event_id`,
        `idx` AS `idx`,
        NULL AS `material_id`,
        `quantity` AS `input_quantity`,
        `value` AS `percentage`,
        `unit_code` AS `unit`,
        _UTF8MB4'INPUT_QUANTITY' AS `share_type`,
        `epc_join_key` AS `epc_join_key`,
        `product_join_key` AS `product_join_key`,
        `epc_id_raw` AS `epc_id_raw`
    FROM
        `data`.`view_rcycle_input_quantity_shares`
UNION ALL
    SELECT
        `event_id` AS `event_id`,
        `idx` AS `idx`,
        `material_id` AS `material_id`,
        `input_quantity` AS `input_quantity`,
        `percentage` AS `percentage`,
        `unit` AS `unit`,
        `share_type` AS `share_type`,
        `epc_join_key` AS `epc_join_key`,
        `product_join_key` AS `product_join_key`,
        `epc_id_raw` AS `epc_id_raw`
    FROM
        `component_percentages`) AS `combined`;