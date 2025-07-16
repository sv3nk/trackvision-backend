CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `view_rcycle_packaging_ingredients_details` (`event_id`,
`idx`,
`type_code`,
`value`,
`unit_code`,
`epc_join_key`,
`product_join_key`,
`epc_id_raw`) AS WITH `array_data` AS (
SELECT
    `er`.`event_id` AS `event_id`,
    JSON_LENGTH(JSON_EXTRACT(`er`.`event_body`, _UTF8MB4'$."example:PackagingIngredientDetails"')) AS `arr_length`,
    JSON_EXTRACT(`er`.`event_body`, _UTF8MB4'$."example:PackagingIngredientDetails"') AS `ingredients`,
    `e`.`epc_join_key` AS `epc_join_key`,
    `e`.`product_join_key` AS `product_join_key`,
    `e`.`epc_id_raw` AS `epc_id_raw`
FROM
    `data`.`epc_events` AS `e`
LEFT JOIN `data`.`epcis_events_raw` AS `er` ON
    (`e`.`event_id` = `er`.`event_id`)
    AND `e`.`epc_rel_type` NOT IN (_UTF8MB4'inputQuantityList')
WHERE
    JSON_EXTRACT(`er`.`event_body`, _UTF8MB4'$."example:PackagingIngredientDetails"') IS NOT NULL)
SELECT
    `ad`.`event_id` AS `event_id`,
    `vn`.`n` AS `idx`,
    REPLACE(REPLACE(JSON_EXTRACT(`ad`.`ingredients`, CONCAT(_UTF8MB4'$[', `vn`.`n`, _UTF8MB4']."example:typeCode"')), _UTF8MB4'"', _UTF8MB4''), _UTF8MB4'"', _UTF8MB4'') AS `type_code`,
    CAST(NULLIF(JSON_EXTRACT(`ad`.`ingredients`, CONCAT(_UTF8MB4'$[', `vn`.`n`, _UTF8MB4']."example:value"')), _UTF8MB4'null') AS DECIMAL(10, 2)) AS `value`,
    REPLACE(REPLACE(JSON_EXTRACT(`ad`.`ingredients`, CONCAT(_UTF8MB4'$[', `vn`.`n`, _UTF8MB4']."example:unitCode"')), _UTF8MB4'"', _UTF8MB4''), _UTF8MB4'"', _UTF8MB4'') AS `unit_code`,
    `ad`.`epc_join_key` AS `epc_join_key`,
    `ad`.`product_join_key` AS `product_join_key`,
    `ad`.`epc_id_raw` AS `epc_id_raw`
FROM
    `array_data` AS `ad`
JOIN `data`.`view_numbers` AS `vn` ON
    `vn`.`n`<`ad`.`arr_length`;


