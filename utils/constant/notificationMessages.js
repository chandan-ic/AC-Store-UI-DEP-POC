
import { useTranslation } from 'next-i18next';

export const dealerNotification = () => {
    const { t } = useTranslation(['error'])
   return  {dealerStart: {
    type: "warning",
    title: "Sending...",
    message: "Sending dealer data!",
  },
  dealerFailed: {
    type: "danger",
    title: "Error!",
    message: "Sending dealer data failed!",
  },
  dealerSuccess: {
    type: "success",
    title: "Success!",
    message: "Sent dealer data successfully!",
  },};
}

export const Notifications = {
  dealerStart: {
    type: "warning",
    title: "Sending...",
    message: "Sending dealer data!",
  },
  dealerFailed: {
    type: "danger",
    title: "Error!",
    message: "Sending dealer data failed!",
  },
  dealerSuccess: {
    type: "success",
    title: "Success!",
    message: "Sent dealer data successfully!",
  },

  masterDataFailed: {
    type: "danger",
    title: "Error!",
    message: "Fetching Master data failed!",
  },

  testDriveFormSubmitSuccess: {
    type: "success",
    title: "Success!",
    message: "Test Drive Request Form Submitted Successfully",
  },

  testDriveFormSubmitFailed: {
    type: "danger",
    title: "Error!",
    message: "Test Drive Request Form failed to Submit!",
  },
  testDriveSentOtpSuccess: {
    type: "success",
    title: "Success!",
    message: "OTP sent to your mobile number successfully!",
  },

  testDriveSentOtpFailed: {
    type: "danger",
    title: "Error!",
    message: "Failed to sent otp",
  },

  testDriveResentOtpSuccess: {
    type: "success",
    title: "Success!",
    message: "OTP resent to your mobile number successfully!",
  },

  testDriveResentOtpFailed: {
    type: "danger",
    title: "Error!",
    message: "Failed to resent otp",
  },

  searchSuccess: {
    type: "success",
    title: "Success!",
    message: "OTP resent to your mobile number successfully!",
  },

  searchFailed: {
    type: "danger",
    title: "Error!",
    message: "Failed to resent otp",
  },
  getVariantSuccess: {
    type: "success",
    title: "Success!",
    message: "Fetched data successfully!",
  },
  getVariantFailed: {
    type: "danger",
    title: "Error!",
    message: "Cannot fetch data !",
  },
  getMasterSuccess: {
    type: "success",
    title: "Success!",
    message: "Fetched data successfully!",
  },
  getMasterFailed: {
    type: "danger",
    title: "Error!",
    message: "Cannot fetch data !",
  },

  VariantSubmitFailed: {
    type: "danger",
    title: "Error!",
    message: "Sending variant data failed!",
  },
  VariantSubmitSuccess: {
    type: "success",
    title: "Success!",
    message: "Sent variant data successfully!",
  },

  VariantColorFailed: {
    type: "danger",
    title: "Error!",
    message: "Sending variant data failed!",
  },
  VariantColorSuccess: {
    type: "success",
    title: "Success!",
    message: "Sent variant data successfully!",
  },

  dealerStart: {
    type: "warning",
    title: "Sending...",
    message: "Sending dealer data!",
  },
  dealerFailed: {
    type: "danger",
    title: "Error!",
    message: "Sending dealer data failed!",
  },
  dealerSuccess: {
    type: "success",
    title: "Success!",
    message: "Sent dealer data successfully!",
  },

  masterDataFailed: {
    type: "danger",
    title: "Error!",
    message: "Fetching Master data failed!",
  },

  paymentSuccess: {
    type: "success",
    title: "Success!",
    message: "Paymentsuccessfull!",
  },
  paymentFailed: {
    type: "danger",
    title: "Error!",
    message: "Payment failed!",
  },
  SignUpStart: {
    type: "info",
    title: "Loading!",
    message: "Loading",
  },
  SignUpSuccess: {
    type: "success",
    title: "success!",
    message: "Successfully Created account",
  },
  SignUpFailed: {
    type: "danger",
    title: "Error",
    message: "Error!",
  },
  OtpSuccess: {
    type: "success",
    title: "Success!",
    message: "OTP sent to your phone number",
  },
  OtpFailed: {
    type: "danger",
    title: "Error",
    message: "Error",
  },
  RequestSuccess: {
    type: "success",
    title: "Success!",
    message: "Successfull",
  },
  RequestFailed: {
    type: "danger",
    title: "Error!",
    message: "Error",
  }
}
