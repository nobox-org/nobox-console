import toast from 'react-hot-toast';


export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success("Token Copied 😇");
    })
    .catch((err) => {
      toast.error(`Could not copy text: ${err}`);
    });
};
