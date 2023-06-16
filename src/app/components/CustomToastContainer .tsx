import { ToastContainer } from "react-toastify";
import "../styles/custom-toast.css";

const CustomToastContainer = () => (
  <ToastContainer
    toastClassName="custom-toast"
    bodyClassName="custom-toast-body"
    progressClassName="custom-toast-progress"
  />
);

export default CustomToastContainer;
