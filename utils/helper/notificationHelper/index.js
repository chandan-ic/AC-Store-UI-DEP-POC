export const getToaster = ({ title, message, type, direction }) => {
  return {
    title: title,
    message: message,
    type: type ? type : "default", // 'default', 'success', 'info', 'warning'
    container: direction ? direction : "top-center", // where to position the notifications
    animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
    dismiss: {
      duration: 3000,
      onScreen: true,
      pauseOnHover: true,
    },
  };
};
