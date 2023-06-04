import Link from "next/link";
import React from "react";
import { RxDotFilled } from "react-icons/rx";

const UserGuide = () => {
  return (
    <div className="">
      <div className="p-[24px]">
        <h2 className="text-[#24242E] font-semibold tracking-[-0.01em]">
          User Guide
        </h2>
        <p className="text-[#515478] tracking-[-0.015em] text-[14px]">
          How to Use Nobox
        </p>
      </div>
      <div className="px-[24px] py-[16px] flex justify-between items-center border-[#E6E8F9] border-t-[1px] border-b-[1px] border-r-[0px] border-l-[0px]">
        <div className="flex h-[48px] w-[358px] pl-[17.25px] items-center space-x-2 bg-[#FAFAFA] rounded-[2px] border-[#E6E8F9] border-[1.2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
          >
            <path
              fill="#838389"
              d="M11 20.75c-5.38 0-9.75-4.37-9.75-9.75S5.62 1.25 11 1.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75Zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25ZM20.16 22.79c-.08 0-.16-.01-.23-.02-.47-.06-1.32-.38-1.8-1.81-.25-.75-.16-1.5.25-2.07.41-.57 1.1-.89 1.89-.89 1.02 0 1.82.39 2.18 1.08.36.69.26 1.57-.31 2.42-.71 1.07-1.48 1.29-1.98 1.29Zm-.6-2.3c.17.52.41.78.57.8.16.02.46-.17.77-.62.29-.43.31-.74.24-.88s-.35-.29-.87-.29c-.31 0-.54.1-.67.27-.12.17-.14.43-.04.72Z"
            />
          </svg>
          <input
            type="search"
            name=""
            className="bg-[#FAFAFA] border-none"
            placeholder="Search for something"
            id=""
          />
        </div>
        <div></div>
      </div>
      <div className="bg-[#F6F6F9] p-[24px]">
        <div className="bg-[#FFFFFF] p-[24px]">
          <div className="max-w-[815px] ">
            <h1 className="text-[#24242E] font-[700] tracking-[-0.01em] text-[20px]">
              Step 1: Register An Account On Nobox Cloud
            </h1>
            <div className="mt-[16px] space-y-1 text-[#24242E] text-[14px]">
              <div className="flex items-center">
                <RxDotFilled size={18} />{" "}
                <span>
                  Go to{" "}
                  <Link
                    className="underline underline-offset-4 text-[#556DFF]"
                    href="https://nobox.cloud"
                  >
                    https://nobox.cloud
                  </Link>
                </span>
              </div>
              <div className="flex items-center">
                <RxDotFilled size={18} />{" "}
                <p className="">Click on Login With Github</p>
              </div>{" "}
              <div className="flex items-center">
                <RxDotFilled size={18} />{" "}
                <p>Copy the Eternal Token on the dashboard</p>
              </div>
            </div>
            <h1 className="text-[#24242E] mt-[32px] font-[700] tracking-[-0.01em] text-[20px]">
              Step 1: Register An Account On Nobox Cloud
            </h1>
            <div className="flex mt-[16px] items-center">
              <RxDotFilled size={18} />{" "}
              <p className="text-[#24242E] text-[14px] tracking-[-0.01em]">
                Create a{" "}
                <span className="bg-[#F6F6F9] border px-1 h-[18px] border-[#B0B2C9] rounded-[2px]">
                  config.ts
                </span>{" "}
                file in your project as seen below
              </p>
            </div>
            <div className="mt-[16px]">
              <div className="px-[24px] w-[772px] py-[8px] bg-[#F6F6F9] text-[14px]">
                <code>
                  <span className="text-[#A71D5D]">import</span>{" "}
                  <span>
                    {"{ Config, getFunctions, getSchemaCreator } from"}
                  </span>{" "}
                  <span className="text-[#e97d43]"> "nobox-client";</span>
                </code>
                <code>
                  <div className="mt-6"></div>
                  <span className="text-[#A71D5D]">export const config</span>
                  {": Config = {"}
                  <br />
                  &nbsp;&nbsp;<span>endpoint</span>:{" "}
                  <span className="text-[#e97d43]">"https://nobox.cloud"</span>,
                  <br />
                  &nbsp;&nbsp;<span>project</span>:{" "}
                  <span className="text-[#e97d43]">"[project]"</span>,
                  <br />
                  &nbsp;&nbsp;<span>token</span>:{" "}
                  <span className="text-[#e97d43]">"[eternalToken]"</span>,
                  <br />
                  {"};"}
                </code>
                <div></div>
                <code>
                  <span className="text-[#A71D5D]">export const</span>{" "}
                  <span>createSchema</span> = <span>getSchemaCreator</span>(
                  <span className="text-[#A71D5D]">config</span>)
                </code>{" "}
                <br />
                <code>
                  <span className="text-[#A71D5D]">export const</span>{" "}
                  <span>Nobox</span> = <span>getFunctions</span>(
                  <span className="text-[#A71D5D]">config</span>)
                </code>
              </div>
            </div>
            <p className="text-[#24242E] mt-[24px] text-[14px] tracking-[-0.01em]">
              <span className="bg-[#F6F6F9] border px-1 h-[18px] border-[#B0B2C9] rounded-[2px]">
                [project]{" "}
              </span>{" "}
              : the chosen name for your project
            </p>
            <p className="text-[#24242E] text-[14px] tracking-[-0.01em] mt-[16px]">
              <span className="bg-[#F6F6F9] border px-1 h-[18px] border-[#B0B2C9] rounded-[2px]">
                [eternalToken]
              </span>
              : the eternal token copied from nobox cloud
            </p>
            <h1 className="text-[#24242E] mt-[32px] font-[700] tracking-[-0.01em] text-[20px]">
              Step 1: Register An Account On Nobox Cloud
            </h1>
            <div className="flex mt-[16px] items-center">
              <RxDotFilled size={18} />{" "}
              <p className="text-[#24242E] text-[14px] tracking-[-0.01em]">
                Create a folder called record-structures ( could be any other
                name){" "}
              </p>
            </div>
            <div className="flex items-center">
              <RxDotFilled size={18} />{" "}
              <p className="text-[#24242E] text-[14px] tracking-[-0.01em]">
                Create a file e.g. user.ts
              </p>
            </div>
            <div className="mt-[16px]">
              <div className="px-[24px] w-[772px] py-[8px] bg-[#F6F6F9] text-[14px]">
                <code>
                  <span>// record-structures/user.ts</span>
                  <br />
                  <span>import</span> <span>Space </span> <span>from</span>{" "}
                  <span>"nobox-client"</span>
                  <br />
                  <span>import</span> <span>createSchema </span>{" "}
                  <span>from</span> <span>"./config"</span>
                  <br />
                  <br />
                  <span>interface</span> <span>User</span> {"{"}
                  <br />
                  <span>&nbsp;&nbsp;email</span>
                  <span>{": string;"}</span>
                  <br />
                  <span>&nbsp;&nbsp;password</span>
                  <span>{": string;"}</span>
                  <br />
                  <span>&nbsp;&nbsp;firstName</span>
                  <span>{": string;"}</span>
                  <br />
                  <span>&nbsp;&nbsp;otp</span>
                  <span>{"?: string;"}</span>
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <span>export</span> <span>const</span>{" "}
                  <span>UserStructure</span>
                  <span>{": Space<User> = {"}</span>
                  <br />
                  <span>&nbsp;&nbsp;{'space: "User",'}</span>
                  <br />
                  <span>
                    &nbsp;&nbsp;{'description: "A Record Space for Users",'}
                  </span>
                  <br />
                  <span>&nbsp;&nbsp;{"structure: {"}</span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"email: {"}</span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {'description: "User\'s Email",'}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"unique: true,"}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'type: "TEXT",'}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"required: true"}
                  </span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"password: {"}</span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {'description: "User\'s Password",'}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"required: true,"}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'type: "TEXT",'}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"hashed: true"}
                  </span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"firstName: {"}</span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {'description: "User\'s First Name",'}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"required: true,"}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'type: "TEXT",'}
                  </span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"otp: {"}</span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                    {'description: "User\'s Street Number",'}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"required: false,"}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'type: "TEXT",'}
                  </span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</span>
                  <br />
                  <span>&nbsp;&nbsp;{"}"}</span>
                  <br />
                  <span>{"};"}</span>
                  <br />
                  <br />
                  <span>export</span> <span>const</span> <span>UserModel</span>{" "}
                  <span>=</span> <span>createSchema</span>
                  <span>{"<UserStructureParams>"}</span>
                  <span>{"(UserStructure);"}</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
