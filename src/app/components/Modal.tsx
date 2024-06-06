import React, { useEffect } from "react";

export const Modal = (props: {
  buttonText: string;
  setIsOpen: any;
  isOpen: any;
  children?: React.ReactNode;
}) => {
  const { children, setIsOpen, isOpen } = props;

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  if (isOpen) {
    return (
      <div className="modal-backdrop">
        <div className="modal">
          <div className="modal-grid">
            <button className="close-button" onClick={handleModalToggle}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z"
                  fill="#4A4A6A"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};
export default Modal;
