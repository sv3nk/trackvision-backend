WITH RECURSIVE cte_inputs AS (
    -- Base case: start with the given parent's immediate children
    SELECT l1.parent_join_key AS parent_id,
        l1.child_join_key AS child_id,
        l1.depth,
        l1.share AS share,
        1 AS level
    FROM rcycle_epc_relationships AS l1
    WHERE l1.parent_join_key = CONCAT('/01/', ?, '/10/', ?)
        AND l1.depth = 0
    UNION ALL
    -- Recursive case: find children of children
    SELECT l.parent_join_key AS parent_id,
        l.child_join_key AS child_id,
        l.depth,
        l.share,
        level + 1 AS level
    FROM rcycle_epc_relationships AS l
        INNER JOIN cte_inputs r ON l.parent_join_key = r.child_id
    WHERE l.depth = 1
) -- Query the recursive CTE
SELECT r.level,
    r.parent_id,
    r.child_id,
    p.gtin,
    p.lot_number AS lot,
    IF (
        s.process_type = 'Packaging producing',
        CONCAT('Packaging - ', a.description),
        IF (
            s.process_type = 'Plastic raw material producing',
            CONCAT(h.description, ' - ', i.description),
            c.description
        )
    ) AS type,
    p.product_name,
    p.detailed_name,
    p.brand AS brand_id,
    b.brand_name AS product_brand,
    b.sub_brand_name,
    p.primary_image,
    p.quantity AS quantity_value,
    p.quantity_uom AS quantity_uom,
    quantity_uom.description AS quantity_uom_desc,
    p.event_time AS 'Production Date',
    SUBSTRING(p.biz_location_join_key, 6, 13) AS GLN,
    g.location_name AS GLN_Name,
    p.read_point_join_key AS readPoint,
    rg.location_name AS readPointName,
    p.packaging_type,
    a.description AS packaging_type_name,
    a.long_description AS packaging_type_description,
    p.packaging_level,
    plc.description AS packaging_level_desc,
    plc.long_description AS packaging_level_long_desc,
    p.content_of_packaging,
    cpc.description AS content_of_packaging_description,
    cpc.long_description AS content_of_packaging_long_description,
    p.unit_length,
    p.unit_length_uom,
    unit_length_uom.description AS unit_length_uom_desc,
    p.unit_width,
    p.unit_width_uom,
    unit_width_uom.description AS unit_width_uom_desc,
    p.unit_height,
    p.unit_height_uom,
    unit_height_uom.description AS unit_height_uom_desc,
    p.unit_weight,
    p.unit_weight_uom,
    unit_weight_uom.description AS unit_weight_uom_desc,
    p.filling_volume,
    p.filling_volume_uom,
    filling_volume_uom.description AS filling_volume_uom_desc,
    p.product_shape,
    psc.description AS product_shape_desc,
    p.product_type,
    ctc.description AS product_type_desc,
    p.product_class,
    ic.group AS product_class_group,
    ic.description AS product_class_desc,
    ic.long_description AS product_class_long_desc,
    p.application_range,
    arc.description AS application_range_desc,
    arc.long_description AS application_range_long_desc,
    p.mfr,
    p.mfr_uom,
    mfr_uom.description AS mfr_uom_desc,
    r.share,
    p.event_id,
    er.event_body
FROM cte_inputs r
    LEFT JOIN view_rcycle_epcs_events_properties p ON child_id = p.epc_join_key
    LEFT JOIN location g ON gln = SUBSTRING(p.biz_location_join_key, 6, 13)
    LEFT JOIN location rg ON rg.id = p.read_point_join_key
    LEFT JOIN ref_production_step_codes s ON p.production_step = s.code
    LEFT JOIN ref_product_shape_codes h ON p.product_shape = h.code
    LEFT JOIN ref_component_type_code c ON p.product_type = c.code
    LEFT JOIN ref_ingredient_codes i ON p.product_class = i.code
    LEFT JOIN ref_package_type_codes a ON p.packaging_type = a.code
    LEFT JOIN ref_packaging_level_codes plc ON p.packaging_level = plc.code
    LEFT JOIN ref_content_of_packaging_codes cpc ON p.content_of_packaging = cpc.code
    LEFT JOIN epcis_events_raw er ON p.event_id = er.event_id
    LEFT JOIN ref_uom quantity_uom ON p.quantity_uom = quantity_uom.code
    LEFT JOIN ref_uom unit_length_uom ON p.unit_length_uom = unit_length_uom.code
    LEFT JOIN ref_uom unit_width_uom ON p.unit_width_uom = unit_width_uom.code
    LEFT JOIN ref_uom unit_height_uom ON p.unit_height_uom = unit_height_uom.code
    LEFT JOIN ref_uom unit_weight_uom ON p.unit_weight_uom = unit_weight_uom.code
    LEFT JOIN ref_uom filling_volume_uom ON p.filling_volume_uom = filling_volume_uom.code
    LEFT JOIN ref_product_shape_codes psc ON p.product_shape = psc.code
    LEFT JOIN ref_component_type_code ctc ON p.product_type = ctc.code
    LEFT JOIN ref_ingredient_codes ic ON p.product_class = ic.code
    LEFT JOIN ref_application_range_codes arc ON p.application_range = arc.code
    LEFT JOIN ref_uom mfr_uom ON p.mfr_uom = mfr_uom.code
    LEFT JOIN brand b ON p.brand = b.id
WHERE g.gln_extension IS NULL
ORDER BY level,
    share DESC;