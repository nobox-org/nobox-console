import React, { useEffect } from 'react'

export const Modal = (props: {
    buttonText: string;
    content: any;
    setIsOpen: any;
    isOpen: any;
}) => {
    const { content, setIsOpen, isOpen } = props

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
                        {content}
                    </div>
                </div>
            </div>
        )
    }

    return (<></>)
}
export default Modal;