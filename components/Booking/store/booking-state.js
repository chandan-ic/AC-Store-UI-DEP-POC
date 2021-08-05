// export const bookingState = {
//   modelCode: null,
//   variantCode: null,
//   variants: [],
//   colorCode: null,
//   financierCode: null,
//   financeType: "CSH",
//   financierName: null,
//   financierAddress: null,
//   exchangeRequired: false,
//   preOrderNo: null,
//   bookingAmount: 0,
//   searchDealersBy: ",
//   phone: "8765679823",
//   INS: {
//     serviceCode: "INS",
//     required: true,
//     referenceType: ",
//     referenceCode: "
//   },
//   RTO: {
//     serviceCode: "RTO",
//     required: true,
//     referenceType: ",
//     referenceCode: "PER"
//   },
//   RSA: {
//     serviceCode: "RSA",
//     required: false,
//     referenceType: ",
//     referenceCode: "
//   },
//   EW: {
//     serviceCode: "EW",
//     required: false,
//     referenceType: ",
//     referenceCode: "
//   },
//   bookingBike: "DOM25",
//   bookingPreSelected: false,
//   currentStep: "1",
//   pinCode: "560001",
//   dealerCode: null,
//   selectedDealerCode: null,
//   currentActive: ",
//   productVariant: null,
//   paymentNo: ",
//   paymentGatewayRefNo: ",
//   clientKey: ",
//   currency: ",
//   transactionToName: ",
//   customerName: ",
//   customerPhone: ",
//   customerEmail: ",
//   razorPaySignature: ",
//   razorPayOrderId: ",
//   razorPaypaymentId: ",
//   bookingState: ",
//   bookingCity: ",
//   bikeData: null,
//   buttonType: null,
//   variantData: [],
//   bookingMaster: [],
//   bikePrice: null

// }

export const bookingState = {
  currentStep: 0,
  variant: "",
  fuelType: "",
  financeRequired: false,
  exchangeRequried: false,
  selectedVariant: 0,
  selectedDealer: null,
  selectedColor: 0,
  selectedModel: 17,
  selectedBrand: 1,

  product: {
    productSlno: 1000,
    productName: "Honda City",
    productURL: "somewhere/honda.jpg",
    variantList: [
      {
        variantSlno: 1000,
        variantName: "Honda City X",
        standardPrice: 1000000,
        maximumRetailPrice: 1200000,
        color: [
          {
            colorSlno: 1,
            stockMessage: "Available",
          },
          {
            colorSlno: 2,
            stockMessage: "Available",
          },
        ],
        fuelTypeSlno: [1],
        transmissionTypeSlno: [1],
        stockMessage: null,
      },
      {
        variantSlno: 1001,
        variantName: "Honda City VX",
        standardPrice: 1100000,
        maximumRetailPrice: 1300000,
        color: [
          {
            colorSlno: 1,
            stockMessage: "Available",
          },
          {
            colorSlno: 2,
            stockMessage: "Available",
          },
        ],
        fuelTypeSlno: [1, 2],
        transmissionTypeSlno: [1, 2],
        stockMessage: null,
      },
      {
        variantSlno: 1003,
        variantName: "Honda City ZX",
        standardPrice: 1300000,
        maximumRetailPrice: 1400000,
        color: [
          {
            colorSlno: 1,
            stockMessage: "Available",
          },
          {
            colorSlno: 2,
            stockMessage: "Available",
          },
          {
            colorSlno: 3,
            stockMessage: "Limited",
          },
        ],
        fuelTypeSlno: [2],
        transmissionTypeSlno: [2],
        stockMessage: null,
      },
    ],
    fuelType: [
      {
        fuelTypeSlno: 1,
        fuelType: "Petrol",
      },
      {
        fuelTypeSlno: 2,
        fuelType: "Deisel",
      },
    ],
    transmissionType: [
      {
        transmissionSlno: 1,
        transmissionType: "Manual",
      },
      {
        transmissionSlno: 2,
        transmissionType: "Auto",
      },
    ],
    color: [
      {
        colorSlno: 1,
        colorName: "White",
        colorURL: "http://somewhere/white.jpg",
        colorProductURL: "http://somewhere/whitehonda.jpg",
      },
      {
        colorSlno: 2,
        colorName: "Black",
        colorURL: "http://somewhere/black.jpg",
        colorProductURL: "http://somewhere/blackhonda.jpg",
      },
      {
        colorSlno: 3,
        colorName: "Red",
        colorURL: "http://somewhere/red.jpg",
        colorProductURL: "http://somewhere/redhonda.jpg",
      },
    ],
    stockMessage: "Available",
  },
};
