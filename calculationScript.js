// data definition

var treeData = [
    {
        "level": 1,
        "parent_id": "/01/04064074002090/10/AYxbMLP2932005",
        "child_id": "/01/04064074002090/10/AYxbMLP2932005",
        "gtin": "04064074002090",
        "lot": "AYxbMLP2932005",
        "type": "Packaging - Pouch",
        "product_name": "Pouch for Detergent (PlasticBond Project)",
        "detailed_name": "PlasticBond Demo Package (Seal1_BOPE23)",
        "brand_id": null,
        "product_brand": null,
        "sub_brand_name": null,
        "primary_image": "f6644cde-967f-4e22-a84b-6b60446fe827",
        "production_step": "PACKAGING_PRODUCTION",
        "production_step_desc": "Packaging Production",
        "quantity_value": "1000.00",
        "quantity_uom": null,
        "quantity_uom_desc": null,
        "Production Date": "2024-08-10T13:15:24.000Z",
        "GLN": "4064074002027",
        "GLN_Name": "Henkel, Düsseldorf, Germany",
        "readPoint": "/414/4064074002027/254/2",
        "readPointName": "Packaging Line for Pouches",
        "packaging_type": "PO",
        "packaging_type_desc": "Pouch",
        "packaging_type_long_desc": "A preformed, flexible container, generally enclosed with a gusset seal at the bottom of the pack can be shaped/arranged to allow the pack to stand on shelf.",
        "packaging_level": "PRIMARY",
        "packaging_level_desc": "Primary packaging",
        "packaging_level_long_desc": "The individual sale unit container that directly contains the product and is handed to the end consumer. For example - a plastic bottle or aluminum can holding a beverage.",
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": "130.00",
        "unit_width_uom": "MMT",
        "unit_width_uom_desc": "mm",
        "unit_height": "210.00",
        "unit_height_uom": "MMT",
        "unit_height_uom_desc": "mm",
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": "500.00",
        "filling_volume_uom": "ML",
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": null,
        "product_type_desc": null,
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "1.00000",
        "event_id": "ni:///sha-256;b1cbf350ad5981ffc1ca107b75d55be2d5dac498a71a9ba2bc6a16b65bb00df0?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074002027"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;b1cbf350ad5981ffc1ca107b75d55be2d5dac498a71a9ba2bc6a16b65bb00df0?ver=CBV2.0",
            "eventTime": "2024-08-10T13:15:24+01:00",
            "eventTimeZoneOffset": "+01:00",
            "example:ComponentDetails": [
                {
                    "example:componentTypeCode": "BAG",
                    "example:inputQuantity": "https://rcycledemo.tvai.me/01/94064074000266/10/AYobMLPz871003",
                    "example:separabilityCode": "NOT_REMOVABLE",
                    "example:surfaceCoverage": {
                        "example:unitCode": "P1",
                        "example:value": 98
                    },
                    "example:unitWeight": {
                        "example:unitCode": "GRM",
                        "example:value": 8.7
                    }
                },
                {
                    "example:componentTypeCode": "SPOUT",
                    "example:inputQuantity": "https://rcycledemo.tvai.me/01/04064074000270/10/AYGbKLPY754005",
                    "example:separabilityCode": "NOT_REMOVABLE",
                    "example:surfaceCoverage": {
                        "example:unitCode": "P1",
                        "example:value": 2
                    },
                    "example:unitWeight": {
                        "example:unitCode": "GRM",
                        "example:value": 2.2
                    }
                }
            ],
            "ilmd": {
                "gs1:packagingType": "PO",
                "rcycle:RecyclabilityList": [
                    {
                        "rcycle:areaOfApplication": "DE",
                        "rcycle:certificateNumber": "Own",
                        "rcycle:expiryDate": "2026-05-09",
                        "rcycle:rating": "A",
                        "rcycle:recyclingValue": {
                            "rcycle:unitCode": "P1",
                            "rcycle:value": 96
                        },
                        "rcycle:standard": "Estimation",
                        "rcycle:startDate": "2025-05-09"
                    }
                ],
                "rcycle:detailedName": "PlasticBond Demo Package (Seal1_BOPE23)",
                "rcycle:fillingVolume": {
                    "rcycle:unitCode": "ML",
                    "rcycle:value": 500
                },
                "rcycle:objectForm": "2D",
                "rcycle:packagingLevel": "PRIMARY",
                "rcycle:productionStep": "PACKAGING_PRODUCTION",
                "rcycle:unitHeight": {
                    "rcycle:unitCode": "MMT",
                    "rcycle:value": 210
                },
                "rcycle:unitWidth": {
                    "rcycle:unitCode": "MMT",
                    "rcycle:value": 130
                }
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AYobMLPz871003",
                    "quantity": 240,
                    "uom": "MTR"
                },
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/04064074000270/10/AYGbKLPY754005",
                    "quantity": 1000
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/04064074002090/10/AYxbMLP2932005",
                    "quantity": 1000
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074002027/254/2"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 2,
        "parent_id": "/01/04064074002090/10/AYxbMLP2932005",
        "child_id": "/01/94064074000266/10/AYobMLPz871003",
        "gtin": "94064074000266",
        "lot": "AYobMLPz871003",
        "type": "Web",
        "product_name": "Flexible Material (transparent)",
        "detailed_name": "Laminate PlasticBond_Seal1_BOPE23",
        "brand_id": "707e1207-9b33-4302-88bc-3c859e9cbb45",
        "product_brand": "Various Packaging Materials and Components",
        "sub_brand_name": null,
        "primary_image": null,
        "production_step": "SLITTING",
        "production_step_desc": "Slitting",
        "quantity_value": "700.00",
        "quantity_uom": "MTR",
        "quantity_uom_desc": "m",
        "Production Date": "2024-07-01T11:25:56.000Z",
        "GLN": "4064074001501",
        "GLN_Name": "Kampf GmbH, Wiehl, D",
        "readPoint": "/414/4064074001501/254/1",
        "readPointName": "Slitter 1",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "WEB",
        "product_type_desc": "Web",
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "0.79817",
        "event_id": "ni:///sha-256;fc8df900c48a65c865ee7715de272db749438105d1f7bc5e3cd9010ebe62ed25?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074001501"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;fc8df900c48a65c865ee7715de272db749438105d1f7bc5e3cd9010ebe62ed25?ver=CBV2.0",
            "eventTime": "2024-07-01T11:25:56+01:00",
            "eventTimeZoneOffset": "+01:00",
            "example:InputQuantityShares": [
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074000266/10/AYfbMLPq702004",
                    "example:unitCode": "P1",
                    "example:value": 100
                }
            ],
            "ilmd": {
                "rcycle:detailedName": "Laminate PlasticBond_Seal1_BOPE23",
                "rcycle:productType": "WEB",
                "rcycle:productionStep": "SLITTING",
                "rcycle:substrateWidth": {
                    "rcycle:unitCode": "MMT",
                    "rcycle:value": 490
                }
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AYfbMLPq702004",
                    "quantity": 750,
                    "uom": "MTR"
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AYobMLPz871003",
                    "quantity": 700,
                    "uom": "MTR"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074001501/254/1"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 2,
        "parent_id": "/01/04064074002090/10/AYxbMLP2932005",
        "child_id": "/01/04064074000270/10/AYGbKLPY754005",
        "gtin": "04064074000270",
        "lot": "AYGbKLPY754005",
        "type": "Spout",
        "product_name": "Rigid Material (unspecific)",
        "detailed_name": "Spout PE-80",
        "brand_id": "707e1207-9b33-4302-88bc-3c859e9cbb45",
        "product_brand": "Various Packaging Materials and Components",
        "sub_brand_name": null,
        "primary_image": null,
        "production_step": "INJECTION_MOULDING",
        "production_step_desc": "Injection Moulding",
        "quantity_value": "1000.00",
        "quantity_uom": null,
        "quantity_uom_desc": null,
        "Production Date": "2023-12-06T11:33:00.000Z",
        "GLN": "4064074000148",
        "GLN_Name": "Pöppelmann GmbH & Co.KG, Werk 1",
        "readPoint": "/414/4064074000148/254/4",
        "readPointName": "Production Line",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": "2.20",
        "unit_weight_uom": "GRM",
        "unit_weight_uom_desc": "g",
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "SPOUT",
        "product_type_desc": "Spout",
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "0.20183",
        "event_id": "ni:///sha-256;041b41d63baebe205ac488de75638909818222af243c43f33f6521dbe041d4fb?ver=CBV2.0",
        "event_body": {
            "action": "ADD",
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074000148"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;041b41d63baebe205ac488de75638909818222af243c43f33f6521dbe041d4fb?ver=CBV2.0",
            "eventTime": "2023-12-06T11:33:00+01:00",
            "eventTimeZoneOffset": "+01:00",
            "example:ColourOfBasicMaterial": [
                {
                    "example:colourCodeListCode": "CIRCULAR_PLASTICS",
                    "example:colourCodeValue": "LIGHT"
                }
            ],
            "example:InputMaterialOrigin": [
                {
                    "example:typeCode": "PCR_M",
                    "example:unitCode": "P1",
                    "example:value": 80
                }
            ],
            "example:PackagingIngredientDetails": [
                {
                    "example:typeCode": "PE",
                    "example:unitCode": "P1",
                    "example:value": 100
                }
            ],
            "example:biodegradability": false,
            "example:foodApproval": false,
            "ilmd": {
                "example:density": {
                    "example:unitCode": "23",
                    "example:value": 0.91
                },
                "example:unitWeight": {
                    "example:unitCode": "GRM",
                    "example:value": 2.2
                },
                "rcycle:detailedName": "Spout PE-80",
                "rcycle:productType": "SPOUT",
                "rcycle:productionStep": "INJECTION_MOULDING"
            },
            "quantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/04064074000270/10/AYGbKLPY754005",
                    "quantity": 1000
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074000148/254/4"
            },
            "type": "ObjectEvent"
        }
    },
    {
        "level": 3,
        "parent_id": "/01/94064074000266/10/AYobMLPz871003",
        "child_id": "/01/94064074000266/10/AYfbMLPq702004",
        "gtin": "94064074000266",
        "lot": "AYfbMLPq702004",
        "type": "Web",
        "product_name": "Flexible Material (transparent)",
        "detailed_name": "Laminate PlasticBond_Seal1_BOPE23",
        "brand_id": "707e1207-9b33-4302-88bc-3c859e9cbb45",
        "product_brand": "Various Packaging Materials and Components",
        "sub_brand_name": null,
        "primary_image": null,
        "production_step": "LAMINATING",
        "production_step_desc": "Laminating",
        "quantity_value": "750.00",
        "quantity_uom": "MTR",
        "quantity_uom_desc": "m",
        "Production Date": "2024-06-12T13:21:19.000Z",
        "GLN": "4064074000176",
        "GLN_Name": "Gascogne Flexible Germany GmbH, Linnich",
        "readPoint": "/414/4064074000176/254/2",
        "readPointName": "Laminator",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "WEB",
        "product_type_desc": "Web",
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "1.00000",
        "event_id": "ni:///sha-256;5d41d9b71e948b2a7f33a496ed35d3e80f10161309c247b4f6076cec8481cd6a?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074000176"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;5d41d9b71e948b2a7f33a496ed35d3e80f10161309c247b4f6076cec8481cd6a?ver=CBV2.0",
            "eventTime": "2024-06-12T13:21:19+01:00",
            "eventTimeZoneOffset": "+01:00",
            "example:ColourOfBasicMaterial": [
                {
                    "example:colourCodeListCode": "CIRCULAR_PLASTICS",
                    "example:colourCodeValue": "TRANSPARENT_NC"
                }
            ],
            "example:InputQuantityShares": [
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074000266/10/AYObMLPm071008",
                    "example:unitCode": "P1",
                    "example:value": 81.775
                },
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074000266/10/YKcT4jUe5S066YUBipS6",
                    "example:unitCode": "P1",
                    "example:value": 16.82
                }
            ],
            "example:PackagingIngredientDetails": [
                {
                    "example:typeCode": "ADHESIVE_PU_BASED",
                    "example:unitCode": "P1",
                    "example:value": 1.43
                }
            ],
            "example:biodegradability": false,
            "example:density": {
                "example:unitCode": "23",
                "example:value": 1
            },
            "example:foodApproval": true,
            "example:surfaceWeight": {
                "example:unitCode": "GM",
                "example:value": 2.1
            },
            "ilmd": {
                "rcycle:InsideSealingType": [
                    {
                        "rcycle:sealingType": "PE"
                    }
                ],
                "rcycle:detailedName": "Laminate PlasticBond_Seal1_BOPE23",
                "rcycle:printType": "REVERSE_PRINT",
                "rcycle:productType": "WEB",
                "rcycle:productionStep": "LAMINATING",
                "rcycle:sealingCondMax": {
                    "rcycle:unitCode": "CEL",
                    "rcycle:value": 140
                },
                "rcycle:sealingCondMin": {
                    "rcycle:unitCode": "CEL",
                    "rcycle:value": 130
                }
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AYObMLPm071008",
                    "quantity": 1000,
                    "uom": "MTR"
                },
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/YKcT4jUe5S066YUBipS6",
                    "quantity": 1000,
                    "uom": "MTR"
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AYfbMLPq702004",
                    "quantity": 750,
                    "uom": "MTR"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074000176/254/2"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 4,
        "parent_id": "/01/94064074000266/10/AYfbMLPq702004",
        "child_id": "/01/94064074000266/10/AYObMLPm071008",
        "gtin": "94064074000266",
        "lot": "AYObMLPm071008",
        "type": "Web",
        "product_name": "Flexible Material (transparent)",
        "detailed_name": "Lamination Film REC70-120-SEAL1",
        "brand_id": "707e1207-9b33-4302-88bc-3c859e9cbb45",
        "product_brand": "Various Packaging Materials and Components",
        "sub_brand_name": null,
        "primary_image": null,
        "production_step": "SLITTING",
        "production_step_desc": "Slitting",
        "quantity_value": "1000.00",
        "quantity_uom": "MTR",
        "quantity_uom_desc": "m",
        "Production Date": "2023-11-19T12:08:23.000Z",
        "GLN": "4064074001501",
        "GLN_Name": "Kampf GmbH, Wiehl, D",
        "readPoint": "/414/4064074001501/254/1",
        "readPointName": "Slitter 1",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "WEB",
        "product_type_desc": "Web",
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "0.81780",
        "event_id": "ni:///sha-256;7fa06b35e7f9b929c9827f1f6a6fb27460cbb10a28abe9d4968fe260c2eee72c?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074001501"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;7fa06b35e7f9b929c9827f1f6a6fb27460cbb10a28abe9d4968fe260c2eee72c?ver=CBV2.0",
            "eventTime": "2023-11-19T12:08:23+01:00",
            "eventTimeZoneOffset": "+01:00",
            "example:InputQuantityShares": [
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074000464/10/AYRVHON0233008",
                    "example:unitCode": "P1",
                    "example:value": 100
                }
            ],
            "ilmd": {
                "rcycle:OutsideSealingType": [
                    {
                        "rcycle:sealingType": "PE"
                    }
                ],
                "rcycle:articleNumber": "608047",
                "rcycle:detailedName": "Lamination Film REC70-120-SEAL1",
                "rcycle:productType": "WEB",
                "rcycle:productionStep": "SLITTING",
                "rcycle:substrateWidth": {
                    "rcycle:unitCode": "MMT",
                    "rcycle:value": 1005
                },
                "rcycle:windingCore": {
                    "rcycle:unitCode": "INH",
                    "rcycle:value": 6
                }
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000464/10/AYRVHON0233008",
                    "quantity": 2024,
                    "uom": "MTR"
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AYObMLPm071008",
                    "quantity": 1000,
                    "uom": "MTR"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074001501/254/1"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 4,
        "parent_id": "/01/94064074000266/10/AYfbMLPq702004",
        "child_id": "/01/94064074000266/10/YKcT4jUe5S066YUBipS6",
        "gtin": "94064074000266",
        "lot": "YKcT4jUe5S066YUBipS6",
        "type": "Web",
        "product_name": "Flexible Material (transparent)",
        "detailed_name": "BOPE-PCR 5L-23_Printed",
        "brand_id": "707e1207-9b33-4302-88bc-3c859e9cbb45",
        "product_brand": "Various Packaging Materials and Components",
        "sub_brand_name": null,
        "primary_image": null,
        "production_step": "PRINTING",
        "production_step_desc": "Printing",
        "quantity_value": "2000.00",
        "quantity_uom": "MTR",
        "quantity_uom_desc": "m",
        "Production Date": "2024-06-04T11:06:44.000Z",
        "GLN": "4064074000176",
        "GLN_Name": "Gascogne Flexible Germany GmbH, Linnich",
        "readPoint": "/414/4064074000176/254/1",
        "readPointName": "Printing Line",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "WEB",
        "product_type_desc": "Web",
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "0.16820",
        "event_id": "ni:///sha-256;f9c3a4e3d6f12981ff27a6f23dcc3fcd99f2aa6b1973b4dbbe6a5c9581807525?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074000176"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;f9c3a4e3d6f12981ff27a6f23dcc3fcd99f2aa6b1973b4dbbe6a5c9581807525?ver=CBV2.0",
            "eventTime": "2024-06-04T11:06:44+01:00",
            "eventTimeZoneOffset": "+01:00",
            "example:ColourOfPrinting": [
                {
                    "example:colourCodeListCode": "CIRCULAR_PLASTICS_PRINTING",
                    "example:colourCodeValue": "LIGHT"
                }
            ],
            "example:InputQuantityShares": [
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074000266/10/AY7bMLPN751005",
                    "example:unitCode": "P1",
                    "example:value": 83
                }
            ],
            "example:PackagingIngredientDetails": [
                {
                    "example:typeCode": "LACQUER",
                    "example:unitCode": "P1",
                    "example:value": 8
                },
                {
                    "example:typeCode": "INK_PU_BASED",
                    "example:unitCode": "P1",
                    "example:value": 9
                }
            ],
            "example:biodegradability": false,
            "example:density": {
                "example:unitCode": "23",
                "example:value": 1
            },
            "example:foodApproval": true,
            "example:surfaceWeight": {
                "example:unitCode": "GM",
                "example:value": 4.2
            },
            "ilmd": {
                "rcycle:detailedName": "BOPE-PCR 5L-23_Printed",
                "rcycle:productType": "WEB",
                "rcycle:productionStep": "PRINTING"
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AY7bMLPN751005",
                    "quantity": 2790,
                    "uom": "MTR"
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/YKcT4jUe5S066YUBipS6",
                    "quantity": 2000,
                    "uom": "MTR"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074000176/254/1"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 5,
        "parent_id": "/01/94064074000266/10/AYObMLPm071008",
        "child_id": "/01/94064074000464/10/AYRVHON0233008",
        "gtin": "94064074000464",
        "lot": "AYRVHON0233008",
        "type": "Web",
        "product_name": "EVO Blown Film with recycled content",
        "detailed_name": "Lamination Film REC70-120-SEAL1",
        "brand_id": "fbf57575-dc21-4aed-ad43-1d813cc4f5c7",
        "product_brand": "EVO Blown Film",
        "sub_brand_name": "Blown Film produced from Reifenhäuser",
        "primary_image": null,
        "production_step": "FILM_EXTRUSION",
        "production_step_desc": "Film Extrusion",
        "quantity_value": "2024.00",
        "quantity_uom": "MTR",
        "quantity_uom_desc": "m",
        "Production Date": "2023-08-02T15:54:17.000Z",
        "GLN": "4064074000405",
        "GLN_Name": "Reifenhäuser R&D Center",
        "readPoint": "/414/4064074000405/254/3",
        "readPointName": "EVO Ultra Fusion 3-1600",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "WEB",
        "product_type_desc": "Web",
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": "PE1",
        "application_range_desc": "PE - 0.2-5.0 g/10min at 2.16 kg/190 °C",
        "application_range_long_desc": "PE for film extrusion and blow moulding (film, bottles, drums). Including blow moulding grades: HDPE 5-25 g/10min at 21.6 kg/190 °C and HMWPE 2-5 g/10min @21.6 kg/190 °C",
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "1.00000",
        "event_id": "ni:///sha-256;b2f09c189e2d51ebd4bf3bfbe11b2d8df7e3c3eed4f0902ee2ff1abc246a29eb?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074000405"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;b2f09c189e2d51ebd4bf3bfbe11b2d8df7e3c3eed4f0902ee2ff1abc246a29eb?ver=CBV2.0",
            "eventTime": "2023-08-02T15:54:17+02:00",
            "eventTimeZoneOffset": "+02:00",
            "example:ColourOfBasicMaterial": [
                {
                    "example:colourCodeListCode": "CIRCULAR_PLASTICS",
                    "example:colourCodeValue": "LIGHT"
                }
            ],
            "example:InputQuantityShares": [
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074000549/10/AYBbLLPG701005",
                    "example:unitCode": "P1",
                    "example:value": 70
                }
            ],
            "example:PackagingIngredientDetails": [
                {
                    "example:typeCode": "PE-LLD",
                    "example:unitCode": "P1",
                    "example:value": 15.4
                },
                {
                    "example:typeCode": "PE-HD",
                    "example:unitCode": "P1",
                    "example:value": 8.9
                },
                {
                    "example:typeCode": "PE-LD",
                    "example:unitCode": "P1",
                    "example:value": 4.5
                },
                {
                    "example:typeCode": "TIO2",
                    "example:unitCode": "P1",
                    "example:value": 1.2
                }
            ],
            "example:biodegradability": false,
            "example:foodApproval": true,
            "ilmd": {
                "example:applicationRange": "PE1",
                "example:density": {
                    "example:unitCode": "23",
                    "example:value": 0.932
                },
                "rcycle:InsideSealingType": [
                    {
                        "rcycle:sealingType": "PE"
                    }
                ],
                "rcycle:detailedName": "Lamination Film REC70-120-SEAL1",
                "rcycle:insideSurfaceType": "PE-LLD",
                "rcycle:outsideSurfaceType": "PE-HD",
                "rcycle:productType": "WEB",
                "rcycle:productionStep": "FILM_EXTRUSION",
                "rcycle:reelDiameter": {
                    "rcycle:unitCode": "MMT",
                    "rcycle:value": 595
                },
                "rcycle:reelWeight": {
                    "rcycle:unitCode": "KGM",
                    "rcycle:value": 270
                },
                "rcycle:substrateWidth": {
                    "rcycle:unitCode": "MMT",
                    "rcycle:value": 1195
                },
                "rcycle:thickness": {
                    "rcycle:unitCode": "4H",
                    "rcycle:value": 120.2
                },
                "rcycle:treatedSide": "NONE",
                "rcycle:windingCore": {
                    "rcycle:unitCode": "INH",
                    "rcycle:value": 6
                },
                "rcycle:windingCoreType": "paper"
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000549/10/AYBbLLPG701005",
                    "quantity": 450,
                    "uom": "KGM"
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000464/10/AYRVHON0233008",
                    "quantity": 2024,
                    "uom": "MTR"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074000405/254/3"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 5,
        "parent_id": "/01/94064074000266/10/YKcT4jUe5S066YUBipS6",
        "child_id": "/01/94064074000266/10/AY7bMLPN751005",
        "gtin": "94064074000266",
        "lot": "AY7bMLPN751005",
        "type": "Web",
        "product_name": "Flexible Material (transparent)",
        "detailed_name": "BOPE-PCR 5L-23",
        "brand_id": "707e1207-9b33-4302-88bc-3c859e9cbb45",
        "product_brand": "Various Packaging Materials and Components",
        "sub_brand_name": null,
        "primary_image": null,
        "production_step": "SLITTING",
        "production_step_desc": "Slitting",
        "quantity_value": "2790.00",
        "quantity_uom": "MTR",
        "quantity_uom_desc": "m",
        "Production Date": "2023-11-20T12:08:23.000Z",
        "GLN": "4064074001501",
        "GLN_Name": "Kampf GmbH, Wiehl, D",
        "readPoint": "/414/4064074001501/254/1",
        "readPointName": "Slitter 1",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "WEB",
        "product_type_desc": "Web",
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "0.83000",
        "event_id": "ni:///sha-256;c538bce0ea60bc71e1a31610cf2b1bb16f9825eabcee4da5b936aabc428c0bda?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074001501"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;c538bce0ea60bc71e1a31610cf2b1bb16f9825eabcee4da5b936aabc428c0bda?ver=CBV2.0",
            "eventTime": "2023-11-20T12:08:23+01:00",
            "eventTimeZoneOffset": "+01:00",
            "example:InputQuantityShares": [
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074000266/10/AYCbKLPq072008",
                    "example:unitCode": "P1",
                    "example:value": 100
                }
            ],
            "ilmd": {
                "rcycle:articleNumber": "608049",
                "rcycle:detailedName": "BOPE-PCR 5L-23",
                "rcycle:productType": "WEB",
                "rcycle:productionStep": "SLITTING",
                "rcycle:substrateWidth": {
                    "rcycle:unitCode": "MMT",
                    "rcycle:value": 1005
                }
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AYCbKLPq072008",
                    "quantity": 2797,
                    "uom": "MTR"
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AY7bMLPN751005",
                    "quantity": 2790,
                    "uom": "MTR"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074001501/254/1"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 6,
        "parent_id": "/01/94064074000266/10/AY7bMLPN751005",
        "child_id": "/01/94064074000266/10/AYCbKLPq072008",
        "gtin": "94064074000266",
        "lot": "AYCbKLPq072008",
        "type": "Web",
        "product_name": "Flexible Material (transparent)",
        "detailed_name": "BOPE-PCR 5L-23_Roll 0B2307311418",
        "brand_id": "707e1207-9b33-4302-88bc-3c859e9cbb45",
        "product_brand": "Various Packaging Materials and Components",
        "sub_brand_name": null,
        "primary_image": null,
        "production_step": "FILM_EXTRUSION",
        "production_step_desc": "Film Extrusion",
        "quantity_value": "2797.00",
        "quantity_uom": "MTR",
        "quantity_uom_desc": "m",
        "Production Date": "2023-08-01T16:00:00.000Z",
        "GLN": "4064074002005",
        "GLN_Name": "Brückner, Siegsdorf, D",
        "readPoint": "/414/4064074002005/254/2",
        "readPointName": "Production Line in R&D Center",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "WEB",
        "product_type_desc": "Web",
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": "PE1",
        "application_range_desc": "PE - 0.2-5.0 g/10min at 2.16 kg/190 °C",
        "application_range_long_desc": "PE for film extrusion and blow moulding (film, bottles, drums). Including blow moulding grades: HDPE 5-25 g/10min at 21.6 kg/190 °C and HMWPE 2-5 g/10min @21.6 kg/190 °C",
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "1.00000",
        "event_id": "ni:///sha-256;d713d59534d92ac1d6698da84dfb381ab156e3872ee7a0adf3826ea981c77d7b?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074002005"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;d713d59534d92ac1d6698da84dfb381ab156e3872ee7a0adf3826ea981c77d7b?ver=CBV2.0",
            "eventTime": "2023-08-01T16:00:00+01:00",
            "eventTimeZoneOffset": "+01:00",
            "example:ColourOfBasicMaterial": [
                {
                    "example:colourCodeListCode": "CIRCULAR_PLASTICS",
                    "example:colourCodeValue": "TRANSPARENT_NC"
                }
            ],
            "example:InputMaterialOrigin": [
                {
                    "example:typeCode": "PCR_M",
                    "example:unitCode": "P1",
                    "example:value": 0
                }
            ],
            "example:InputQuantityShares": [
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074000549/10/AYNbKLPm231007",
                    "example:unitCode": "P1",
                    "example:value": 30.9
                }
            ],
            "example:PackagingIngredientDetails": [
                {
                    "example:typeCode": "PE-HD",
                    "example:unitCode": "P1",
                    "example:value": 26.8
                },
                {
                    "example:typeCode": "PE-LLD",
                    "example:unitCode": "P1",
                    "example:value": 42.3
                }
            ],
            "example:biodegradability": false,
            "example:foodApproval": true,
            "ilmd": {
                "example:applicationRange": "PE1",
                "example:density": {
                    "example:unitCode": "23",
                    "example:value": 0.933
                },
                "rcycle:detailedName": "BOPE-PCR 5L-23_Roll 0B2307311418",
                "rcycle:productType": "WEB",
                "rcycle:productionStep": "FILM_EXTRUSION",
                "rcycle:thickness": {
                    "rcycle:unitCode": "4H",
                    "rcycle:value": 22
                }
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000549/10/AYNbKLPm231007",
                    "quantity": 120,
                    "uom": "KGM"
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000266/10/AYCbKLPq072008",
                    "quantity": 2797,
                    "uom": "MTR"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074002005/254/2"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 6,
        "parent_id": "/01/94064074000464/10/AYRVHON0233008",
        "child_id": "/01/94064074000549/10/AYBbLLPG701005",
        "gtin": "94064074000549",
        "lot": "AYBbLLPG701005",
        "type": "Pellets - PE",
        "product_name": "Recyclate",
        "detailed_name": "PE-LD 420-S grey",
        "brand_id": null,
        "product_brand": null,
        "sub_brand_name": null,
        "primary_image": "08877fca-beb1-409e-a1b2-0ae5dd66a9e7",
        "production_step": "REGRANULATION",
        "production_step_desc": "Regranulation",
        "quantity_value": "36400.00",
        "quantity_uom": "KGM",
        "quantity_uom_desc": "kg",
        "Production Date": "2023-05-22T00:00:00.000Z",
        "GLN": "4064074000427",
        "GLN_Name": "Vogt Plastic GmbH",
        "readPoint": "/414/4064074000427/254/1",
        "readPointName": "Recycling Line 1",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": "PELLETS",
        "product_shape_desc": "Pellets",
        "product_type": null,
        "product_type_desc": null,
        "product_class": "PE",
        "product_class_group": "PLASTIC",
        "product_class_desc": "PE",
        "product_class_long_desc": "All types and mixtures of polyethylene polymers.\nAs a more precise specification of the PE types is often preferable, this code should only be used if there is a mixture of PE types, for example after recycling, or if the used PE types are not known more precisely.",
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": "0.80",
        "mfr_uom": "GRM",
        "mfr_uom_desc": "g",
        "share": "0.70000",
        "event_id": "ni:///sha-256;8d7813380e82052a955e4c2eeafd2df05b12ca1e611b30fbab03dc20714039d2?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074000427"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;8d7813380e82052a955e4c2eeafd2df05b12ca1e611b30fbab03dc20714039d2?ver=CBV2.0",
            "eventTime": "2023-05-22T00:00:00+02:00",
            "eventTimeZoneOffset": "+02:00",
            "example:InputQuantityShares": [
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074001218/10/AYgbKLP3932005",
                    "example:unitCode": "P1",
                    "example:value": 100
                }
            ],
            "example:biodegradability": false,
            "example:colourCodeValue": [
                {
                    "example:colourCodeListCode": "CIRCULAR_PLASTICS"
                }
            ],
            "example:density": {
                "example:unitCode": "23",
                "example:value": 0.94
            },
            "example:foodApproval": false,
            "ilmd": {
                "example:InputMaterialOrigin": [
                    {
                        "example:typeCode": "PCR_M",
                        "example:unitCode": "P1",
                        "example:value": 100
                    }
                ],
                "rcycle:RecommendedUse": [
                    {
                        "rcycle:typeCode": "FILM_EXTRUSION"
                    }
                ],
                "rcycle:condition": "/10 min @ 190 °C 2.16 kg",
                "rcycle:detailedName": "PE-LD 420-S grey",
                "rcycle:filtrationFineness": {
                    "rcycle:unitCode": "4H",
                    "rcycle:value": 40
                },
                "rcycle:internalBatch": "C010523051500",
                "rcycle:mfr": {
                    "rcycle:unitCode": "GRM",
                    "rcycle:value": 0.8
                },
                "rcycle:norm": "DIN EN ISO 1133-1",
                "rcycle:packagingUnit": "BIG_BAG",
                "rcycle:packagingUnitNumber": 42,
                "rcycle:productClass": "PE",
                "rcycle:productShape": "PELLETS",
                "rcycle:productionStep": "REGRANULATION"
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074001218/10/AYgbKLP3932005",
                    "quantity": 38000,
                    "uom": "KGM"
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000549/10/AYBbLLPG701005",
                    "quantity": 36400,
                    "uom": "KGM"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074000427/254/1"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 7,
        "parent_id": "/01/94064074000549/10/AYBbLLPG701005",
        "child_id": "/01/94064074001218/10/AYgbKLP3932005",
        "gtin": "94064074001218",
        "lot": "AYgbKLP3932005",
        "type": "Waste",
        "product_name": "Sorted Waste",
        "detailed_name": "DSD Fraction 310 (PE Flexibles u003eDIN A4)",
        "brand_id": null,
        "product_brand": null,
        "sub_brand_name": null,
        "primary_image": "5815af23-3283-4bcf-ae6f-7cfb6cea49a4",
        "production_step": "SORTING",
        "production_step_desc": "Sorting",
        "quantity_value": "38000.00",
        "quantity_uom": "KGM",
        "quantity_uom_desc": "kg",
        "Production Date": "2023-03-09T11:56:32.000Z",
        "GLN": "4064074000358",
        "GLN_Name": "Non-specific production site",
        "readPoint": "/414/4064074000358/254/2",
        "readPointName": "Non-specific production line",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "WASTE",
        "product_type_desc": "Waste",
        "product_class": "PE",
        "product_class_group": "PLASTIC",
        "product_class_desc": "PE",
        "product_class_long_desc": "All types and mixtures of polyethylene polymers.\nAs a more precise specification of the PE types is often preferable, this code should only be used if there is a mixture of PE types, for example after recycling, or if the used PE types are not known more precisely.",
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "1.00000",
        "event_id": "ni:///sha-256;3de568566690ed35afd0f85bf9a8a47ba36694493f3fa9a60250dd738fb46873?ver=CBV2.0",
        "event_body": {
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074000358"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;3de568566690ed35afd0f85bf9a8a47ba36694493f3fa9a60250dd738fb46873?ver=CBV2.0",
            "eventTime": "2023-03-09T11:56:32.000Z",
            "eventTimeZoneOffset": "+01:00",
            "example:ColourOfBasicMaterial": [
                {
                    "example:colourCodeListCode": "CIRCULAR_PLASTICS",
                    "example:colourCodeValue": "DARK"
                }
            ],
            "example:InputQuantityShares": [
                {
                    "example:quantity": "https://rcycledemo.tvai.me/01/94064074001201/10/AYRbKLPz982000",
                    "example:unitCode": "P1",
                    "example:value": 100
                }
            ],
            "example:PackagingIngredientDetails": [
                {
                    "example:typeCode": "PE",
                    "example:unitCode": "P1",
                    "example:value": 100
                }
            ],
            "example:biodegradability": false,
            "example:foodApproval": false,
            "ilmd": {
                "rcycle:detailedName": "DSD Fraction 310 (PE Flexibles u003eDIN A4)",
                "rcycle:packagingUnit": "BALE",
                "rcycle:packagingUnitNumber": 54,
                "rcycle:productClass": "PE",
                "rcycle:productType": "WASTE",
                "rcycle:productionStep": "SORTING"
            },
            "inputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074001201/10/AYRbKLPz982000",
                    "quantity": 50000,
                    "uom": "KGM"
                }
            ],
            "outputQuantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074001218/10/AYgbKLP3932005",
                    "quantity": 38000,
                    "uom": "KGM"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074000358/254/2"
            },
            "type": "TransformationEvent"
        }
    },
    {
        "level": 7,
        "parent_id": "/01/94064074000266/10/AYCbKLPq072008",
        "child_id": "/01/94064074000549/10/AYNbKLPm231007",
        "gtin": "94064074000549",
        "lot": "AYNbKLPm231007",
        "type": "Pellets - PE",
        "product_name": "Recyclate",
        "detailed_name": "PE-HD Recyclate",
        "brand_id": null,
        "product_brand": null,
        "sub_brand_name": null,
        "primary_image": "08877fca-beb1-409e-a1b2-0ae5dd66a9e7",
        "production_step": "REGRANULATION",
        "production_step_desc": "Regranulation",
        "quantity_value": "10000.00",
        "quantity_uom": "KGM",
        "quantity_uom_desc": "kg",
        "Production Date": "2023-07-01T13:55:22.000Z",
        "GLN": "4064074000358",
        "GLN_Name": "Non-specific production site",
        "readPoint": "/414/4064074000358/254/1",
        "readPointName": "Non-specific production line",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": "PELLETS",
        "product_shape_desc": "Pellets",
        "product_type": null,
        "product_type_desc": null,
        "product_class": "PE",
        "product_class_group": "PLASTIC",
        "product_class_desc": "PE",
        "product_class_long_desc": "All types and mixtures of polyethylene polymers.\nAs a more precise specification of the PE types is often preferable, this code should only be used if there is a mixture of PE types, for example after recycling, or if the used PE types are not known more precisely.",
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": "0.30",
        "mfr_uom": "GRM",
        "mfr_uom_desc": "g",
        "share": "0.30900",
        "event_id": "ni:///sha-256;4f2813d1ec4b553ebdf2434c8c5d87d6f75778ac058213790ef0c926a41fe91a?ver=CBV2.0",
        "event_body": {
            "action": "ADD",
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074000358"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;4f2813d1ec4b553ebdf2434c8c5d87d6f75778ac058213790ef0c926a41fe91a?ver=CBV2.0",
            "eventTime": "2023-07-01T13:55:22+01:00",
            "eventTimeZoneOffset": "+02:00",
            "example:ColourOfBasicMaterial": [
                {
                    "example:colourCodeListCode": "CIRCULAR_PLASTICS",
                    "example:colourCodeValue": "TRANSPARENT_NC"
                }
            ],
            "example:PackagingIngredientDetails": [
                {
                    "example:typeCode": "PE-HD",
                    "example:unitCode": "P1",
                    "example:value": 100
                }
            ],
            "example:biodegradability": false,
            "example:density": {
                "example:unitCode": "23",
                "example:value": 0.94
            },
            "example:foodApproval": false,
            "ilmd": {
                "rcycle:condition": "/10 min @ 190 °C 2.16 kg",
                "rcycle:detailedName": "PE-HD Recyclate",
                "rcycle:mfr": {
                    "rcycle:unitCode": "GRM",
                    "rcycle:value": 0.3
                },
                "rcycle:norm": "DIN EN ISO 1133-1",
                "rcycle:packagingUnit": "BIG_BAG",
                "rcycle:packagingUnitNumber": 10,
                "rcycle:productClass": "PE",
                "rcycle:productShape": "PELLETS",
                "rcycle:productionStep": "REGRANULATION"
            },
            "quantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074000549/10/AYNbKLPm231007",
                    "quantity": 10000,
                    "uom": "KGM"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074000358/254/1"
            },
            "type": "ObjectEvent"
        }
    },
    {
        "level": 8,
        "parent_id": "/01/94064074001218/10/AYgbKLP3932005",
        "child_id": "/01/94064074001201/10/AYRbKLPz982000",
        "gtin": "94064074001201",
        "lot": "AYRbKLPz982000",
        "type": "Waste",
        "product_name": "Collected Waste",
        "detailed_name": "Yellow Bag Collection",
        "brand_id": null,
        "product_brand": null,
        "sub_brand_name": null,
        "primary_image": "3ce07f28-c888-4925-84aa-c3a0eb12fea8",
        "production_step": "COLLECTING",
        "production_step_desc": "Collecting",
        "quantity_value": "50000.00",
        "quantity_uom": "KGM",
        "quantity_uom_desc": "kg",
        "Production Date": "2023-02-11T10:34:37.000Z",
        "GLN": "4064074000358",
        "GLN_Name": "Non-specific production site",
        "readPoint": "/414/4064074000358/254/2",
        "readPointName": "Non-specific production line",
        "packaging_type": null,
        "packaging_type_desc": null,
        "packaging_type_long_desc": null,
        "packaging_level": null,
        "packaging_level_desc": null,
        "packaging_level_long_desc": null,
        "content_of_packaging": null,
        "content_of_packaging_desc": null,
        "content_of_packaging_long_desc": null,
        "unit_length": null,
        "unit_length_uom": null,
        "unit_length_uom_desc": null,
        "unit_width": null,
        "unit_width_uom": null,
        "unit_width_uom_desc": null,
        "unit_height": null,
        "unit_height_uom": null,
        "unit_height_uom_desc": null,
        "unit_weight": null,
        "unit_weight_uom": null,
        "unit_weight_uom_desc": null,
        "filling_volume": null,
        "filling_volume_uom": null,
        "filling_volume_uom_desc": null,
        "product_shape": null,
        "product_shape_desc": null,
        "product_type": "WASTE",
        "product_type_desc": "Waste",
        "product_class": null,
        "product_class_group": null,
        "product_class_desc": null,
        "product_class_long_desc": null,
        "application_range": null,
        "application_range_desc": null,
        "application_range_long_desc": null,
        "mfr": null,
        "mfr_uom": null,
        "mfr_uom_desc": null,
        "share": "1.00000",
        "event_id": "ni:///sha-256;a712c23b13fed1f883957403db7389d48ab58e3baa1c69c062b842753a2c860a?ver=CBV2.0",
        "event_body": {
            "action": "ADD",
            "bizLocation": {
                "id": "https://rcycledemo.tvai.me/414/4064074000358"
            },
            "bizStep": "commissioning",
            "disposition": "active",
            "eventID": "ni:///sha-256;a712c23b13fed1f883957403db7389d48ab58e3baa1c69c062b842753a2c860a?ver=CBV2.0",
            "eventTime": "2023-02-11T10:34:37+01:00",
            "eventTimeZoneOffset": "+01:00",
            "example:colourCodeValue": [
                {
                    "example:colourCodeListCode": "CIRCULAR_PLASTICS"
                }
            ],
            "ilmd": {
                "rcycle:detailedName": "Yellow Bag Collection",
                "rcycle:internalBatch": "123-4588",
                "rcycle:packagingUnit": "VEHICLE_CHANGE_CONTAINER",
                "rcycle:packagingUnitNumber": 8,
                "rcycle:productType": "WASTE",
                "rcycle:productionStep": "COLLECTING",
                "rcycle:wasteCategory": "15 01 00",
                "rcycle:wasteCollectionType": "MIXED_COLLECTION",
                "rcycle:wasteOrigin": "PCR",
                "rcycle:wasteOriginSector": "HOUSEHOLD_PACKAGING"
            },
            "quantityList": [
                {
                    "epcClass": "https://rcycledemo.tvai.me/01/94064074001201/10/AYRbKLPz982000",
                    "quantity": 50000,
                    "uom": "KGM"
                }
            ],
            "readPoint": {
                "id": "https://rcycledemo.tvai.me/414/4064074000358/254/2"
            },
            "type": "ObjectEvent"
        }
    }
]

var attributeTable = [
    {
        "attribute": "product_name",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:54:27.000Z",
        "description": "Product",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": "product",
        "output": "calculation_rule",
        "group": "Lot Overview",
        "order": 1
    },
    {
        "attribute": "gtin",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:54:47.000Z",
        "description": "GTIN",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Lot Overview",
        "order": 2
    },
    {
        "attribute": "articleNumber",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:55:29.000Z",
        "description": "Article No.",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Lot Overview",
        "order": 3
    },
    {
        "attribute": "product_brand",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:54:36.000Z",
        "description": "Brand",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": "brand",
        "output": "calculation_rule",
        "group": "Lot Overview",
        "order": 4
    },
    {
        "attribute": "detailedName",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:55:36.000Z",
        "description": "Name",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "take_from_event",
        "group": "Lot Overview",
        "order": 5
    },
    {
        "attribute": "lot",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:54:05.000Z",
        "description": "Lot ID",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Lot Overview",
        "order": 6
    },
    {
        "attribute": "lotQuantity",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:54:12.000Z",
        "description": "Lot Quantity",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Lot Overview",
        "order": 7
    },
    {
        "attribute": "productionStep",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:56:41.000Z",
        "description": "Production Step",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": "ref_production_step_codes",
        "output": "calculation_rule",
        "group": "Production Details",
        "order": 1
    },
    {
        "attribute": "eventTime",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Production Time",
        "name_space": null,
        "type": "Date",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Production Details",
        "order": 2
    },
    {
        "attribute": "bizLocationName",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:54:58.000Z",
        "description": "Production Location",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": "location",
        "output": "calculation_rule",
        "group": "Production Details",
        "order": 3
    },
    {
        "attribute": "bizLocation",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "GLN",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Production Details",
        "order": 4
    },
    {
        "attribute": "readPointName",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:55:05.000Z",
        "description": "Machine Name",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": "location",
        "output": "calculation_rule",
        "group": "Production Details",
        "order": 5
    },
    {
        "attribute": "readPoint",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "GLN",
        "name_space": null,
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Production Details",
        "order": 6
    },
    {
        "attribute": "internalBatch",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Internal Batch",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Production Details",
        "order": 7
    },
    {
        "attribute": "objectForm",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Form",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 1
    },
    {
        "attribute": "packagingType",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:57:56.000Z",
        "description": "Packaging Type",
        "name_space": "gs1",
        "type": "String",
        "format": null,
        "selection_list": "ref_package_type_codes",
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 2
    },
    {
        "attribute": "packagingLevel",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:58:43.000Z",
        "description": "Packaging Level",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_packaging_level_codes",
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 3
    },
    {
        "attribute": "contentOfPackaging",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:00.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:58:30.000Z",
        "description": "Content",
        "name_space": "example",
        "type": "String",
        "format": null,
        "selection_list": "ref_content_of_packaging_codes",
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 4
    },
    {
        "attribute": "unitLength",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Length",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 5
    },
    {
        "attribute": "unitWidth",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Width",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 6
    },
    {
        "attribute": "unitHeight",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Height",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 7
    },
    {
        "attribute": "fillingVolume",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Filling Volume",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 8
    },
    {
        "attribute": "unitWeight",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Unit Weight",
        "name_space": "example",
        "type": "Decimal",
        "format": "0.0",
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 9
    },
    {
        "attribute": "lengthWeight",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Length Weight",
        "name_space": "example",
        "type": "Decimal",
        "format": "0.0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Basic Properties",
        "order": 10
    },
    {
        "attribute": "productShape",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:59:06.000Z",
        "description": "Product Shape",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "re_product_shape_codes",
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 11
    },
    {
        "attribute": "productType",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Product Type",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_component_type_code",
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 12
    },
    {
        "attribute": "productClass",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Product Class",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_ingredient_codes",
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 13
    },
    {
        "attribute": "applicationRange",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Application",
        "name_space": "example",
        "type": "String",
        "format": null,
        "selection_list": "ref_application_range_codes",
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 14
    },
    {
        "attribute": "density",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Density",
        "name_space": "example",
        "type": "Decimal",
        "format": "0.000",
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 15
    },
    {
        "attribute": "surfaceWeight",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Surface Weight",
        "name_space": "example",
        "type": "Decimal",
        "format": "0.0",
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 16
    },
    {
        "attribute": "thickness",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Thickness",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0.0",
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 17
    },
    {
        "attribute": "mfr",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "MFR",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0.00",
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 18
    },
    {
        "attribute": "iv",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "IV",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0.00",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Basic Properties",
        "order": 19
    },
    {
        "attribute": "ColourOfBasicMaterial_colourCodeValue",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Colour of Basic Material",
        "name_space": "example",
        "type": "String",
        "format": null,
        "selection_list": "ref_colour_basic_codes",
        "output": "calculation_rule",
        "group": "Ingredient Details",
        "order": 1
    },
    {
        "attribute": "ColourOfPrinting_colourCodeValue",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Colour of Printing",
        "name_space": "example",
        "type": "String",
        "format": null,
        "selection_list": "ref_colour_printing_codes",
        "output": "calculation_rule",
        "group": "Ingredient Details",
        "order": 2
    },
    {
        "attribute": "printType",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Print Type",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "xxx",
        "output": "calculation_rule",
        "group": "Ingredient Details",
        "order": 3
    },
    {
        "attribute": "printFormat",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:59:26.000Z",
        "description": "Print Format",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Ingredient Details",
        "order": 4
    },
    {
        "attribute": "printCoverage",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Print Coverage",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0.0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Ingredient Details",
        "order": 5
    },
    {
        "attribute": "biodegradability",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Biodegradability",
        "name_space": "example",
        "type": "Boolean",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Ingredient Details",
        "order": 6
    },
    {
        "attribute": "foodApproval",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Food Approval",
        "name_space": "example",
        "type": "Boolean",
        "format": null,
        "selection_list": null,
        "output": "calculation_rule",
        "group": "Ingredient Details",
        "order": 7
    },
    {
        "attribute": "outsideSurfaceType",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:59:56.000Z",
        "description": "Outside Surface Type",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_ingredient_codes",
        "output": "calculation_rule",
        "group": "Ingredient Details",
        "order": 8
    },
    {
        "attribute": "insideSurfaceType",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:59:46.000Z",
        "description": "Inside Surface Type",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_ingredient_codes",
        "output": "calculation_rule",
        "group": "Ingredient Details",
        "order": 9
    },
    {
        "attribute": "substrateWidth",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Web width",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 1
    },
    {
        "attribute": "windingCoreType",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T09:02:46.000Z",
        "description": "Winding core Type",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "xxx",
        "output": "calculation_rule",
        "group": "Advanced Properties",
        "order": 2
    },
    {
        "attribute": "windingCore",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Winding Core",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 3
    },
    {
        "attribute": "windingTensionStart",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Winding tension at Start",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 4
    },
    {
        "attribute": "windingTensionEnd",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Winding tension at End",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 5
    },
    {
        "attribute": "reelWeight",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Reel weight",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 6
    },
    {
        "attribute": "reelDiameter",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Reel diameter",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 7
    },
    {
        "attribute": "outOfSpecReelStart",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Length out of Spec at Reel End",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0.0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 8
    },
    {
        "attribute": "outOfSpecReelEnd",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:01.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Length out of Spec at Reel Start",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0.0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 9
    },
    {
        "attribute": "treatmentType",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T09:03:28.000Z",
        "description": "Treatment Type",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "xxx",
        "output": "calculation_rule",
        "group": "Advanced Properties",
        "order": 10
    },
    {
        "attribute": "treatedSide",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T09:03:12.000Z",
        "description": "Treated Side",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "xxx",
        "output": "calculation_rule",
        "group": "Advanced Properties",
        "order": 11
    },
    {
        "attribute": "sealingCondMin",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Sealing Condition Min",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 12
    },
    {
        "attribute": "sealingCondMax",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Sealing Condition Max",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 13
    },
    {
        "attribute": "formTempMin",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Form Temperature Min",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 14
    },
    {
        "attribute": "formTempMax",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Form Temperature Max",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 15
    },
    {
        "attribute": "packagingUnit",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T09:04:09.000Z",
        "description": "Packaging unit",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_packaging_unit_codes",
        "output": "calculation_rule",
        "group": "Basic Properties",
        "order": 18
    },
    {
        "attribute": "packagingUnitNumber",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Packaging Unit Number",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Basic Properties",
        "order": 19
    },
    {
        "attribute": "wasteOrigin",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T09:04:36.000Z",
        "description": "Waste Origin",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_origin_codes",
        "output": "calculation_rule",
        "group": "Waste Details",
        "order": 1
    },
    {
        "attribute": "wasteCollectionType",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T09:04:54.000Z",
        "description": "Waste Type",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_waste_collection_type_codes",
        "output": "calculation_rule",
        "group": "Waste Details",
        "order": 2
    },
    {
        "attribute": "wasteCategory",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T09:05:01.000Z",
        "description": "Waste Category",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_waste_category_codes",
        "output": "calculation_rule",
        "group": "Waste Details",
        "order": 3
    },
    {
        "attribute": "wasteOriginSector",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T09:04:46.000Z",
        "description": "Waste Sector",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": "ref_waste_origin_sector_codes",
        "output": "calculation_rule",
        "group": "Waste Details",
        "order": 4
    },
    {
        "attribute": "impurities",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Impurities",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 16
    },
    {
        "attribute": "meltTemperatureMin",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Melt Temperature Min",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 17
    },
    {
        "attribute": "meltTemperatureMax",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Melt Temperature Max",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 18
    },
    {
        "attribute": "infoSorting",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Info about Sorting",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 19
    },
    {
        "attribute": "treatmentUndergone",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Treatment Undergone",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 20
    },
    {
        "attribute": "colourNote",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Colour Note",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 21
    },
    {
        "attribute": "filtrationFineness",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Filtration",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 22
    },
    {
        "attribute": "particleSizeMax",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Max. Particle Size",
        "name_space": "rcycle",
        "type": "Decimal",
        "format": "0.0",
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 23
    },
    {
        "attribute": "additionalTreatment",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-23T13:20:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Additional Treatment",
        "name_space": "rcycle",
        "type": "String",
        "format": null,
        "selection_list": null,
        "output": "take_from_event",
        "group": "Advanced Properties",
        "order": 24
    }
]

var productionStepCodes = [
    {
        "code": "FILM_EXTRUSION",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T10:58:03.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Film Extrusion",
        "process_type": "Component producing"
    },
    {
        "code": "INJECTION_MOULDING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T10:58:25.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Injection Moulding",
        "process_type": "Component producing"
    },
    {
        "code": "BLOW_MOULDING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T10:58:40.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Blown Moulding",
        "process_type": "Component producing"
    },
    {
        "code": "INLINE_THERMOFORMING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T10:59:28.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Inline Thermoforming",
        "process_type": "Component producing"
    },
    {
        "code": "PRINTING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:00:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Printing",
        "process_type": "Component processing"
    },
    {
        "code": "COATING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:00:25.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Coating",
        "process_type": "Component processing"
    },
    {
        "code": "METALLISING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:00:51.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Metallising",
        "process_type": "Component processing"
    },
    {
        "code": "LAMINATING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:01:05.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Laminating",
        "process_type": "Component processing"
    },
    {
        "code": "SLITTING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:01:27.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Slitting",
        "process_type": "Component reshaping"
    },
    {
        "code": "PACKAGING_PRODUCTION",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:02:03.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Packaging Production",
        "process_type": "Packaging producing"
    },
    {
        "code": "RAW_MATERIAL_PRODUCTIONq",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:02:43.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:43:16.000Z",
        "description": "Raw Material Production",
        "process_type": "Plastic raw material producing"
    },
    {
        "code": "REGRANULATION",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:03:02.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Regranulation",
        "process_type": "Plastic raw material producing"
    },
    {
        "code": "MIXING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:03:29.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Mixing",
        "process_type": "Plastic raw material producing"
    },
    {
        "code": "COMPOUNDING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:03:46.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Compounding",
        "process_type": "Plastic raw material producing"
    },
    {
        "code": "GRINDING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:04:35.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Grinding",
        "process_type": "Plastic raw material producing"
    },
    {
        "code": "DECONTAMINATING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:05:06.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Decontaminating",
        "process_type": "Plastic raw material producing"
    },
    {
        "code": "PRODUCT_GENERATION",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:05:50.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-12T08:39:33.000Z",
        "description": "Product Generation",
        "process_type": "Component producing"
    },
    {
        "code": "COLLECTING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:06:13.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Collecting",
        "process_type": "Waste processing"
    },
    {
        "code": "SORTING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:06:25.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Sorting",
        "process_type": "Waste processing"
    },
    {
        "code": "STRETCHING",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-08T11:08:52.000Z",
        "user_updated": null,
        "date_updated": null,
        "description": "Stretching",
        "process_type": "Component reshaping"
    }
]

var calculationRules = [
    {
        "id": 90001,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "calc_unitWeight"
        },
        "rule_no": null,
        "attribute": "unitWeight"
    },
    {
        "id": 90003,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_type_desc"]
        },
        "rule_no": null,
        "attribute": "productType"
    },
    {
        "id": 90005,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_type_desc"]
        },
        "rule_no": null,
        "attribute": "productType"
    },
    {
        "id": 90007,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["product_class"], ["product_class_group"], ["product_class_desc"], ["product_class_long_desc"]],
            "name": [["value"], ["value_add"], ["desc"], ["long_desc"]]
        },
        "rule_no": null,
        "attribute": "productClass"
    },
    {
        "id": 90009,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["application_range"], ["application_range_desc"], ["application_range_long_desc"]],
            "name": [["value"], ["desc"], ["long_desc"]]
        },
        "rule_no": null,
        "attribute": "applicationRange"
    },
    {
        "id": 90011,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["application_range"], ["application_range_desc"], ["application_range_long_desc"]],
            "name": [["value"], ["desc"], ["long_desc"]]
        },
        "rule_no": null,
        "attribute": "applicationRange"
    },
    {
        "id": 90013,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["application_range"], ["application_range_desc"], ["application_range_long_desc"]],
            "name": [["value"], ["desc"], ["long_desc"]]
        },
        "rule_no": null,
        "attribute": "applicationRange"
    },
    {
        "id": "XXXXX",
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["application_range"], ["application_range_desc"], ["application_range_long_desc"]],
            "name": [["value"], ["desc"], ["long_desc"]]
        },
        "rule_no": null,
        "attribute": "applicationRange"
    },
    {
        "id": 90015,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "SLITTING",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "density"
    },
    {
        "id": 90017,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "PRINTING",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "density"
    },
    {
        "id": 90019,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "LAMINATING",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "density"
    },
    {
        "id": 90021,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "density"
    },
    {
        "id": 90023,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "FILM_EXTRUSION",
        "calculation_rule": {
            "action": "calc_surfaceWeight"
        },
        "rule_no": null,
        "attribute": "surfaceWeight"
    },
    {
        "id": 90025,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "PRINTING",
        "calculation_rule": {
            "action": "calc_surfaceWeight"
        },
        "rule_no": null,
        "attribute": "surfaceWeight"
    },
    {
        "id": 90027,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "LAMINATING",
        "calculation_rule": {
            "action": "calc_surfaceWeight"
        },
        "rule_no": null,
        "attribute": "surfaceWeight"
    },
    {
        "id": 90029,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "SLITTING",
        "calculation_rule": {
            "action": "calc_surfaceWeight"
        },
        "rule_no": null,
        "attribute": "surfaceWeight"
    },
    {
        "id": 90031,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:30.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "calc_surfaceWeight"
        },
        "rule_no": null,
        "attribute": "surfaceWeight"
    },
    {
        "id": 90033,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "FILM_EXTRUSION",
        "calculation_rule": {
            "action": "calc_thickness"
        },
        "rule_no": null,
        "attribute": "thickness"
    },
    {
        "id": 90035,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "PRINTING",
        "calculation_rule": {
            "action": "calc_thickness"
        },
        "rule_no": null,
        "attribute": "thickness"
    },
    {
        "id": 90037,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "LAMINATING",
        "calculation_rule": {
            "action": "calc_thickness"
        },
        "rule_no": null,
        "attribute": "thickness"
    },
    {
        "id": 90039,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "SLITTING",
        "calculation_rule": {
            "action": "calc_thickness"
        },
        "rule_no": null,
        "attribute": "thickness"
    },
    {
        "id": 90041,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_updated": "2025-05-27T08:51:56.000Z",
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "calc_thickness"
        },
        "rule_no": "NULL",
        "attribute": "thickness"
    },
    {
        "id": 90043,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "LAMINATING",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "ColourOfBasicMaterial_colourCodeValue"
    },
    {
        "id": 90045,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "ColourOfBasicMaterial_colourCodeValue"
    },
    {
        "id": 90047,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "ColourOfBasicMaterial_colourCodeValue"
    },
    {
        "id": 90049,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "ColourOfBasicMaterial_colourCodeValue"
    },
    {
        "id": 90051,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "PRINTING",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "ColourOfPrinting_colourCodeValue"
    },
    {
        "id": 90053,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "ColourOfPrinting_colourCodeValue"
    },
    {
        "id": 90055,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "ColourOfPrinting_colourCodeValue"
    },
    {
        "id": 90057,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "ColourOfPrinting_colourCodeValue"
    },
    {
        "id": 90059,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "PRODUCT_GENERATION",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "ColourOfPrinting_colourCodeValue"
    },
    {
        "id": 90061,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "printType"
    },
    {
        "id": 90063,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "printType"
    },
    {
        "id": 90065,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "PRODUCT_GENERATION",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "printType"
    },
    {
        "id": 90067,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "calc_bioDegradability"
        },
        "rule_no": null,
        "attribute": "biodegradability"
    },
    {
        "id": 90069,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "calc_bioDegradability"
        },
        "rule_no": null,
        "attribute": "biodegradability"
    },
    {
        "id": 90071,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "calc_bioDegradability"
        },
        "rule_no": null,
        "attribute": "biodegradability"
    },
    {
        "id": 90073,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "calc_bioDegradability"
        },
        "rule_no": null,
        "attribute": "biodegradability"
    },
    {
        "id": 90075,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "calc_bioDegradability"
        },
        "rule_no": null,
        "attribute": "biodegradability"
    },
    {
        "id": 90077,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "calc_bioDegradability"
        },
        "rule_no": null,
        "attribute": "biodegradability"
    },
    {
        "id": 90079,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "calc_foodApproval"
        },
        "rule_no": null,
        "attribute": "foodApproval"
    },
    {
        "id": 90081,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "calc_foodApproval"
        },
        "rule_no": null,
        "attribute": "foodApproval"
    },
    {
        "id": 90083,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "calc_foodApproval"
        },
        "rule_no": null,
        "attribute": "foodApproval"
    },
    {
        "id": 90085,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "calc_foodApproval"
        },
        "rule_no": null,
        "attribute": "foodApproval"
    },
    {
        "id": 90087,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "calc_foodApproval"
        },
        "rule_no": null,
        "attribute": "foodApproval"
    },
    {
        "id": 90089,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "calc_foodApproval"
        },
        "rule_no": null,
        "attribute": "foodApproval"
    },
    {
        "id": 90091,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPointName"]
        },
        "rule_no": null,
        "attribute": "readPointName"
    },
    {
        "id": 90093,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPointName"]
        },
        "rule_no": null,
        "attribute": "readPointName"
    },
    {
        "id": 90095,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPointName"]
        },
        "rule_no": null,
        "attribute": "readPointName"
    },
    {
        "id": 90097,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPointName"]
        },
        "rule_no": null,
        "attribute": "readPointName"
    },
    {
        "id": 90099,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPointName"]
        },
        "rule_no": null,
        "attribute": "readPointName"
    },
    {
        "id": 90101,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPointName"]
        },
        "rule_no": null,
        "attribute": "readPointName"
    },
    {
        "id": 90103,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN_Name"]
        },
        "rule_no": null,
        "attribute": "bizLocationName"
    },
    {
        "id": 90105,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN_Name"]
        },
        "rule_no": null,
        "attribute": "bizLocationName"
    },
    {
        "id": 90107,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN_Name"]
        },
        "rule_no": null,
        "attribute": "bizLocationName"
    },
    {
        "id": 90109,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN_Name"]
        },
        "rule_no": null,
        "attribute": "bizLocationName"
    },
    {
        "id": 90111,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN_Name"]
        },
        "rule_no": null,
        "attribute": "bizLocationName"
    },
    {
        "id": 90113,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN_Name"]
        },
        "rule_no": null,
        "attribute": "bizLocationName"
    },
    {
        "id": 90115,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_name"]
        },
        "rule_no": null,
        "attribute": "product_name"
    },
    {
        "id": 90117,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_name"]
        },
        "rule_no": null,
        "attribute": "product_name"
    },
    {
        "id": 90119,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_name"]
        },
        "rule_no": null,
        "attribute": "product_name"
    },
    {
        "id": 90121,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_name"]
        },
        "rule_no": null,
        "attribute": "product_name"
    },
    {
        "id": 90123,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_name"]
        },
        "rule_no": null,
        "attribute": "product_name"
    },
    {
        "id": 90125,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_name"]
        },
        "rule_no": null,
        "attribute": "product_name"
    },
    {
        "id": 90127,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["gtin"]
        },
        "rule_no": null,
        "attribute": "gtin"
    },
    {
        "id": 90129,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["gtin"]
        },
        "rule_no": null,
        "attribute": "gtin"
    },
    {
        "id": 90131,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["gtin"]
        },
        "rule_no": null,
        "attribute": "gtin"
    },
    {
        "id": 90133,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["gtin"]
        },
        "rule_no": null,
        "attribute": "gtin"
    },
    {
        "id": 90135,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["gtin"]
        },
        "rule_no": null,
        "attribute": "gtin"
    },
    {
        "id": 90137,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["gtin"]
        },
        "rule_no": null,
        "attribute": "gtin"
    },
    {
        "id": 90139,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_brand"]
        },
        "rule_no": null,
        "attribute": "product_brand"
    },
    {
        "id": 90141,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_brand"]
        },
        "rule_no": null,
        "attribute": "product_brand"
    },
    {
        "id": 90143,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_brand"]
        },
        "rule_no": null,
        "attribute": "product_brand"
    },
    {
        "id": 90145,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_brand"]
        },
        "rule_no": null,
        "attribute": "product_brand"
    },
    {
        "id": 90147,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_brand"]
        },
        "rule_no": null,
        "attribute": "product_brand"
    },
    {
        "id": 90149,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_brand"]
        },
        "rule_no": null,
        "attribute": "product_brand"
    },
    {
        "id": 90151,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["lot"]
        },
        "rule_no": null,
        "attribute": "lot"
    },
    {
        "id": 90153,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["lot"]
        },
        "rule_no": null,
        "attribute": "lot"
    },
    {
        "id": 90155,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["lot"]
        },
        "rule_no": null,
        "attribute": "lot"
    },
    {
        "id": 90157,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["lot"]
        },
        "rule_no": null,
        "attribute": "lot"
    },
    {
        "id": 90159,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["lot"]
        },
        "rule_no": null,
        "attribute": "lot"
    },
    {
        "id": 90161,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["lot"]
        },
        "rule_no": null,
        "attribute": "lot"
    },
    {
        "id": 90163,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["quantity_value"], ["quantity_uom"]],
            "name": [["value"], ["uom"]]
        },
        "rule_no": null,
        "attribute": "lotQuantity"
    },
    {
        "id": 90165,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["quantity_value"], ["quantity_uom"]],
            "name": [["value"], ["desc"], ["long_desc"]]
        },
        "rule_no": null,
        "attribute": "lotQuantity"
    },
    {
        "id": 90167,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["quantity_value"], ["quantity_uom"]],
            "name": [["value"], ["uom"]]
        },
        "rule_no": null,
        "attribute": "lotQuantity"
    },
    {
        "id": 90169,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["quantity_value"], ["quantity_uom"]],
            "name": [["value"], ["uom"]]
        },
        "rule_no": null,
        "attribute": "lotQuantity"
    },
    {
        "id": 90171,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["quantity_value"], ["quantity_uom"]],
            "name": [["value"], ["uom"]]
        },
        "rule_no": null,
        "attribute": "lotQuantity"
    },
    {
        "id": 90173,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["quantity_value"], ["quantity_uom"]],
            "name": [["value"], ["uom"]]
        },
        "rule_no": null,
        "attribute": "lotQuantity"
    },
    {
        "id": 90175,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["production_step_desc"]
        },
        "rule_no": null,
        "attribute": "productionStep"
    },
    {
        "id": 90177,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["production_step_desc"]
        },
        "rule_no": null,
        "attribute": "productionStep"
    },
    {
        "id": 90179,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["production_step_desc"]
        },
        "rule_no": null,
        "attribute": "productionStep"
    },
    {
        "id": 90181,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["production_step_desc"]
        },
        "rule_no": null,
        "attribute": "productionStep"
    },
    {
        "id": 90183,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["production_step_desc"]
        },
        "rule_no": null,
        "attribute": "productionStep"
    },
    {
        "id": 90185,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["production_step_desc"]
        },
        "rule_no": null,
        "attribute": "productionStep"
    },
    {
        "id": 90187,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["packaging_type"], ["packaging_type_desc"], ["packaging_type_long_desc"]],
            "name": [["value"], ["desc"], ["long_desc"]]
        },
        "rule_no": null,
        "attribute": "packagingType"
    },
    {
        "id": 90189,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["packaging_level"], ["packaging_level_desc"], ["packaging_level_long_desc"]],
            "name": [["value"], ["desc"], ["long_desc"]]
        },
        "rule_no": null,
        "attribute": "packagingLevel"
    },
    {
        "id": 90191,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["content_of_packaging"], ["content_of_packaging_desc"], ["content_of_packaging_long_desc"]],
            "name": [["value"], ["desc"], ["long_desc"]]
        },
        "rule_no": null,
        "attribute": "contentOfPackaging"
    },
    {
        "id": 90193,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["product_shape_desc"]
        },
        "rule_no": null,
        "attribute": "productShape"
    },
    {
        "id": 90195,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "outsideSurfaceType"
    },
    {
        "id": 90197,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "outsideSurfaceType"
    },
    {
        "id": 90199,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "outsideSurfaceType"
    },
    {
        "id": 90201,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "outsideSurfaceType"
    },
    {
        "id": 90203,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "insideSurfaceType"
    },
    {
        "id": 90205,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "insideSurfaceType"
    },
    {
        "id": 90207,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "insideSurfaceType"
    },
    {
        "id": 90209,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "insideSurfaceType"
    },
    {
        "id": 90211,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "windingCoreType"
    },
    {
        "id": 90213,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "windingCoreType"
    },
    {
        "id": 90215,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "windingCoreType"
    },
    {
        "id": 90217,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "treatmentType"
    },
    {
        "id": 90219,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "treatmentType"
    },
    {
        "id": 90221,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "treatedSide"
    },
    {
        "id": 90223,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "treatedSide"
    },
    {
        "id": 90225,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "packagingUnit"
    },
    {
        "id": 90227,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "packagingUnit"
    },
    {
        "id": 90229,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "packagingUnit"
    },
    {
        "id": 90231,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "packagingUnit"
    },
    {
        "id": 90233,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "packagingUnit"
    },
    {
        "id": 90235,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "packagingUnit"
    },
    {
        "id": 90237,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "wasteOrigin"
    },
    {
        "id": 90239,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "wasteCollectionType"
    },
    {
        "id": 90241,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "wasteCategory"
    },
    {
        "id": 90243,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:32.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": null,
        "rule_no": null,
        "attribute": "wasteOriginSector"
    },
    {
        "id": 90115,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:articleNumber"]
        },
        "rule_no": null,
        "attribute": "articleNumber"
    },
    {
        "id": 90117,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:articleNumber"]
        },
        "rule_no": null,
        "attribute": "articleNumber"
    },
    {
        "id": 90119,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:articleNumber"]
        },
        "rule_no": null,
        "attribute": "articleNumber"
    },
    {
        "id": 90121,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:articleNumber"]
        },
        "rule_no": null,
        "attribute": "articleNumber"
    },
    {
        "id": 90123,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:articleNumber"]
        },
        "rule_no": null,
        "attribute": "articleNumber"
    },
    {
        "id": 90125,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:articleNumber"]
        },
        "rule_no": null,
        "attribute": "articleNumber"
    },
    {
        "id": 90115,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["detailed_name"]
        },
        "rule_no": null,
        "attribute": "detailedName"
    },
    {
        "id": 90117,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["detailed_name"]
        },
        "rule_no": null,
        "attribute": "detailedName"
    },
    {
        "id": 90119,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["detailed_name"]
        },
        "rule_no": null,
        "attribute": "detailedName"
    },
    {
        "id": 90121,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["detailed_name"]
        },
        "rule_no": null,
        "attribute": "detailedName"
    },
    {
        "id": 90123,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["detailed_name"]
        },
        "rule_no": null,
        "attribute": "detailedName"
    },
    {
        "id": 90125,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["detailed_name"]
        },
        "rule_no": null,
        "attribute": "detailedName"
    },
    {
        "id": 90115,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "eventTime"]
        },
        "rule_no": null,
        "attribute": "eventTime"
    },
    {
        "id": 90117,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "eventTime"]
        },
        "rule_no": null,
        "attribute": "eventTime"
    },
    {
        "id": 90119,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "eventTime"]
        },
        "rule_no": null,
        "attribute": "eventTime"
    },
    {
        "id": 90121,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "eventTime"]
        },
        "rule_no": null,
        "attribute": "eventTime"
    },
    {
        "id": 90123,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "eventTime"]
        },
        "rule_no": null,
        "attribute": "eventTime"
    },
    {
        "id": 90125,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "eventTime"]
        },
        "rule_no": null,
        "attribute": "eventTime"
    },
    {
        "id": 90103,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN"]
        },
        "rule_no": null,
        "attribute": "bizLocation"
    },
    {
        "id": 90105,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN"]
        },
        "rule_no": null,
        "attribute": "bizLocation"
    },
    {
        "id": 90107,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN"]
        },
        "rule_no": null,
        "attribute": "bizLocation"
    },
    {
        "id": 90109,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN"]
        },
        "rule_no": null,
        "attribute": "bizLocation"
    },
    {
        "id": 90111,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN"]
        },
        "rule_no": null,
        "attribute": "bizLocation"
    },
    {
        "id": 90113,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["GLN"]
        },
        "rule_no": null,
        "attribute": "bizLocation"
    },
    {
        "id": 90091,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPoint"]
        },
        "rule_no": null,
        "attribute": "readPoint"
    },
    {
        "id": 90093,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPoint"]
        },
        "rule_no": null,
        "attribute": "readPoint"
    },
    {
        "id": 90095,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPoint"]
        },
        "rule_no": null,
        "attribute": "readPoint"
    },
    {
        "id": 90097,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPoint"]
        },
        "rule_no": null,
        "attribute": "readPoint"
    },
    {
        "id": 90099,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPoint"]
        },
        "rule_no": null,
        "attribute": "readPoint"
    },
    {
        "id": 90101,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["readPoint"]
        },
        "rule_no": null,
        "attribute": "readPoint"
    },
    {
        "id": 90091,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:internalBatch"]
        },
        "rule_no": null,
        "attribute": "internalBatch"
    },
    {
        "id": 90093,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:internalBatch"]
        },
        "rule_no": null,
        "attribute": "internalBatch"
    },
    {
        "id": 90095,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:internalBatch"]
        },
        "rule_no": null,
        "attribute": "internalBatch"
    },
    {
        "id": 90097,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:internalBatch"]
        },
        "rule_no": null,
        "attribute": "internalBatch"
    },
    {
        "id": 90099,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:internalBatch"]
        },
        "rule_no": null,
        "attribute": "internalBatch"
    },
    {
        "id": 90101,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:internalBatch"]
        },
        "rule_no": null,
        "attribute": "internalBatch"
    },
    {
        "id": 90091,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:objectForm"]
        },
        "rule_no": null,
        "attribute": "objectForm"
    },
    {
        "id": 90093,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:objectForm"]
        },
        "rule_no": null,
        "attribute": "objectForm"
    },
    {
        "id": 90095,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:objectForm"]
        },
        "rule_no": null,
        "attribute": "objectForm"
    },
    {
        "id": 90097,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:objectForm"]
        },
        "rule_no": null,
        "attribute": "objectForm"
    },
    {
        "id": 90099,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:objectForm"]
        },
        "rule_no": null,
        "attribute": "objectForm"
    },
    {
        "id": 90101,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from",
            "target": ["event_body", "ilmd", "rcycle:objectForm"]
        },
        "rule_no": null,
        "attribute": "objectForm"
    },
    {
        "id": 90091,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_length"], ["unit_length_uom"], ["unit_length_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitLength"
    },
    {
        "id": 90093,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_length"], ["unit_length_uom"], ["unit_length_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitLength"
    },
    {
        "id": 90095,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_length"], ["unit_length_uom"], ["unit_length_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitLength"
    },
    {
        "id": 90097,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_length"], ["unit_length_uom"], ["unit_length_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitLength"
    },
    {
        "id": 90099,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_length"], ["unit_length_uom"], ["unit_length_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitLength"
    },
    {
        "id": 90101,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_length"], ["unit_length_uom"], ["unit_length_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitLength"
    },
    {
        "id": 90091,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_width"], ["unit_width_uom"], ["unit_width_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitWidth"
    },
    {
        "id": 90093,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_width"], ["unit_width_uom"], ["unit_width_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitWidth"
    },
    {
        "id": 90095,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_width"], ["unit_width_uom"], ["unit_width_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitWidth"
    },
    {
        "id": 90097,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_width"], ["unit_width_uom"], ["unit_width_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitWidth"
    },
    {
        "id": 90099,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_width"], ["unit_width_uom"], ["unit_width_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitWidth"
    },
    {
        "id": 90101,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_width"], ["unit_width_uom"], ["unit_width_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitWidth"
    },
    {
        "id": 90091,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_height"], ["unit_height_uom"], ["unit_height_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitHeight"
    },
    {
        "id": 90093,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_height"], ["unit_height_uom"], ["unit_height_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitHeight"
    },
    {
        "id": 90095,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_height"], ["unit_height_uom"], ["unit_height_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitHeight"
    },
    {
        "id": 90097,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_height"], ["unit_height_uom"], ["unit_height_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitHeight"
    },
    {
        "id": 90099,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_height"], ["unit_height_uom"], ["unit_height_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitHeight"
    },
    {
        "id": 90101,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["unit_height"], ["unit_height_uom"], ["unit_height_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "unitHeight"
    },
    {
        "id": 90091,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["filling_volume"], ["filling_volume_uom"], ["filling_volume_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "fillingVolume"
    },
    {
        "id": 90093,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["filling_volume"], ["filling_volume_uom"], ["filling_volume_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "fillingVolume"
    },
    {
        "id": 90095,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["filling_volume"], ["filling_volume_uom"], ["filling_volume_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "fillingVolume"
    },
    {
        "id": 90097,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["filling_volume"], ["filling_volume_uom"], ["filling_volume_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "fillingVolume"
    },
    {
        "id": 90099,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["filling_volume"], ["filling_volume_uom"], ["filling_volume_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "fillingVolume"
    },
    {
        "id": 90101,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["filling_volume"], ["filling_volume_uom"], ["filling_volume_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "fillingVolume"
    },
    {
        "id": 90091,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["mfr"], ["mfr_uom"], ["mfr_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "mfr"
    },
    {
        "id": 90093,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["mfr"], ["mfr_uom"], ["mfr_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "mfr"
    },
    {
        "id": 90095,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Component reshaping",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["mfr"], ["mfr_uom"], ["mfr_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "mfr"
    },
    {
        "id": 90097,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Packaging producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["mfr"], ["mfr_uom"], ["mfr_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "mfr"
    },
    {
        "id": 90099,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Plastic raw material producing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["mfr"], ["mfr_uom"], ["mfr_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "mfr"
    },
    {
        "id": 90101,
        "user_created": "0201d1af-9254-4924-9b41-2da21be261c4",
        "date_created": "2025-05-27T08:51:31.000Z",
        "user_updated": null,
        "date_updated": null,
        "production_step": "Waste processing",
        "calculation_rule": {
            "action": "read_from_multiple",
            "target": [["mfr"], ["mfr_uom"], ["mfr_uom_desc"]],
            "name": [["value"], ["uom"], ["uom_desc"]]
        },
        "rule_no": null,
        "attribute": "mfr"
    }
]

// Global variable definitions

// The output-data array that will be returned when calling the API
var outputData = [];
// Array that represents a parent - children relationship
var parents = [];

// Function definitions

// Helper function that is used to turn an attributes group info into a camel case string
// Example: Ingredient Details --> ingredientDetails
function toCamelCaseWithoutSpaces(str) {
    return str.replace(/\s+/g, '').replace(/(?:^\w|[A-Z]|\b\w)/g, function (match, index) {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

function addFloatNumbers(number1, number2) {

    if (number1 == null) {
        number1 = 0;
    }
    if (number2 == null) {
        number2 = 0;
    }

    return (
        Math.round((parseFloat(number1)
            + parseFloat(number2)) * 100) / 100
    );
}

// Populates the parents array with a structure that assigns each parent_id all of their children
// [{ parend_id: "/01/94064074000266/10/AYObMLPm071008", ["/01/94064074000464/10/AYRVHON0233008"]}]
function calculateChildren(dataArray) {
    for (var i = dataArray.length - 1; i >= 0; i--) {

        var parent = dataArray[i].parent_id;
        var child = dataArray[i].child_id;
        var added = false;

        for (var y = 0; y < parents.length; y++) {

            if (parents[y].parent_id == parent) {

                var parentObject = parents[y];
                var alreadyIn = false;

                for (var z = 0; z < parentObject.children.length; z++) {
                    if (parentObject.children[z] == child) {
                        alreadyIn = true;
                        added = true;
                    }
                }

                if (alreadyIn == false) {
                    parents[y].children.push(child);
                    added = true;
                }
            }
        }

        if (added == false) {
            var parentObject = {
                parent_id: parent,
                children: [child]
            }
            parents.push(parentObject);
        }
    }
}

// For a given parent, return all of its children from the parent array
function getChildren(id) {

    var children = [];

    for (var i = 0; i < parents.length; i++) {
        if (parents[i].parent_id == id) {
            children = parents[i].children;
        }
    }

    return children;
}

// Calculates a sum of the values of all children for a given attribute
// Example: If attribte == 'thickness', the function returns a sum of all children's thickness
function sumOfChildrenNumber(dataArray, attribute, attributeGroup) {
    var sum = 0;

    for (var i = 0; i < dataArray.length; i++) {

        var childId = dataArray[i]

        for (var y = 0; y < outputData.length; y++) {
            if (outputData[y].id == childId) {
                var child = outputData[y]

                if (child[attributeGroup][attribute]) {
                    if (child[attributeGroup][attribute]['value'] != null) {
                        sum = addFloatNumbers(sum, child[attributeGroup][attribute]['value'])
                    }

                }
                break;
            }
        }
    }
    return sum;
}

// Calculates thickness for a single event based on thickness attribute or surfaceWeight and density.
// Returns a number
function calculateThicknessFromValues(dataEntry) {
    var thickness = null;
    var surfaceWeight = null;
    var density = null;

    if (dataEntry.event_body['rcycle:thickness']) {
        thickness = dataEntry.event_body['rcycle:thickness']['rcycle:value'];
    } else {
        if (dataEntry.event_body['example:surfaceWeight'] && dataEntry.event_body['example:density']) {
            surfaceWeight = dataEntry.event_body['example:surfaceWeight']['example:value'];
            density = dataEntry.event_body['example:density']['example:value']
        } else if (dataEntry.event_body.ilmd['example:surfaceWeight'] && dataEntry.event_body.ilmd['example:density']) {
            surfaceWeight = dataEntry.event_body.ilmd['example:surfaceWeight']['example:value'];
            density = dataEntry.event_body.ilmd['example:density']['example:value']
        } else if (dataEntry.event_body.ilmd['example:surfaceWeight'] && dataEntry.event_body['example:density']) {
            surfaceWeight = dataEntry.event_body.ilmd['example:surfaceWeight']['example:value'];
            density = dataEntry.event_body['example:density']['example:value']
        } else if (dataEntry.event_body['example:surfaceWeight'] && dataEntry.event_body.ilmd['example:density']) {
            surfaceWeight = dataEntry.event_body['example:surfaceWeight']['example:value'];
            density = dataEntry.event_body.ilmd['example:density']['example:value']
        }
    }

    if (thickness == null) {
        if (surfaceWeight != null && density != null) {
            thickness = surfaceWeight / density;
        }
    }
    return thickness
}

// Main function for thickness calculation
// First checks if thickness is in ILMD, if so, take that
// If not, calculate thickness based on surface weight and density (if available)
// Calculate sum of childrens thickness and add it to own thickness
function calculateThickness(dataEntry) {
    var children = getChildren(dataEntry.child_id);
    var childrenThickness = 0;
    var thickness = null;
    var totalThickness = null;
    var thicknessObject = {};

    if (dataEntry.event_body.ilmd['rcycle:thickness']) {
        totalThickness = dataEntry.event_body.ilmd['rcycle:thickness']['rcycle:value'];
    } else {
        thickness = calculateThicknessFromValues(dataEntry);

        if (children.length > 0) {
            childrenThickness = sumOfChildrenNumber(children, 'thickness', 'basicProperties');
        }

        if (thickness != null && childrenThickness > 0) {
            totalThickness = thickness + childrenThickness;
        } else if (thickness == null && childrenThickness > 0) {
            totalThickness = childrenThickness
        } else if (thickness != null && childrenThickness == 0) {
            totalThickness = thickness
        }
    }

    thicknessObject.value = totalThickness;
    thicknessObject.uom = '4H';
    thicknessObject.uom_desc = 'µm';
    return thicknessObject;
}

// Calculates thickness for a single event based on thickness attribute or surfaceWeight and density.
// Returns a number
function calculateSurfaceWeightFromValues(dataEntry) {
    var surfaceWeight = null;
    var thickness = null;
    var density = null;

    if (dataEntry.event_body['example:surfaceWeight']) {
        surfaceWeight = dataEntry.event_body['example:surfaceWeight']['example:value'];
        // This simply checks the different combinations of thickness and density
        // E.g. thickness written in eventBody but density written in ILMD...
    } else {
        if (dataEntry.event_body['rcycle:thickness'] && dataEntry.event_body['example:density']) {
            thickness = dataEntry.event_body['rcycle:thickness']['rcycle:value'];
            density = dataEntry.event_body['example:density']['example:value']
        } else if (dataEntry.event_body.ilmd['rcycle:thickness'] && dataEntry.event_body.ilmd['example:density']) {
            thickness = dataEntry.event_body.ilmd['rcycle:thickness']['rcycle:value'];
            density = dataEntry.event_body.ilmd['example:density']['example:value']
        } else if (dataEntry.event_body.ilmd['rcycle:thickness'] && dataEntry.event_body['example:density']) {
            thickness = dataEntry.event_body.ilmd['rcycle:thickness']['rcycle:value'];
            density = dataEntry.event_body['example:density']['example:value']
        } else if (dataEntry.event_body['rcycle:thickness'] && dataEntry.event_body.ilmd['example:density']) {
            thickness = dataEntry.event_body['rcycle:thickness']['rcycle:value'];
            density = dataEntry.event_body.ilmd['example:density']['example:value']
        }
    }

    if (surfaceWeight == null) {
        if (thickness != null && density != null) {
            surfaceWeight = density * thickness;
        }
    }

    return surfaceWeight
}

// Main function for surfaceWeight calculation
// First checks if surfaceWeight is in ILMD, if so, take that
// If not, calculate surfaceWeight based on thickness and density (if available)
// also calculates sum of childrens thickness and add it to own thickness
function calculateSurfaceWeight(dataEntry) {
    var children = getChildren(dataEntry.child_id);
    var childrenSurfaceWeight = 0;
    var surfaceWeight = null;
    var totalSurfaceWeight = null;
    var surfaceWeightObject = {}

    if (dataEntry.event_body.ilmd['example:surfaceWeight']) {
        totalSurfaceWeight = dataEntry.event_body.ilmd['example:surfaceWeight']['example:value'];
    } else {
        surfaceWeight = calculateSurfaceWeightFromValues(dataEntry);

        if (children.length > 0) {
            childrenSurfaceWeight = sumOfChildrenNumber(children, 'surfaceWeight', 'basicProperties');
        }

        if (surfaceWeight != null && childrenSurfaceWeight > 0) {
            totalSurfaceWeight = surfaceWeight + childrenSurfaceWeight;
        } else if (surfaceWeight == null && childrenSurfaceWeight > 0) {
            totalSurfaceWeight = childrenSurfaceWeight
        } else if (surfaceWeight != null && childrenSurfaceWeight == 0) {
            totalSurfaceWeight = surfaceWeight
        }
    }

    surfaceWeightObject.value = totalSurfaceWeight;
    surfaceWeightObject.uom = 'GM';
    surfaceWeightObject.uom_desc = 'g/m²';

    return surfaceWeightObject;
}

// Calculates the unitWeight based on the weight of all components
// Takes the unitCode into account, meaning that KG and GRM can be mixed
function calculateUnitWeight(dataEntry) {
    var components = dataEntry.event_body['example:ComponentDetails'];
    var unitWeight = null;
    var unitCode = 'GRM';
    var unitCodeUomDesc = 'g';
    var unitWeightObject = {}

    for (var x = 0; x < components.length; x++) {
        var currentComponent = components[x]
        if (currentComponent['example:unitWeight']) {
            if (currentComponent['example:unitWeight']['example:unitCode'] == 'GRM') {
                console.log('current unitWeight: ' + unitWeight)
                unitWeight = addFloatNumbers(unitWeight, currentComponent['example:unitWeight']['example:value'])
                console.log('new unitWeight: ' + unitWeight)
            } else if (currentComponent['example:unitWeight']['example:unitCode'] == 'KGM') {
                unitWeight = addFloatNumbers(unitWeight, currentComponent['example:unitWeight']['example:value'])
                unitCode = 'KGM'
            }

        }
    }

    if (unitCode == 'KGM') {
        unitWeight = unitWeight / 1000;
        unitCodeUomDesc = 'kg'
    }

    unitWeightObject.value = unitWeight;
    unitWeightObject.uom = unitCode;
    unitWeightObject.uom_desc = unitCodeUomDesc;

    return unitWeightObject;
}

// Calculates foodApproval
function calculateFoodApproval(dataEntry) {
    var children = getChildren(dataEntry.child_id);
    var containsIngredientDetails = false;
    var foodApprovalFromEvent = null;
    var foodApprovalFromChildren = true;

    if (dataEntry.event_body['example:foodApproval'] != undefined) {
        foodApprovalFromEvent = dataEntry.event_body['example:foodApproval']
    }

    // Check if event contains PackagingIngredientDetails
    if (dataEntry.event_body['example:PackagingIngredientDetails']) {
        containsIngredientDetails = true;
    }

    // Loop through all direct children of this event
    for (var i = 0; i < children.length; i++) {

        // Take the current childs id
        var childId = children[i]

        // As long as foodApprovalFromChildren is true, loop through the output data and check for the current child's foodApproval status
        if (foodApprovalFromChildren == true) {
            for (var y = 0; y < outputData.length; y++) {
                if (outputData[y].id == childId) {
                    var child = outputData[y]

                    // Assign foodApprovalFromChildren to the current child's foodApproval status
                    // If its true, loop continues through all children
                    // If its false, loop stops and foodApprovalFromChildren remains false
                    // If its null, loop stops and foodApprovalFromChildren remains null
                    if ('ingredientDetails' in child && 'foodApproval' in child['ingredientDetails']) {
                        foodApprovalFromChildren = child['ingredientDetails'].foodApproval['value'];
                    } else {
                        foodApprovalFromChildren = null;
                    }
                    break;
                }
            }
        } else {
            break;
        }
    }

    if (foodApprovalFromEvent == false || foodApprovalFromChildren == false) {
        return false;
    } else if (foodApprovalFromChildren == true) {
        if (containsIngredientDetails == true) {
            // If foodApprovalFromChildren is true and the event contains ingredientDetails, return the events foodApproval status
            return foodApprovalFromEvent;
        } else if (children.length == 0) {
            // If there are no children, return foodApprovalFromEvent (can be null)
            return foodApprovalFromEvent;
        } else {
            return true;
        }
    } else if (foodApprovalFromChildren == null) {
        return null;
    }
}

function calculateBioDegradability(dataEntry) {
    var children = getChildren(dataEntry.child_id);
    var containsIngredientDetails = false;
    var bioDegradabilityFromEvent = null;
    var bioDegradabilityFromChildren = true;

    if (dataEntry.event_body['example:biodegradability'] != undefined) {
        bioDegradabilityFromEvent = dataEntry.event_body['example:biodegradability']
    }

    // Check if event contains PackagingIngredientDetails
    if (dataEntry.event_body['example:PackagingIngredientDetails']) {
        containsIngredientDetails = true;
    }

    // Loop through all direct children of this event
    for (var i = 0; i < children.length; i++) {

        // Take the current childs id
        var childId = children[i]

        // As long as bioDegradabilityFromChildren is true, loop through the output data and check for the current child's bioDegradability status
        if (bioDegradabilityFromChildren == true) {
            for (var y = 0; y < outputData.length; y++) {
                if (outputData[y].id == childId) {
                    var child = outputData[y]

                    // Assign bioDegradabilityFromChildren to the current child's bioDegradability status
                    // If its true, loop continues through all children
                    // If its false, loop stops and bioDegradabilityFromChildren remains false
                    // If its null, loop stops and bioDegradabilityFromChildren remains null
                    if ('ingredientDetails' in child && 'biodegradability' in child['ingredientDetails']) {
                        bioDegradabilityFromChildren = child['ingredientDetails'].biodegradability['value'];
                    } else {
                        bioDegradabilityFromChildren = null;
                    }

                    break;
                }
            }
        } else {
            break;
        }
    }

    if (bioDegradabilityFromEvent == false || bioDegradabilityFromChildren == false) {
        return false;
    } else if (bioDegradabilityFromChildren == true) {
        if (containsIngredientDetails == true) {
            // If bioDegradabilityFromChildren is true and the event contains ingredientDetails, return the events bioDegradability status
            return bioDegradabilityFromEvent;
        } else if (children.length == 0) {
            // If there are no children, return bioDegradabilityFromEvent (can be null)
            return bioDegradabilityFromEvent;
        } else {
            return true;
        }
    } else if (bioDegradabilityFromChildren == null) {
        return null;
    }
}

// Finds the process type for a given production step
function findProcessType(productionStep) {

    var processType = null;

    for (var i = 0; i < productionStepCodes.length; i++) {
        if (productionStepCodes[i].code == productionStep) {
            processType = productionStepCodes[i].process_type;
            break;
        }
    }

    return processType;
}

// Finds a calculation rule for a given attribute and returns it
function getCalculationRule(attribute, productionStep, processType) {

    var calculationRule = null;

    for (var x = 0; x < calculationRules.length; x++) {
        if (calculationRules[x].attribute == attribute && calculationRules[x].production_step == productionStep) {
            calculationRule = calculationRules[x].calculation_rule;
            break;
        } else if (calculationRules[x].attribute == attribute && calculationRules[x].production_step == processType && calculationRule == null) {
            calculationRule = calculationRules[x].calculation_rule;
        }
    }

    return calculationRule;
}

// Main function that is being called for every attribute that has a calculation rule
function calculateAttribute(calculationRule, currentElement) {

    var calculatedAttribute = null;

    if (calculationRule.action == 'read_from') {

        if (calculationRule.target.length == 1) {

            calculatedAttribute = currentElement[calculationRule.target[0]]
        } else if (calculationRule.target.length > 1) {

            calculatedAttribute = currentElement[calculationRule.target[0]]

            for (var x = 1; x < calculationRule.target.length; x++) {
                calculatedAttribute = calculatedAttribute[calculationRule.target[x]]
            }
        }

    } else if (calculationRule.action == 'read_from_multiple') {

        calculatedAttribute = {};

        for (var x = 0; x < calculationRule.target.length; x++) {

            if (calculationRule.target[x].length == 1) {

                //calculatedAttribute[calculationRule.target[x][0]] = currentElement[calculationRule.target[x][0]]
                calculatedAttribute[calculationRule.name[x][0]] = currentElement[calculationRule.target[x][0]]
            } else if (calculationRule.target[x].length > 1) {

                var calculatedAttributeTemp = null;
                calculatedAttributeTemp = currentElement[calculationRule.target[x][0]]

                for (var y = 1; y < calculationRule.target[x].length; y++) {
                    calculatedAttributeTemp = calculatedAttributeTemp[calculationRule.target[x][y]]
                }

                calculatedAttribute[calculationRule.name[x][0]] = calculatedAttributeTemp;

            }
        }

    } else if (calculationRule.action == 'calc_thickness') {
        calculatedAttribute = calculateThickness(currentElement);
    } else if (calculationRule.action == 'calc_unitWeight') {
        calculatedAttribute = calculateUnitWeight(currentElement);
    } else if (calculationRule.action == 'calc_surfaceWeight') {
        calculatedAttribute = calculateSurfaceWeight(currentElement);
    } else if (calculationRule.action == 'calc_foodApproval') {
        calculatedAttribute = calculateFoodApproval(currentElement);
    } else if (calculationRule.action == 'calc_bioDegradability') {
        calculatedAttribute = calculateBioDegradability(currentElement);
    }

    return calculatedAttribute;
}

function createOutputData() {
    for (var i = treeData.length - 1; i >= 0; i--) {

        var currentElement = treeData[i];
        var productionStep = currentElement.event_body.ilmd['rcycle:productionStep'];
        var processType = findProcessType(productionStep);
        var primaryImage = currentElement['primary_image'];
        var share = currentElement['share'];

        var outputObject = {
            id: currentElement.child_id,
            primaryImage: primaryImage,
            share: share,
            lotOverview: {

            },
            productionDetails: {

            },
            basicProperties: {

            },
            advancedProperties: {

            },
            ingredientDetails: {

            },
            wasteDetails: {

            }
        }

        for (var y = 0; y < attributeTable.length; y++) {

            var currentAttribute = attributeTable[y];
            var currentAttributeName = currentAttribute.attribute;
            var currentAttributeGroup = toCamelCaseWithoutSpaces(currentAttribute.group);

            var calculationRule = getCalculationRule(currentAttributeName, productionStep, processType);

            if (calculationRule != null) {
                var calculationOutput = calculateAttribute(calculationRule, currentElement);

                var calculatedObject = {};

                if (typeof calculationOutput === 'object') {
                    Object.assign(calculatedObject, calculationOutput)
                } else {
                    calculatedObject.value = calculationOutput
                }

                calculatedObject.displayName = currentAttribute.description;
                calculatedObject.order = currentAttribute.order;

                if ('value' in calculatedObject) {
                    if (calculatedObject.value != null) {
                        outputObject[currentAttributeGroup][currentAttributeName] = calculatedObject;
                    }
                }
            }
        }

        outputData.push(outputObject);
    }
}

calculateChildren(treeData);

createOutputData();

//sort the outputdata parts so that the frontend gets them in the right sorting 

var jsonOutputData = JSON.stringify(outputData)

var fs = require('fs');
fs.writeFile("output.json", jsonOutputData, (error) => {
    // throwing the error
    // in case of a writing problem
    if (error) {
        // logging the error
        console.error(error);

        throw error;
    }

    console.log("output.json written correctly");
});

return outputData;