import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    modelCode:null,
    variantCode:null,
    colorCode:null,
    financierCode:null,
    financeType:"CSH",
    financierName:null,
    financierAddress:null,
    exchangeRequired:false,
    preOrderNo:null,
    bookingAmount:0,
    phone:"8765679823",
    INS:{
          serviceCode: "INS",
          required: true,
          referenceType: "",
          referenceCode: ""
        },
        RTO:{
        serviceCode: "RTO",
        required: true,
        referenceType: "",
        referenceCode: "PER"
          },
        RSA:{
        serviceCode: "RSA",
        required: false,
        referenceType:"" ,
        referenceCode: ""
           },
       EW:{
        serviceCode: "EW",
        required: false,
        referenceType: "",
        referenceCode: "" 
        },
    bookingBike:null,
    bookingPreSelected:false,
    currentStep: "1",
    pinCode: "560001",
    dealerCode: null,
    selectedDealerCode: null,
    currentActive: "",
    productVariant: null,
    paymentNo:"",
    paymentGatewayRefNo:"",
    clientKey:"",
    currency:"",
    transactionToName:"",
    customerName:"",
    customerPhone:"",
    customerEmail:"",
    razorPaySignature:"",
    razorPayOrderId:"",
    razorPaypaymentId:""
};  
const setRazorPaySignature=(state,action) => {
    return updateObject(state, {razorPaySignature:action.razorPaySignature})
}
const setRazorPayorderId=(state,action) => {
    return updateObject(state, {razorPayOrderId:action.razorPayOrderId})
}
const setRazorPaymentId=(state,action) => {
    return updateObject(state, {razorPaypaymentId:action.razorPaypaymentId})
}    

    const setPaymentNo=(state,action) => {
        return updateObject(state, {paymentNo:action.paymentNo})
    }
    const setPaymentGatewayRefNo=(state,action) => {
        return updateObject(state, {paymentGatewayRefNo:action.paymentGatewayRefNo})
    }
    const setClientKey=(state,action) => {
        return updateObject(state, {clientKey:action.clientKey})
    }
    const setCurrency=(state,action) => {
        return updateObject(state, {currency:action.currency})
    }
    const setTransactionToName=(state,action) => {
        return updateObject(state, {transactionToName:action.transactionToName})
    }
    const setCustomerName=(state,action) => {
        return updateObject(state, {customerName:action.customerName})
    }
    const setCustomerPhone=(state,action) => {
        return updateObject(state, {customerPhone:action.customerPhone})
    }
    const setCustomerEmail=(state,action) => {
        return updateObject(state, {customerEmail:action.customerEmail})
    }


    const setFinancierCode = (state, action) => {
        return updateObject(state, { financierCode: action.financierCode })
    }
    const setBookingAmount = (state, action) => {
        return updateObject(state, { bookingAmount: action.bookingAmount })
    }
    const setFinancierAddress = (state, action) => {
        return updateObject(state, { financierAddress: action.financierAddress })
    }
      
const setFinancierName = (state, action) => {
    return updateObject(state, { financierName: action.financierName })
}
  
const setFinanceType = (state, action) => {
    return updateObject(state, { financeType: action.financeType })
}

const setINS = (state, action) => {
    return updateObject(state, { INS: action.INS })
}

const setPreOrderNo = (state, action) => {
    return updateObject(state, { preOrderNo: action.preOrderNo })
}

const setBookingBike = (state, action) => {
    return updateObject(state, { bookingBike: action.bookingBike })
}
const setBookingPreSelected = (state, action) => {
    return updateObject(state, { bookingPreSelected: action.bookingPreSelected })
}

const setBookingCurrentStep = (state, action) => {
    return updateObject(state, { currentStep: action.currentStep })
}

const setCurrentActive = (state, action) => {
    return updateObject(state, { currentActive: action.currentActive })
}

const setSelectedProductVariant = (state, action) => {
    return updateObject(state, { productVariant: action.productVariant })
}

const setBookingPinCode = (state, action) => {
    return updateObject(state, { pinCode: action.pinCode });
};
const setBookingDealerCode = (state, action) => {
    return updateObject(state, { dealerCode: action.dealerCode });
};
const setBookingSelectedDealerCode = (state, action) => {
    return updateObject(state, { selectedDealerCode: action.selectedDealerCode });
};
const setExchangeRequired = (state, action) => {
    return updateObject(state, { exchangeRequired: action.exchangeRequired });
};
const setRSA = (state,action) => {
    return updateObject(state,{RSA:action.RSA})
}
const setRTO = (state,action) => {
    return updateObject(state,{RTO:action.RTO})
}
const setEW = (state,action) => {
    return updateObject(state,{EW:action.EW})
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_BOOKING_AMOUNT: return setBookingAmount(state, action);
        case actionTypes.SET_FINANCIER_CODE: return setFinancierCode(state, action);
        case actionTypes.SET_FINANCE_TYPE: return setFinanceType(state, action);
        case actionTypes.SET_FINANCIER_NAME: return setFinancierName(state, action);
        case actionTypes.SET_FINANCIER_ADDRESS: return setFinancierAddress(state, action);
        case actionTypes.SET_PRE_ORDER_NO: return setPreOrderNo(state, action);
        case actionTypes.SET_BOOKING_BIKE: return setBookingBike(state, action);
        case actionTypes.SET_BOOKING_PRE_SELECTED: return setBookingPreSelected(state, action);
        case actionTypes.SET_BOOKING_CURRENT_STEP: return setBookingCurrentStep(state, action);
        case actionTypes.SET_BOOKING_SELECTED_VARIANT: return setSelectedProductVariant(state, action);
        case actionTypes.SET_BOOKING_PINCODE: return setBookingPinCode(state, action);
        case actionTypes.SET_BOOKING_DEALER_CODE: return setBookingDealerCode(state, action);
        case actionTypes.SET_CURRENT_ACTIVE: return setCurrentActive(state, action);
        case actionTypes.SET_BOOKING_SELECTED_DEALER_CODE: return setBookingSelectedDealerCode(state, action);
        case actionTypes.SET_EXCHANGE_REQUIRED: return setExchangeRequired(state, action);
        case actionTypes.SET_RSA: return setRSA(state, action);
        case actionTypes.SET_RTO: return setRTO(state, action);
        case actionTypes.SET_EW: return setEW(state, action);
        case actionTypes.SET_INS: return setINS(state, action);
        case actionTypes.SET_PAYMENTGATEWAY_REF_NO: return setPaymentGatewayRefNo(state, action);
        case actionTypes.SET_CLIENTKEY: return setClientKey(state, action);
        case actionTypes.SET_PAYMENT_NO: return setPaymentNo(state, action);
        case actionTypes.SET_CURRENCY: return setCurrency(state, action);
        case actionTypes.SET_TRANSACTIONTO_NAME: return setTransactionToName(state, action);
        case actionTypes.SET_CUSTOMER_NAME: return setCustomerName(state, action);
        case actionTypes.SET_CUSTOMER_PHONE: return setCustomerPhone(state, action);
        case actionTypes.SET_CUSTOMER_EMAIL: return setCustomerEmail(state, action);
        
        case actionTypes.SET_RAZORPAY_SIGNATURE: return setRazorPaySignature(state, action);
        case actionTypes.SET_RAZORPAY_ORDER_ID: return setRazorPayorderId(state, action);
        case actionTypes.SET_RAZORPAY_PAYMENT_ID: return setRazorPaymentId(state, action);


        default: return state;
    }
};

export default Reducer;