import * as actionTypes from './actionTypes';

export const setRazorPaySignature = (razorPaySignature) => {
    return {
        type: actionTypes.SET_RAZORPAY_SIGNATURE,
        razorPaySignature:razorPaySignature
    }
}
export const setRazorPayorderId = (razorPayOrderId) => {
    return {
        type: actionTypes.SET_RAZORPAY_ORDER_ID,
        razorPayOrderId:razorPayOrderId
    }
}
export const setRazorPaymentId = (razorPaypaymentId) => {
    return {
        type: actionTypes.SET_RAZORPAY_PAYMENT_ID,
        razorPaypaymentId: razorPaypaymentId
    }
}
export const setPaymentNo = (paymentNo) => {
    return {
        type: actionTypes.SET_PAYMENT_NO,
        paymentNo: paymentNo
    }
}
export const setPaymentGatewayRefNo = (paymentGatewayRefNo) => {
    console.log("paymentGatewayRefNo actions = ",paymentGatewayRefNo)

    return {
        type: actionTypes.SET_PAYMENTGATEWAY_REF_NO,
        paymentGatewayRefNo: paymentGatewayRefNo
    }
}
export const setClientKey = (clientKey) => {
    console.log("paymentGatewayRefNo actions = ",clientKey)
    return {
        type: actionTypes.SET_CLIENTKEY,
        clientKey: clientKey
    }
}
export const setCurrency = (currency) => {
    console.log("paymentGatewayRefNo actions = ",currency)

    return {
        type: actionTypes.SET_CURRENCY,
        currency: currency
    }
}
export const setTransactionToName = (transactionToName) => {
    return {
        type: actionTypes.SET_TRANSACTIONTO_NAME,
        transactionToName: transactionToName
    }
}

export const setCustomerName = (customerName) => {
    return {
        type: actionTypes.SET_CUSTOMER_NAME,
        customerName: customerName
    }
}
export const setCustomerPhone = (customerPhone) => {
    return {
        type: actionTypes.SET_CUSTOMER_PHONE,
        customerPhone: customerPhone
    }
}
export const setCustomerEmail = (customerEmail) => {
    return {
        type: actionTypes.SET_CUSTOMER_EMAIL,
        customerEmail: customerEmail
    }
}

    export const setFinancierCode = (financierCode) => {
        return {
            type: actionTypes.SET_FINANCIER_CODE,
            financierCode: financierCode
        }
    }
    export const setBookingAmount = (bookingAmount) => {
        return {
            type: actionTypes.SET_BOOKING_AMOUNT,
            bookingAmount: bookingAmount
        }
    }
    export const setFinanceType = (financeType) => {
        return {
            type: actionTypes.SET_FINANCE_TYPE,
            financeType: financeType
        }
    }
    export const setFinancierName = (financierName) => {
        return {
            type: actionTypes.SET_FINANCIER_NAME,
            financierName: financierName
        }
    }
    export const setFinancierAddress = (financierAddress) => {
        return {
            type: actionTypes.SET_FINANCIER_ADDRESS,
            financierAddress: financierAddress
        }
    }


export const setRSA = (RSA) => {
    return {
        type: actionTypes.SET_RSA,
        RSA: RSA
    }
}
export const setINS = (INS) => {
    return {
        type: actionTypes.SET_INS,
        INS: INS
    }
}
export const setRTO = (RTO) => {
    return {
        type: actionTypes.SET_RTO,
        RTO: RTO
    }
}

export const setEW = (EW) => {
    return {
        type: actionTypes.SET_EW,
        EW: EW
    }
}
export const setBookingBike = (bookingBike) => {
    return {
        type: actionTypes.SET_BOOKING_BIKE,
        bookingBike: bookingBike
    }
}
export const setExchangeRequired = (exchangeRequired) => {
    return {
        type: actionTypes.SET_EXCHANGE_REQUIRED,
        exchangeRequired: exchangeRequired
    }
}
export const setPreOrderNo = (preOrderNo) => {
    console.log("preorderno actions = ",preOrderNo)
    return {
        type: actionTypes.SET_PRE_ORDER_NO,
        preOrderNo: preOrderNo
    }
}
export const setBookingPreSelected = (bookingPreSelected) => {
    return {
        type: actionTypes.SET_BOOKING_PRE_SELECTED,
        bookingPreSelected: bookingPreSelected
    }
}

export const setBookingCurrentStep = (currentStep) => {
    return {
        type: actionTypes.SET_BOOKING_CURRENT_STEP,
        currentStep: currentStep
    }
}

export const setBookingPinCode = (pinCode) => {
    return {
        type: actionTypes.SET_BOOKING_PINCODE,
        pinCode: pinCode
    };
};

export const setBookingDealerCode = (dealerCode) => {
    return {
        type: actionTypes.SET_BOOKING_DEALER_CODE,
        dealerCode: dealerCode
    };
};

export const setBookingSelectedDealerCode = (selectedDealerCode) => {
    return {
        type: actionTypes.SET_BOOKING_SELECTED_DEALER_CODE,
        selectedDealerCode: selectedDealerCode
    };
};

export const setCurrentActive = (currentActive) => {
    return {
        type: actionTypes.SET_CURRENT_ACTIVE,
        currentActive: currentActive
    }
}

export const setSelectedProduct = (product) => {
    return {
        type: actionTypes.SET_BOOKING_SELECTED_PRODUCT,
        product: product
    }
}
export const setSelectedProductVariant = (productVariant) => {
    return {
        type: actionTypes.SET_BOOKING_SELECTED_VARIANT,
        productVariant: productVariant
    }
}
export const setSelectedProductColor = (productColor) => {
    return {
        type: actionTypes.SET_BOOKING_SELECTED_COLOR,
        productColor: productColor
    }
}