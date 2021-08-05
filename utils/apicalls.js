import axios from "axios";
import { server } from "../config";

export const getBikeColorsFromApi = (productVariant) => {
  return axios
    .get(`${server}/Master/api/v1/booking/get/color/${productVariant}`)
    .then((response) => {
      console.log("getBikecolors from response=", response.data.responseData);
      return response.data.responseData;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const getBikeImgUrlsFromApi = (modelCode) => {
  return axios
    .get(`/api/booking/bikeImageColors/${modelCode}`)
    .then((response) => {
      console.log("getBikecolors from response=", response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const getBikeVariants = (modelCode) => {
  return axios
    .get(`${server}/Master/api/v1/booking/get/variant/${modelCode}`)
    .then((response) => {
      console.log(
        "get product variants from response=",
        response.data.responseData
      );
      return response.data.responseData;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const getBookingMasterFromAPI = () => {
  return axios
    .get(`${server}/Master/api/v1/master/get/booking`)
    .then((response) => {
      console.log("get booking master=", response.data.responseData);
      return response.data.responseData;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const reqObject = JSON.stringify({
  modelCode: "DOM25",
  variantCode: "00JF26",
  locationCode: "KR",
  additionalServices: [
    {
      serviceCode: "INS",
      required: true,
      referenceType: "INS",
      referenceCode: "ICICL",
    },
    {
      serviceCode: "RTO",
      required: true,
      referenceType: "RTO",
      referenceCode: "PER",
    },
    {
      serviceCode: "RSA",
      required: true,
      referenceType: "",
      referenceCode: "",
    },
    {
      serviceCode: "EW",
      required: false,
      referenceType: "",
      referenceCode: "",
    },
  ],
});

export const getOnRoadPriceFromAPI = () =>
  fetch(`${server}/Booking/api/v1/Booking/onroadprice/get`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
    body: reqObject,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });

export const getDealerDataFromAPI = (pinCode, modelCode) => {
  fetch(`${server}/Master/api/v1/master/location/get`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
    body: dealerReq,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sendPayRequestAPI = () => {
  const reObject = JSON.stringify({
    basedOn: "PAY",
    modelCode: "DOM25",
    variantCode: "00JF26",
    colorCode: "Canyon Red",
    locationCode: "KR",
    financeType: "CUS",
    financierName: "Sri Vinayaka Finance ltd",
    financierAddress: "XYZ circle, Bangalore",
    financierCode: null,
    exchangeRequired: false,
    phone: "8919022436",
    preOrderNo: "61d76d2d-8a79-48f3-85d7-2ba72c9d7479",
    additionalServices: [
      {
        serviceCode: "RTO",
        required: true,
        referenceType: "RTO",
        referenceCode: "PER",
      },
      {
        serviceCode: "INS",
        required: true,
        referenceType: "INS",
        referenceCode: "ICICL",
      },
    ],
  });

  fetch(`${server}/Booking/api/v1/Booking/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
    body: reObject,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const sendPayRequestAPI = () => {

//     const data = JSON.stringify(
//         {
//             "basedOn": "PAY",
//             "modelCode": "DOM25",
//             "variantCode": "00JF26",
//             "colorCode": "Canyon Red",
//             "locationCode": "KR",
//             "financeType": "CUS",
//             "financierName": "Sri Vinayaka Finance ltd",
//             "financierAddress": "XYZ circle, Bangalore",
//             "financierCode": null,
//             "exchangeRequired": false,
//             "phone": "8919022436",
//             "preOrderNo": "61d76d2d-8a79-48f3-85d7-2ba72c9d7479",
//             "additionalServices": [
//                 {
//                     "serviceCode": "RTO",
//                     "required": true,
//                     "referenceType": "RTO",
//                     "referenceCode": "PER"
//                 },
//                 {
//                     "serviceCode": "INS",
//                     "required": true,
//                     "referenceType": "INS",
//                     "referenceCode": "ICICL"
//                 }
//             ]
//         })

//     var config = {
//         method: 'post',
//         url: `${server}/Booking/api/v1/Booking/create`,
//         headers: { 'Content-Type': 'application/json' },
//         data: data

//     };
//     axios(config)
//         .then(function (response) {
//                 return response.data.responseData
//             }
//         )
//         .catch(function (error) {
//             if (error.response && error.response.data)
//                 console.log(error.response.data.errorList);

//         });
// }
/* const data = JSON.stringify(
    //         {
    //             "basedOn": "PAY",
    //             "modelCode": bookingDTLS.bookingBike,
    //             "variantCode": bookingDTLS.variantCode,
    //             "colorCode": bookingDTLS.colorCode,
    //             "locationCode": bookingDTLS.locationCode,
    //             "financeType": bookingDTLS.financeType,
    //             "financierName": bookingDTLS.financierName,
    //             "financierAddress": bookingDTLS.financierAddress,
    //             "financierCode": bookingDTLS.financierCode,
    //             "exchangeRequired": bookingDTLS.exchangeRequired,
    //             "preOrderNo": bookingDTLS.preOrderNo,
    //             "phone": "8919022436",
    //             "additionalServices": [
    //               bookingDTLS.INS,
    //               bookingDTLS.RTO,
    //               bookingDTLS.RSA,
    //               bookingDTLS.EW
    //             ]
    //           })
    */
export const getPayButtonFromAPI = () => {
  const data = JSON.stringify({
    preOrderNo: "9ac2494c-82ce-481a-969e-bbfee9ebcd02",
    paymentNo: "KMAP0768",
  });
  var config = {
    method: "post",
    url: `${server}/Booking/api/v1/Booking/create`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  axios(config)
    .then(function (response) {
      if (response.data.isSuccess) {
        console.log("responseData=", response.data.responseData);
        return response.data.responseData;
      } else {
        console.log(error);
      }
    })
    .catch(function (error) {
      if (error.response && error.response.data)
        console.log(error.response.data.errorList);
    });
};
