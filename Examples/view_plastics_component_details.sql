CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `view_plastics_component_details` (`event_id`,
`idx`,
`input_quantity`,
`component_type`,
`separability`,
`weight_value`,
`weight_unit`,
`epc_join_key`,
`product_join_key`,
`epc_id_raw`) AS WITH `array_data` AS (
    SELECT
        `er`.`event_id` AS `event_id`,
        JSON_LENGTH(JSON_EXTRACT(`er`.`event_body`, _UTF8MB4'$."example:ComponentDetails"')) AS `arr_length`,
        JSON_EXTRACT(`er`.`event_body`, _UTF8MB4'$."example:ComponentDetails"') AS `components`,
        `e`.`epc_join_key` AS `epc_join_key`,
        `e`.`product_join_key` AS `product_join_key`,
        `e`.`epc_id_raw` AS `epc_id_raw`
    FROM
        `data`.`epcis_events_raw` AS `er`
    LEFT JOIN `data`.`epc_events` AS `e` ON
        (`e`.`event_id` = `er`.`event_id`)
        AND `e`.`epc_rel_type` NOT IN (_UTF8MB4'inputQuantityList')
    WHERE
        JSON_EXTRACT(`er`.`event_body`, _UTF8MB4'$."example:ComponentDetails"') IS NOT NULL
)
SELECT
    `ad`.`event_id` AS `event_id`,
    `vn`.`n` AS `idx`,
    REPLACE(REPLACE(JSON_EXTRACT(`ad`.`components`, CONCAT(_UTF8MB4'$[', `vn`.`n`, _UTF8MB4']."example:inputQuantity"')), _UTF8MB4'"', _UTF8MB4''), _UTF8MB4'"', _UTF8MB4'') AS `input_quantity`,
    REPLACE(REPLACE(JSON_EXTRACT(`ad`.`components`, CONCAT(_UTF8MB4'$[', `vn`.`n`, _UTF8MB4']."example:componentTypeCode"')), _UTF8MB4'"', _UTF8MB4''), _UTF8MB4'"', _UTF8MB4'') AS `component_type`,
    REPLACE(REPLACE(JSON_EXTRACT(`ad`.`components`, CONCAT(_UTF8MB4'$[', `vn`.`n`, _UTF8MB4']."example:separabilityCode"')), _UTF8MB4'"', _UTF8MB4''), _UTF8MB4'"', _UTF8MB4'') AS `separability`,
    CAST(NULLIF(JSON_EXTRACT(`ad`.`components`, CONCAT(_UTF8MB4'$[', `vn`.`n`, _UTF8MB4']."example:unitWeight"."example:value"')), _UTF8MB4'null') AS DECIMAL(10, 3)) AS `weight_value`,
    REPLACE(REPLACE(JSON_EXTRACT(`ad`.`components`, CONCAT(_UTF8MB4'$[', `vn`.`n`, _UTF8MB4']."example:unitWeight"."example:unitCode"')), _UTF8MB4'"', _UTF8MB4''), _UTF8MB4'"', _UTF8MB4'') AS `weight_unit`,
    `ad`.`epc_join_key` AS `epc_join_key`,
    `ad`.`product_join_key` AS `product_join_key`,
    `ad`.`epc_id_raw` AS `epc_id_raw`
FROM
    `array_data` AS `ad`
JOIN `data`.`view_numbers` AS `vn` ON
    `vn`.`n`<`ad`.`arr_length`;


-- `data`.view_plastics_epc_events source