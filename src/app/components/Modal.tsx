import React, { useEffect } from 'react'

export const Modal = (props: {
    buttonText: string;
    setIsOpen: any;
    isOpen: any;
    children?: React.ReactNode
}) => {
    const { children, setIsOpen, isOpen } = props

    const handleModalToggle = () => {
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.keyCode === 27) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setIsOpen]);

    if (isOpen) {
        return (
            <div className='modal-backdrop'>
                <div className="modal">
                    <div className='modal-grid'>
                        <button className="close-button" onClick={handleModalToggle}>
                            X
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        )
    }

    return (<></>)
}
export default Modal;