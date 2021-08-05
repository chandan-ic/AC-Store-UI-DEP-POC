export const apiErrorMsg = {
  dealer: "Sending dealer data failed.",
  master: "Sending master data failed",
  testDrive: "Sending Test Drive Form data failed",
  trSentOtp: "Failed to sent OTP",
  trResentOtp: "Failed to resent OTP",
  search: "Failed to search",
  submitVariantError: "Something went wrong!!",
  sendVariantColorError: "Something went wrong!!",
  dealer: "Sending dealer data failed.",
  master: "Sending master data failed",
  getVariant: "Something went wrong!!",
  getMaster: "Something went wrong!!",
  getImageError: "Something went wrong!!",
  bookingPaymentError: "Someting went Wrong!!",
  registerError: "Someting went Wrong",
  search: "Failed to search",
  OtpError: "Failed",
  ResetPassword: "Something went wrong!!",
  myRequest: "Failed to fetch data"
};

import { useTranslation } from 'next-i18next';

export const dealerNotification = () => {
    const { t } = useTranslation(['error'])
    return  {
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
      }
    };
}

