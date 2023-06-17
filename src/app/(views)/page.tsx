"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/custom-toast.css'
import { useSearchParams } from "next/navigation";
import { OnboardingInfo } from "../components/OnboardingInfo";
import { useRouter } from "next/navigation";


export default function Dashboard() {
  const [skip, setSkip] = useState(true);
  const [token, setToken] = useState("");
  const router = useRouter()

  const searchParams = useSearchParams();
  const skipState = localStorage.getItem("skipState");

  useEffect(() => {
    if (!token) {
      const tokenInUrl = searchParams.get("token");

      if (tokenInUrl) {
        localStorage.setItem("TOKEN", tokenInUrl);
        setToken(tokenInUrl);
      }

      if (!tokenInUrl) {
        router.push("/login")

      }
    }

    const skipState = localStorage.getItem("skipState");
    if (skipState) {
      setSkip(JSON.parse(skipState));
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem("skipState", JSON.stringify(skip));
  }, [skip]);

  const handleSkip = () => {
    setSkip(false);
  };

  const handleButtonClick = () => {
    if (token) {
      copyToClipboard(token);
    }
  };

  return (
    <main className="text-[#292D32] bg-[#ECEDF3]  h-full p-[24px]">
      <ToastContainer toastClassName="custom-toast" />
      {!skipState && <OnboardingInfo handleSkip={handleSkip} token={token} />}
      <div className={`${skip ? "hidden" : "block"}`}>
        <p className="text-[#838389] text-[16px] h-[24px]">Hi Akintunde,</p>
        <p className="text-[#24242E] h-[36px] text-[16px]">
          Remember to eat before you code!
        </p>
      </div>
      <div className={`${skip ? "mt-[60px]" : "mt-[32px]"}`}>
        <h6 className="text-[20px] font-[700] text-[#292D32]">
          Your forever token
        </h6>
        <div className="flex gap-4 py-2">
          <div className="bg-white w-[358px] px-[16px] py-[9.5px] text-[#838389]">
            <p className="whitespace-nowrap text-[14px] text-ellipsis overflow-hidden">
              {token}
            </p>
          </div>
          <button
            onClick={handleButtonClick}
            className="bg-secondary text-white px-[24px] py-[12px] text-[14px] font-[500]"
          >
            Copy token
          </button>
        </div>
        <h6 className="text-[20px] font-[700] text-[#292D32] mt-[24px]">
          Get started
        </h6>
        <div className="flex flex-wrap gap-[24px] mt-[8px] mb-[136px]">
          <div className="w-full md:w-[224px] h-[193px] bg-white rounded-[2px] p-[16px]">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="none"
              >
                <path
                  fill="#EBF7FF"
                  d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
                />
                <path
                  fill="#556DFF"
                  d="M19.233 22.113a2.68 2.68 0 0 1-.046-.488c0-.067 0-.128.008-.188h-6.39c.008.06.008.12.008.188a2.318 2.318 0 0 1-.188.938h6.75a1.851 1.851 0 0 1-.142-.45Zm-9.338-9.345a2.318 2.318 0 0 1-.457-.143v6.75c.142-.067.292-.113.45-.142a2.68 2.68 0 0 1 .675-.038v-6.39c-.06.008-.12.008-.188.008a2.54 2.54 0 0 1-.48-.046Zm12.218 0a2.68 2.68 0 0 1-.488.044c-.067 0-.128 0-.188-.007v6.39c.06-.008.12-.008.188-.008a2.318 2.318 0 0 1 .938.188v-6.75a1.851 1.851 0 0 1-.45.143Zm-2.738-3.33h-6.75c.068.142.113.292.143.45.03.165.044.322.044.487 0 .068 0 .127-.007.188h6.39c-.008-.06-.008-.12-.008-.188a2.318 2.318 0 0 1 .188-.938Z"
                  opacity={0.4}
                />
                <path
                  fill="#556DFF"
                  d="M12.813 10.375c0 .068 0 .127-.008.188a2.279 2.279 0 0 1-.112.554 1.838 1.838 0 0 1-.21.473 2.32 2.32 0 0 1-.893.893c-.045.03-.09.052-.135.074a1.838 1.838 0 0 1-.338.136c-.18.06-.36.097-.555.112-.06.008-.12.008-.187.008a2.318 2.318 0 0 1-.938-.188 2.452 2.452 0 0 1-1.5-2.25 2.442 2.442 0 0 1 2.438-2.438c.998 0 1.875.608 2.25 1.5.068.143.113.293.143.45.03.165.044.323.044.488ZM24.063 10.375c0 .998-.608 1.875-1.5 2.25a1.851 1.851 0 0 1-.45.143 2.68 2.68 0 0 1-.488.044c-.067 0-.128 0-.188-.007a2.14 2.14 0 0 1-.577-.12.94.94 0 0 1-.188-.068c-.044-.015-.082-.037-.127-.06a1.213 1.213 0 0 1-.135-.075 2.32 2.32 0 0 1-.893-.892c-.03-.045-.052-.09-.075-.135-.022-.045-.044-.082-.06-.127a.94.94 0 0 1-.067-.188 2.14 2.14 0 0 1-.12-.578c-.008-.06-.008-.12-.008-.187a2.318 2.318 0 0 1 .188-.938 2.452 2.452 0 0 1 2.25-1.5 2.442 2.442 0 0 1 2.438 2.438ZM12.813 21.625a2.318 2.318 0 0 1-.188.938 2.452 2.452 0 0 1-2.25 1.5 2.442 2.442 0 0 1-2.438-2.438c0-.997.608-1.875 1.5-2.25.143-.067.293-.113.45-.142a2.68 2.68 0 0 1 .675-.038c.188.015.368.052.54.105a.94.94 0 0 1 .188.067c.053.023.105.046.165.075.045.023.09.046.135.075.375.21.683.518.893.893.03.045.052.09.074.135.03.06.053.112.075.165a.94.94 0 0 1 .068.188 2.55 2.55 0 0 1 .113.727ZM24.063 21.625a2.442 2.442 0 0 1-2.438 2.438 2.444 2.444 0 0 1-2.25-1.5 1.851 1.851 0 0 1-.142-.45 2.68 2.68 0 0 1-.046-.488c0-.067 0-.128.008-.188 0-.022 0-.045.008-.067.007-.082.022-.158.037-.24.038-.203.105-.397.203-.585.022-.045.044-.09.074-.135a2.32 2.32 0 0 1 .893-.893c.045-.03.09-.052.135-.075.188-.097.382-.165.585-.202.082-.015.158-.03.24-.037.022-.008.045-.008.067-.008.06-.008.12-.008.188-.008a2.318 2.318 0 0 1 .938.188c.892.375 1.5 1.26 1.5 2.25Z"
                />
              </svg>
              <div className="flex flex-col gap-[8px] mt-[8px]">
                <h6 className="text-[#292D32] text-[18px] font-[600]">
                  Create Project
                </h6>
                <p className="text-[#515478] text-[14px]">
                  You become a owner when you kickstart a project.
                </p>
              </div>
              <div className="flex justify-end pt-[16px]">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[224px] h-[193px] bg-white rounded-[2px] p-[16px]">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="none"
              >
                <path
                  fill="#EBF7FF"
                  d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
                />
                <path
                  fill="#556DFF"
                  d="M22.75 12.25v7.5c0 2.25-1.125 3.75-3.75 3.75h-6c-2.625 0-3.75-1.5-3.75-3.75v-7.5C9.25 10 10.375 8.5 13 8.5h6c2.625 0 3.75 1.5 3.75 3.75Z"
                  opacity={0.4}
                />
                <path
                  fill="#556DFF"
                  d="M20.875 13.938h-1.5a2.061 2.061 0 0 1-2.063-2.063v-1.5c0-.307.255-.563.563-.563.308 0 .563.256.563.563v1.5c0 .518.42.938.937.938h1.5c.308 0 .563.255.563.562a.567.567 0 0 1-.563.563ZM14.5 20.312a.556.556 0 0 1-.397-.165l-1.5-1.5a.566.566 0 0 1 0-.795l1.5-1.5a.566.566 0 0 1 .795 0 .566.566 0 0 1 0 .795l-1.103 1.103 1.103 1.102a.566.566 0 0 1 0 .795.556.556 0 0 1-.398.165ZM17.5 20.312a.556.556 0 0 1-.397-.165.566.566 0 0 1 0-.795l1.102-1.102-1.102-1.103a.566.566 0 0 1 0-.795.566.566 0 0 1 .795 0l1.5 1.5a.566.566 0 0 1 0 .795l-1.5 1.5a.556.556 0 0 1-.398.165Z"
                />
              </svg>
              <div className="flex flex-col gap-[8px] mt-[8px]">
                <h6 className="text-[#292D32] text-[18px] font-[600]">
                  Read the docs{" "}
                </h6>
                <p className="text-[#515478] text-[14px]">
                  Learn how to install NoBox instantly.
                </p>
              </div>
              <div className="flex justify-end pt-[16px]">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
