export const apiUrl = {
  dealers: {
    url: "/Master/api/v1/master/location/get",
    method: "POST",
  },
  master: {
    url: "/Master/api/v1/master/get/testride",
    method: "GET",
  },
  testDrive: {
    url: "/Testride/api/v1/testride/bookingrequest/create",
    method: "POST",
  },
  trSentOtp: {
    url: "/Testride/api/v1/testride/bookingrequest/generate/otp",
    method: "POST",
  },
  trResentOtp: {
    url: "/Testride/api/v1/testride/bookingrequest/otp/regenerate",
    method: "POST",
  },
  search: {
    url: "/Catalogue/api/v1/product/search/models",
    method: "POST",
  },
  searchMasterData: {
    url: "/Master/api/v1/master/get/variantSearch",
    method: "GET",
  },

  booking: {
    url: "/Booking/api/v1/Booking/create",
    method: "POST",
  },
  bookingColor: {
    url: "/api/booking/bikeImageColors",
    method: "GET",
  },
  bookingPayment: {
    url: "/Booking/api/v1/Booking/payment",
    method: "POST",
  },
  loginPassword: {
    url: "/Login/api/v1/login/password",
    method: "POST",
  },
  loginOtp: {
    url: "/Login/api/v1/login/otp/generate",
    method: "POST",
  },
  loginOtpVerify: {
    url: "/Login/api/v1/login/otp/verify",
    method: "POST",
  },
  stateCity: {
    url: "/Master/api/v1/master/statecity/get",
    method: "GET",
  },
  profileCreateAddress: {
    url: "/api/v1/customer/address/create",
    method: "POST",
  },
  profileUpdateAddress: {
    url: "/api/v1/customer/address/update",
    method: "PUT",
  },
  profileDeleteAddress: {
    url: "/api/v1/customer/address/delete",
    method: "POST",
  },
  profileAddressGetList: {
    url: "/Customer/api/v1/customer/address/get",
    method: "GET",
  },
  profileAddressGetById: {
    url: "/api/v1/customer/address/getbyid",
    method: "GET",
  },

  profileCreateContact: {
    url: "/api/v1/customer/contact/create",
    method: "POST",
  },
  profileUpdateContact: {
    url: "/api/v1/customer/contact/update",
    method: "PUT",
  },
  profileDeleteContact: {
    url: "/api/v1/customer/contact/delete",
    method: "POST",
  },
  profileContactGetList: {
    url: "/api/v1/customer/contact/getlist",
    method: "POST",
  },
  profileContactGetById: {
    url: "/api/v1/customer/contact/getbyid",
    method: "POST",
  },
  profileContactMasterData: {
    url: "/Master/api/v1/master/get/customercontact",
    method: "GET",
  },
  profileAddressMasterData: {
    url: "/Master/api/v1/master/get/customeraddress",
    method: "GET",
  },
  // bookingBikeSelect: {
  //   url: "/api/v1/booking/get/variant/",
  //   method: "GET",
  // },
  // bookigBikeColor: {
  //   url: "/api/v1/booking/get/color/",
  //   method: "GET",
  // },
  // bookingDealerData: {
  //   url: "/api/v1/master/location/get",
  //   method: "POST",
  // },
  // bookingMasterData: {
  //   url: "/api/v1/master/get/",
  //   method: "GET",
  // },
  // bookingGetOnRoadPrice: {
  //   url: "/api/v1/booking/onroadprice/get",
  //   method: "POST",
  // },
  // bookingSubmit: {
  //   url: "/api/v1/booking/create",
  //   method: "POST",
  // },
  // bookingPayment: {
  //   url: "/api/v1/booking/payment",
  //   method: "POST",
  // },
  // bookingGetPaymentDetails: {
  //   url: "/api/v1/booking/payment/details/get",
  //   method: "POST",
  // },
  // bookingSavePayment: {
  //   url: "/api/v1/booking/payment/save",
  //   method: "POST",
  // },

  bikeVariant: {
    url: "/Master/api/v1/booking/get/variant",
    method: "POST",
  },
  // bookingMaster: {
  //   url: "/Master/api/v1/master/get/booking",
  //   method: "POST",
  // },
  register: {
    url: "/Registration/api/v1/customer/register",
    method: "POST",
  },
  registerOtpVerify: {
    url: "/Registration/api/v1/customer/registration/verify/otp",
    method: "POST",
  },
  passwordGenerateOTP: {
    url: "/Registration/api/v1/forgot/password/generate/otp",
    method: "POST",
  },
  passwordVerifyOtp: {
    url: "/Registration/api/v1/forgot/password/reset",
    method: "POST",
  },
  RegenearteOtp: {
    url: "/Registration/api/v1/customer/regenerate/otp",
    method: "POST",
  },
  ResetPassword: {
    url: "/api/v1/forgot/password/reset",
    method: "POST",
  },
  MyRequest: {
    url: "/CRequest/api/customerrequest/getall",
    method: "POST",
  },
  Finance: {
    url: "/Finance/api/v1/financeeligibility/otp/generate",
    method: "POST",
  },
  FinanceVerifyOtp: {
    url: "/Finance/api/v1/financeeligibility/create",
    method: "POST",
  },
  FinanceRegenOtp: {
    url: "/Finance/api/v1/financeEligibility/otp/regenerate",
    method: "POST",
  },
  homeCategories: {
    url:"/Master/api/v1/master/get/homepage",
    method:"GET"
  },
  setHomeSearchCategory: {
    url:"/Catalogue/api/v1/product/search/home",
    method:"POST"
  },
  BookingMaster: {
    url: "/Product/api/v1/product/get/detail",
    method: "POST",
  },
};
