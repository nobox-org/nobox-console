"use client";
import React, { useEffect, useState } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";
import useTokenHandler from "@/lib/hooks/useTokenHandler";
import useInfoSkip from "@/lib/hooks/useInfoSkip";
import Modal from "@/app/components/Modal";
import { AreYouSure } from "@/app/components/modals/AreYouSure";
import { serverCalls } from "@/servercall/store";
import { serverCall } from "@/servercall/init";
import { storageConstants } from "@/lib/constants";

export default function HomePage() {
  const { token: tokenFromRequest } = useTokenHandler();
  const [token, setToken] = useState(tokenFromRequest);
  const { isSkipped } = useInfoSkip();

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleButtonClick = () => {
    if (token) {
      copyToClipboard(token);
    }
  };

  const handleResetToken = () => {
    serverCall({
      authorized: true,
      serverCallProps: {
        call: serverCalls.getAuthRefreshConnectionToken
      }
    }).then((response) => {
      const { success, dataReturned: { token } } = response;
      if (success) {
        localStorage.setItem(storageConstants.NOBOX_CLIENT_TOKEN, token);
        setToken(token);
      }
    });
  };

  useEffect(() => {
    setToken(tokenFromRequest);
  }, [tokenFromRequest]);

  return (
    <>
      <div className={`${!isSkipped && "mt-[32px]"} bg-white p-5 mt-10 rounded-md`}>
        <h6 className="font-[500] text-[#292D32]">Token</h6>
        <div className="flex gap-4 py-2">
          <div className="w-[358px] px-[16px] bg-[#FFF] rounded-lg py-[9.5px] text-[#838389] border border-gray-200 ">
            <p className="whitespace-nowrap text-[14px] text-ellipsis overflow-hidden">
              {token}
            </p>
          </div>
          <button
            onClick={handleButtonClick}
            className=" text-white text-[14px] font-[500] bg-blue-500 active:bg-blue-300 hover:bg-blue-700 py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Copy token
          </button>

          <button
            onClick={() => setOpenModal(true)}
            className=" text-white text-[14px] font-[500] bg-blue-500 active:bg-blue-300 hover:bg-blue-700 py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Reset Token
          </button>
        </div>
      </div >

      <Modal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        buttonText={"Copy Text"}
      >
        <AreYouSure
          message="Are you sure you want to reset the token?"
          warning=" Resetting this token will make all your applications unauthorized to access the nobox server until you add the new token"
          title="Reset Token"
          onCancel={() => setOpenModal(false)}
          closeModal={() => setOpenModal(false)}
          onSubmit={handleResetToken} />
      </Modal>
    </>
  );
}
