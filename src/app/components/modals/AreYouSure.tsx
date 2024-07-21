import { button, transparentButton } from "@/lib/tailwind-classes";

export const AreYouSure = ({ message, title, onSubmit, onCancel, closeModal, warning }: {
    message: string
    title: string
    warning?: string
    onSubmit: () => void
    onCancel: () => void
    closeModal: () => void
}) => {

    const submitAndExit = () => {
        onSubmit();
        closeModal();
    }

    return (
        <>
            <div className="py-[20px] px-[40px] max-w-[600px] w-full">
                <div style={{ textAlign: "center" }}>
                    <h3> {title} </h3>
                </div>
                <div className='flex my-7 flex-col'>
                    <span className="text-[16px] text-center">
                        {message}
                    </span>

                    <div className="flex justify-center my-4">
                        <button
                            onClick={submitAndExit}
                            style={{ marginLeft: 10 }}
                            className={transparentButton()}

                        >Yes
                        </button>

                        <button
                            onClick={onCancel}
                            style={{ marginLeft: 10 }}
                            className={button()}
                        >
                            No
                        </button>
                    </div>
                    <div className="text-red-500 text-[12px]">
                        {warning}
                    </div>
                </div>
            </div>
        </>

    );
}
