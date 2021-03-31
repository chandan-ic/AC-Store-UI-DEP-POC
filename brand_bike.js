export const brandBike = [
    {
        Brand: [
            { 
                "BrandId": "1",
                "BrandCode": "Bajaj"
            },
            { 
                "BrandId": "2",
                "BrandCode": "KTM"
            },
            { 
                "BrandId": "3",
                "BrandCode": "HusqVarna"
            }
        ],
        Model: [
            { 
                "ModelId": "1",
                "BrandId":"1",
                "BrandCode": "Bajaj",
                "ModelCode": "Dominar",
                "ProductCode": "Dominar-250"
            },
            { 
                "ModelId": "2",
                "BrandId":"1",
                "BrandCode": "Bajaj",
                "ModelCode": "Dominar",
                "ProductCode": "Dominar-400"
            },
            { 
                "ModelId": "3",
                "BrandId":"2",
                "BrandCode": "KTM",
                "ModelCode": "KTM1",
                "ProductCode": "KTM-250"
            },
            { 
                "ModelId": "4",
                "BrandId":"2",
                "BrandCode": "KTM",
                "ModelCode": "KTM2",
                "ProductCode": "KTM-350"
            },
            { 
                "ModelId": "5",
                "BrandId":"2",
                "BrandCode": "KTM",
                "ModelCode": "KTM3",
                "ProductCode": "KTM-450"
            },
            { 
                "ModelId": "6",
                "BrandId":"3",
                "BrandCode": "HUSQVARNA",
                "ModelCode": "HUSQVARNA1",
                "ProductCode": "husq-250"
            },
            { 
                "ModelId": "7",
                "BrandId":"3",
                "BrandCode": "HUSQVARNA",
                "ModelCode": "HUSQVARNA2",
                "ProductCode": "husq-350"
            },
            { 
                "ModelId": "8",
                "BrandId":"3",
                "BrandCode": "HUSQVARNA",
                "ModelCode": "HUSQVARNA3",
                "ProductCode": "husq-450"
            }
        ],
        TestrideType:[
            {
            "TestrideType": "City",
            "TestrideTypeFixedCategory": "CTY"
        },{
            "TestrideType":"Highway",
            "TestrideTypeFixedCategory":"HWY"
        }],
        TestridePreferredLocation:[{
            "TestridePreferredLocation": "At Dealership",
            "TestridePreferredLocationFixedCategory": "DLR",
            "TestrideTypeFixedCategory": "CTY"
        },{
            "TestridePreferredLocation": "At Residence/Office",
            "TestridePreferredLocationFixedCategory": "CUS",
            "TestrideTypeFixedCategory": "CTY"
        }]
    },
    
]