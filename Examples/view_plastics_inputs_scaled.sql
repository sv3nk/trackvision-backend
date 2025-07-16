CREATE OR REPLACE
ALGORITHM = UNDEFINED VIEW `view_plastics_inputs_scaled` (`level`,
`final_output_epc_id_raw`,
`output_epc_id_raw`,
`input_epc_id_raw`,
`material_id`,
`share_type`,
`direct_percentage`,
`scaled_percentage`) AS
SELECT
    `v`.`level` AS `level`,
    `v`.`final_output_epc_id_raw` AS `final_output_epc_id_raw`,
    `v`.`output_epc_id_raw` AS `output_epc_id_raw`,
    `v`.`input_epc_id_raw` AS `input_epc_id_raw`,
    `v`.`material_id` AS `material_id`,
    `v`.`share_type` AS `share_type`,
    `v`.`direct_percentage` AS `direct_percentage`,
    `v`.`direct_percentage` * COALESCE(`p1`.`direct_percentage`, 100)/ 100 * COALESCE(`p2`.`direct_percentage`, 100)/ 100 * COALESCE(`p3`.`direct_percentage`, 100)/ 100 * COALESCE(`p4`.`direct_percentage`, 100)/ 100 * COALESCE(`p5`.`direct_percentage`, 100)/ 100 AS `scaled_percentage`
FROM
    ((((`data`.`view_plastics_inputs` AS `v`
LEFT JOIN `data`.`view_plastics_inputs` AS `p1` ON
    `v`.`output_epc_id_raw` = `p1`.`input_epc_id_raw`
    AND `p1`.`level` = `v`.`level`-1)
LEFT JOIN `data`.`view_plastics_inputs` AS `p2` ON
    `p1`.`output_epc_id_raw` = `p2`.`input_epc_id_raw`
    AND `p2`.`level` = `v`.`level`-2)
LEFT JOIN `data`.`view_plastics_inputs` AS `p3` ON
    `p2`.`output_epc_id_raw` = `p3`.`input_epc_id_raw`
    AND `p3`.`level` = `v`.`level`-3)
LEFT JOIN `data`.`view_plastics_inputs` AS `p4` ON
    `p3`.`output_epc_id_raw` = `p4`.`input_epc_id_raw`
    AND `p4`.`level` = `v`.`level`-4)
LEFT JOIN `data`.`view_plastics_inputs` AS `p5` ON
    `p4`.`output_epc_id_raw` = `p5`.`input_epc_id_raw`
    AND `p5`.`level` = `v`.`level`-5;


-- `data`.view_plastics_packaging_ingredients source