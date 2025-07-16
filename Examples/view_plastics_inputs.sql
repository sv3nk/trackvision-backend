CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `view_plastics_inputs` (`level`,
`final_output_epc_id_raw`,
`output_epc_id_raw`,
`input_epc_id_raw`,
`material_id`,
`share_type`,
`direct_percentage`) AS
SELECT
    1 AS `level`,
    `l1`.`output_epc_id_raw` AS `final_output_epc_id_raw`,
    `l1`.`output_epc_id_raw` AS `output_epc_id_raw`,
    `l1`.`input_quantity` AS `input_epc_id_raw`,
    `l1`.`material_id` AS `material_id`,
    `l1`.`share_type` AS `share_type`,
    `l1`.`percentage` AS `direct_percentage`
FROM
    `data`.`view_plastics_input_shares` AS `l1`
UNION ALL
SELECT
    2 AS `level`,
    `l1`.`output_epc_id_raw` AS `final_output_epc_id_raw`,
    `l2`.`output_epc_id_raw` AS `output_epc_id_raw`,
    `l2`.`input_quantity` AS `input_epc_id_raw`,
    `l2`.`material_id` AS `material_id`,
    `l2`.`share_type` AS `share_type`,
    `l2`.`percentage` AS `direct_percentage`
FROM
    `data`.`view_plastics_input_shares` AS `l1`
JOIN `data`.`view_plastics_input_shares` AS `l2` ON
    `l2`.`output_epc_id_raw` = `l1`.`input_quantity`
UNION ALL
SELECT
    3 AS `level`,
    `l1`.`output_epc_id_raw` AS `final_output_epc_id_raw`,
    `l3`.`output_epc_id_raw` AS `output_epc_id_raw`,
    `l3`.`input_quantity` AS `input_epc_id_raw`,
    `l3`.`material_id` AS `material_id`,
    `l3`.`share_type` AS `share_type`,
    `l3`.`percentage` AS `direct_percentage`
FROM
    (`data`.`view_plastics_input_shares` AS `l1`
JOIN `data`.`view_plastics_input_shares` AS `l2` ON
    `l2`.`output_epc_id_raw` = `l1`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l3` ON
    `l3`.`output_epc_id_raw` = `l2`.`input_quantity`
UNION ALL
SELECT
    4 AS `level`,
    `l1`.`output_epc_id_raw` AS `final_output_epc_id_raw`,
    `l4`.`output_epc_id_raw` AS `output_epc_id_raw`,
    `l4`.`input_quantity` AS `input_epc_id_raw`,
    `l4`.`material_id` AS `material_id`,
    `l4`.`share_type` AS `share_type`,
    `l4`.`percentage` AS `direct_percentage`
FROM
    ((`data`.`view_plastics_input_shares` AS `l1`
JOIN `data`.`view_plastics_input_shares` AS `l2` ON
    `l2`.`output_epc_id_raw` = `l1`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l3` ON
    `l3`.`output_epc_id_raw` = `l2`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l4` ON
    `l4`.`output_epc_id_raw` = `l3`.`input_quantity`
UNION ALL
SELECT
    5 AS `level`,
    `l1`.`output_epc_id_raw` AS `final_output_epc_id_raw`,
    `l5`.`output_epc_id_raw` AS `output_epc_id_raw`,
    `l5`.`input_quantity` AS `input_epc_id_raw`,
    `l5`.`material_id` AS `material_id`,
    `l5`.`share_type` AS `share_type`,
    `l5`.`percentage` AS `direct_percentage`
FROM
    (((`data`.`view_plastics_input_shares` AS `l1`
JOIN `data`.`view_plastics_input_shares` AS `l2` ON
    `l2`.`output_epc_id_raw` = `l1`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l3` ON
    `l3`.`output_epc_id_raw` = `l2`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l4` ON
    `l4`.`output_epc_id_raw` = `l3`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l5` ON
    `l5`.`output_epc_id_raw` = `l4`.`input_quantity`
UNION ALL
SELECT
    6 AS `level`,
    `l1`.`output_epc_id_raw` AS `final_output_epc_id_raw`,
    `l6`.`output_epc_id_raw` AS `output_epc_id_raw`,
    `l6`.`input_quantity` AS `input_epc_id_raw`,
    `l6`.`material_id` AS `material_id`,
    `l6`.`share_type` AS `share_type`,
    `l6`.`percentage` AS `direct_percentage`
FROM
    ((((`data`.`view_plastics_input_shares` AS `l1`
JOIN `data`.`view_plastics_input_shares` AS `l2` ON
    `l2`.`output_epc_id_raw` = `l1`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l3` ON
    `l3`.`output_epc_id_raw` = `l2`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l4` ON
    `l4`.`output_epc_id_raw` = `l3`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l5` ON
    `l5`.`output_epc_id_raw` = `l4`.`input_quantity`)
JOIN `data`.`view_plastics_input_shares` AS `l6` ON
    `l6`.`output_epc_id_raw` = `l5`.`input_quantity`;


-- `data`.view_plastics_inputs_scaled source