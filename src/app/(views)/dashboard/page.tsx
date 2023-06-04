import { BsBoundingBoxCircles, BsFileEarmarkCodeFill } from "react-icons/bs";
import { FaArrowRight, FaCheck } from "react-icons/fa";

export default function Dashboard() {
  return (
    <main className="text-[#292D32] px-[24px]">
      <div className="md:flex">
        <div className="bg-[#FAFAFA] md:w-4/12 overflow-y-hidden">
          <div className=" p-4 ">
            <h4 className="text-lg font-medium text">Welcome to NoBox </h4>
            <p className="text-[#496080] text-sm font-light">
              Set up your IDE with your Forever token in 3 easy steps...
            </p>
          </div>
          <div className="welcome-bg w-full opacity-20"></div>
        </div>
        <div className="bg-white p-4 md:w-8/12">
          <ul className="flex flex-col divide-y divide-[#DFE5EC]">
            <li className="pb-5">
              <div className="flex justify-between items-center gap-6">
                <div className="flex gap-3 items-center">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#D4D4D4] text-white">
                    <FaCheck className="text-xs font-thin" />
                  </span>
                  <div className="">
                    <h6 className="font-medium">Install Nobox</h6>
                    <p className="text-[#515478] text-sm font-light">
                      Use the code to install NoBox on your IDE
                    </p>
                  </div>
                </div>
                <button className="border border-secondary text-secondary text-sm px-4 py-2">
                  install npm install nobox-client
                </button>
              </div>
            </li>
            <li className="py-5">
              <div className="flex justify-between items-center gap-6">
                <div className="flex gap-3 items-center">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#D4D4D4] text-white">
                    <FaCheck className="text-xs font-thin" />
                  </span>
                  <div className="">
                    <h6 className="font-medium">Read the docs</h6>
                    <p className="text-[#515478] text-sm font-light">
                      Learn how to install NoBox instantly.
                    </p>
                  </div>
                </div>
                <button className="border border-secondary text-secondary text-sm px-4 py-2">
                  Read the docs
                </button>
              </div>
            </li>
            <li className="py-5">
              <div className="flex justify-between items-center gap-6">
                <div className="flex gap-3 items-center">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#D4D4D4] text-white">
                    <FaCheck className="text-xs font-thin" />
                  </span>
                  <div className="">
                    <h6 className="font-medium">Copy Forever Token</h6>
                    <p className="text-[#515478] text-sm font-light">
                      You need this code to use NoBox
                    </p>
                  </div>
                </div>
                <button className="border border-secondary text-secondary text-sm px-4 py-2">
                  Copy token
                </button>
              </div>
            </li>
          </ul>
          <div className="flex justify-end text-sm font-medium">
            <button className=" text-secondary">Skip for later</button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h6 className="text-md font-medium">Your forever token</h6>
        <div className="flex gap-4 py-2">
          <div className="bg-white w-6/12 pl-2 py-2 text-[#838389]">
            <p className="whitespace-nowrap text-ellipsis overflow-hidden w-[90%]">
              afufsfivbekjnsdiuvhhkjndaiajcnvaowfjkclzkjndlvjawneufhdskvjzlcxnlvklwaenfmclaiosdjofftj0gvjkakdmgfsdcv//fb,vb,s.dcpef;v,vnskieufhanjznhwueherh3rdobihdussf409ug
              oi34w‘s/d;gk0g3wuergijt4
            </p>
          </div>
          <button className="bg-secondary text-white px-4 py-2 text-md">
            Copy token
          </button>
        </div>
        <h6 className="text-md font-medium mt-5">Get started</h6>
        <div className="flex flex-wrap gap-6 my-4">
          <div className="w-full md:w-56 bg-white rounded-sm p-4">
            <span className="w-10 h-10 rounded-full my-2 text-primary flex justify-center items-center bg-[#EBF7FF]">
              <BsBoundingBoxCircles className="text-lg font-medium" />
            </span>
            <h6 className="text-base font-medium py-1">Create Project</h6>
            <p className="text-[#515478] text-sm font-light">
              You become a owner when you kickstart a project.
            </p>
            <div className="flex justify-end py-2">
              <FaArrowRight />
            </div>
          </div>
          <div className="w-full md:w-56 bg-white rounded-sm p-4">
            <span className="w-10 h-10 rounded-full my-2 text-primary flex justify-center items-center bg-[#EBF7FF]">
              <BsFileEarmarkCodeFill className="text-lg font-medium" />
            </span>
            <h6 className="text-base font-medium py-1">Read the docs</h6>
            <p className="text-[#515478] text-sm font-light">
              Learn how to install NoBox instantly.
            </p>
            <div className="flex justify-end py-2">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
