import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successNote = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  toast.success.autoClose === 0 && window.location.reload();
};
