export const masterData = 
    {
	isSuccess: true,
	errorList: [],
	responseData:{
Brand:[{
            "Brand":"Bajaj",
            "BrandCode":"BAJAJ"
         },
         {
            "Brand":"KTM",
            "BrandCode":"KTM"
         },
         {
            "Brand":"Chetak",
            "BrandCode":"CHETAK"
         },
         {
            "Brand":"HusqVarna",
            "BrandCode":"HUSQVARNA"
         }],
      Model:[{
            "Model":"DOMINAR 250",
            "ModelCode":"DOMINAR250",
			"BrandCode":"BAJAJ"
         },
         {
            "Model":"Pulsar 220",
            "ModelCode":"PULSAR220",
			"BrandCode":"BAJAJ"
         },
         {
            "Model":"KTM RC 200",
            "ModelCode":"KTMRC200",
			"BrandCode":"KTM"
         },
         {
            "Model":"Duke 390",
            "ModelCode":"DUKE",
			"BrandCode":"KTM"
         }],
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
	hasErrors:false
}