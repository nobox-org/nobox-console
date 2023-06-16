import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../app/styles/custom-toast.css'

export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
        toast.info("Token to clipboard", {
          icon: "🚀",
          className: "toast-message",
        });
    })
    .catch((err) => {
      toast.error(`Could not copy text: ${err}`);
    });
};
