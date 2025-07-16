WITH `ancestor` AS (
SELECT
    `is`.`output_epc_id_raw` AS `output_epc_id_raw`,
    `is`.`input_quantity` AS `input_quantity`,
    `is`.`percentage` AS `percentage`,
    `is`.`share_type` AS `share_type`
FROM
    `data`.`view_rcycle_input_shares` AS `is`
WHERE
    `is`.`input_quantity` IS NOT NULL AND `is`.`output_epc_id_raw` = "https://rcycledemo.tvai.me/01/04064074001970/10/mBsLXFfTJe"

UNION ALL

SELECT
    `an`.`output_epc_id_raw` AS `output_epc_id_raw`,
    `an`.`input_quantity` AS `input_quantity`,
    `an`.`percentage` AS `percentage`,
    `an`.`share_type` AS `share_type`
FROM
    `ancestor` AS `an` CROSS JOIN `data`.`view_rcycle_input_shares` AS `is`
WHERE `an`.`input_quantity` = `is`.`output_epc_id_raw`
)
SELECT * FROM `ancestor`



WITH RECURSIVE AncestralTree AS (
    -- Base case: start with the given parent's immediate children
    SELECT 
        output_epc_id_raw AS parent_id,
        input_quantity AS child_id,
        1 AS level
    FROM 
        view_rcycle_input_shares
    WHERE 
        output_epc_id_raw = "https://rcycledemo.tvai.me/01/04064074001970/10/mBsLXFfTJe"
        AND input_quantity IS NOT NULL
    
    UNION ALL
    
    -- Recursive case: find children of children
    SELECT 
        t.output_epc_id_raw AS parent_id,
        t.input_quantity AS child_id,
        at.level + 1 AS level
    FROM 
        view_rcycle_input_shares t
    JOIN 
        AncestralTree at ON t.output_epc_id_raw = at.child_id
    WHERE
        t.input_quantity IS NOT NULL
)

-- Query the recursive CTE
SELECT 
    level,
    parent_id,
    child_id
FROM 
    AncestralTree
ORDER BY 
    level;