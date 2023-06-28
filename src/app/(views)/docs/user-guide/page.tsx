import DocsText from "@/app/components/DocsText";
import DocsTextNoFlex from "@/app/components/DocsTextNoFlex";
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
            className="bg-[#FAFAFA] border-none focus:ring-0"
            placeholder="Search for something"
            id=""
          />
        </div>
        <div></div>
      </div>
      <div className="bg-[#F6F6F9] p-[24px]">
        <div className="bg-[#FFFFFF] p-[24px] flex ">
          <div className="max-w-[815px] ">
            <h1 className="text-[#5A5A5A] font-[700] tracking-[-0.01em] text-[20px]">
              Register An Account On Nobox Cloud
            </h1>
            <div className="mt-[16px] space-y-1 text-[#24242E] text-[14px]">
              <div className="flex items-center">
                <RxDotFilled size={18} />{" "}
                <span>
                  <span className="text-[#7e868c]">Go to </span>{ }
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
                <p className="text-[#7e868c]">Click on Login With Github</p>
              </div>{" "}
              <div className="flex items-center">
                <RxDotFilled size={18} />{" "}
                <p className="text-[#7e868c]">Copy the Eternal Token on the dashboard</p>
              </div>
            </div>
            <h1 className="text-[#24242E] mt-[32px] font-[700] tracking-[-0.01em] text-[20px]">
              Step 1: Register An Account On Nobox Cloud
            </h1>
            <div className="flex mt-[16px] items-center">
              {/* <RxDotFilled size={18} />{" "} */}
              <p className="text-[#24242E] text-[14px] tracking-[-0.01em]">
                Create a{" "}
                <span className="bg-[#F6F6F9] text-[14px] px-1 py-0.5 h-[18px] rounded-[5px]">
                  config.ts
                </span>{" "}
                file in your project as seen below
              </p>
            </div>
            <div className="mt-[16px] px-[24px]">
              <div className="px-[24px] w-[772px] py-[8px] rounded-[2px] bg-[#F6F6F9] text-[14px]">
                <code>
                  <span className="text-[#A71D5D]">import</span>{" "}
                  <span>
                    {"{ Config, getFunctions, getSchemaCreator } from"}
                  </span>{" "}
                  <span className="text-[#e97d43]"> &quot;nobox-client&quot;;</span>
                </code>
                <code>
                  <div className="mt-6"></div>
                  <span className="text-[#A71D5D]">export const config</span>
                  {": Config = {"}
                  <br />
                  &nbsp;&nbsp;<span>endpoint</span>:{" "}
                  <span className="text-[#e97d43]">&quot;https://nobox.cloud&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<span>project</span>:{" "}
                  <span className="text-[#e97d43]">&quot;[project]&quot;</span>,
                  <br />
                  &nbsp;&nbsp;<span>token</span>:{" "}
                  <span className="text-[#e97d43]">&quot;[eternalToken]&quot;</span>,
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
            <div className="mt-[16px] px-[24px]">
              <div className="px-[24px] w-[772px]  py-[8px] bg-[#F6F6F9] text-[14px]">
                <code className="text-[14px] tracking-[-0.01em]">
                  <span className="text-[#A71D5D]">
                    &#47;&#47; record-structures/user.ts
                  </span>
                  <br />
                  <span className="text-[#A71D5D]">
                    import Space from &quot;nobox-client&quot;
                  </span>
                  <br />
                  <span className="text-[#A71D5D]">
                    import createSchema from &quot;./config&quot;
                  </span>
                  <br />
                  <br />
                  <span className="text-[#A71D5D]">interface User {"{"} </span>
                  <br />
                  <span className="text-[#A71D5D]">
                    &nbsp;&nbsp;email{": string;"}
                  </span>
                  <br />
                  <span className="text-[#A71D5D]">
                    &nbsp;&nbsp;password{": string;"}
                  </span>
                  <br />
                  <span className="text-[#A71D5D]">
                    &nbsp;&nbsp;firstName{": string;"}
                  </span>
                  <br />
                  <span className="text-[#A71D5D]">
                    &nbsp;&nbsp;otp{"?: string;"}
                  </span>
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <span className="text-[#A71D5D]">
                    export const UserStructure{": Space<User> = {"}
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;<span className="text-[#0086B3]">space:</span>
                    <span className="text-[#DF5000]"> {'"User",'}</span>
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;
                    <span className="text-[#0086B3]">description:</span>
                    <span className="text-[#DF5000]">
                      {" "}
                      {'"A Record Space for Users",'}
                    </span>
                  </span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;structure:{" "}
                  </span>
                  <span>{"{"}</span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;email:{" "}
                  </span>
                  <span>{"{"}</span> <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"User\'s Email",'}</span>{" "}
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unique:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"true",'}</span> <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"TEXT",'}</span> <br />{" "}
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"true"'}</span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;password:{" "}
                  </span>
                  <span>{"{"}</span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description:{" "}
                  </span>
                  <span className="text-[#DF5000]">
                    {'"User\'s Password",'}
                  </span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"true",'}</span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"TEXT",'}</span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hashed:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"true"'}</span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;firstName:{" "}
                  </span>
                  <span>{"{"}</span> <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description:{" "}
                  </span>
                  <span className="text-[#DF5000]">
                    {'"User\'s First Name",'}
                  </span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"true",'}</span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"TEXT",'}</span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;otp:{" "}
                  </span>
                  <span>{"{"}</span> <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description:{" "}
                  </span>
                  <span className="text-[#DF5000]">
                    {'"User\'s Street Number",'}
                  </span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"true",'}</span>
                  <br />
                  <span className="text-[#0086B3]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type:{" "}
                  </span>
                  <span className="text-[#DF5000]">{'"TEXT",'}</span>
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
            <div className="mt-[32px]"></div>
            <DocsText
              title="createSchema"
              text=": this was imported from the Config File we previously created"
            />
            <DocsText
              title="User"
              text=": this interface file helps to apply typings to the record
                structure and its usage"
            />
            <DocsText
              title="UserStructure"
              text=" : this object will define how Users will be stored and retrieved
                in Nobox"
            />
            <div className="flex mt-[16px]">
              <div>
                <RxDotFilled size={18} />{" "}
              </div>
              <p className="text-[#24242E] text-[14px] tracking-[-0.01em]  ">
                <span className=" bg-[#F6F6F9] border px-1 h-[18px] border-[#B0B2C9] rounded-[2px]">
                  {'Space: "User"'}
                </span>
                <span>
                  {" "}
                  refers to the name of the space or record ( this has to be
                  unique).{" "}
                  <span className="font-[600]">
                    {" "}
                    Two RecordSpaces can’t have the same name. It can lead to
                    unpredictable behaviour.
                  </span>
                </span>
              </p>
            </div>
            <DocsText
              title='description: "A Record Space for Users"'
              text=" : refers to the description of the Space or record"
            />
            <DocsTextNoFlex
              title="Structure"
              text="contains the structure of the Space itself. Structure contains keys that represents the fields allowed for the Space. In this case, this includes email, password, firstName and otp. Each of these fields is allowed to have an object that contains rules that determine how these fields are meant to behave. This is explained below:"
            />
            <div className="px-[16px] pt-0 pb-[16px]">
              <DocsTextNoFlex
                title="Description [string]: (optional)"
                text="This is the description of the field itself. This defaults to empty when not provided. (defaults to empty string)"
              />
              <DocsTextNoFlex
                title="required [boolean] (optional)"
                text=": When true, it means the field must always be provided when inserting records, when false , it becomes optional to provide it when inserting record. (defaults to false)
When required is false, It becomes important to make this field optional in your typescript interface to make the typings corresponding to the field details."
              />
              <DocsTextNoFlex
                title='type ["TEXT" | "NUMBER"] (required)'
                text='This determines the type of the field. for instance, an age field will most likely be of type "NUMBER" and a firstName will be of type "TEXT"'
              />
              <DocsTextNoFlex
                title="hashed [boolean] (optional)"
                text="This determines how the field will be stored and retrieved. When hashed: true, the field will be stored as an hash, it will also not be returned in response result. Only hash fields when they are necessary, as having many hashed fields can significantly slow your requests to nobox."
              />
              <DocsTextNoFlex
                title="unique [boolean] (optional)"
                text=": This determines if the content of the field can be repeated in more than one document. For instance, If unique: true for a username field , it means only one instance of a username can be allowed. This means when a user’s details is submitted with the username Sandrava, nobox will throw an error when such username is used in a subsequent request"
              />
              <DocsTextNoFlex
                title="defaultValue [boolean] (optional)"
                text=": This determines if a default value is set when the field property is not sent. For instance, if a country field is has defaultValue: United Kingdom, the country field will always default to United Kingdom when country is not set."
              />
            </div>
            <h1 className="text-[#24242E] mt-[32px] font-[700] tracking-[-0.01em] text-[20px]">
              Step 4: Finally, you can now Insert/Find/Delete/Update your first
              Record{" "}
            </h1>
            <p className="text-[#24242E] mt-[16px] text-[14px] tracking-[-0.01em]">
              To perform the mentioned operations,
            </p>
            <div className="flex mt-[16px] items-center">
              <RxDotFilled size={18} />{" "}
              <p className="text-[#24242E] text-[14px] tracking-[-0.01em]">
                You call the model of the recordStructure like we have in the
                previous step on{" "}
                <span className="bg-[#F6F6F9] border px-1 h-[18px] border-[#B0B2C9] rounded-[2px]">
                  {" "}
                  /record-structures/user.ts
                </span>
              </p>
            </div>{" "}
            <div className="flex mt-[16px] items-center">
              <RxDotFilled size={18} />{" "}
              <p className="text-[#24242E] text-[14px] tracking-[-0.01em]">
                Then call an insertOne/findOne/find/updateOneById/find on the
                model depending on your use case.
              </p>
            </div>
            <div className="mt-[16px] px-[24px]">
              <div className="px-[24px] w-[772px] py-[8px] rounded-[2px] bg-[#F6F6F9] text-[14px]">
                <code>
                  <span>
                    <span className="text-[#A71D5D]">import</span>{" "}
                    <span className="text-[#795DA3]">UserModel</span>{" "}
                    <span className="text-[#A71D5D]">from</span>{" "}
                    <span className="text-[#DF5000]">
                      &quot;../record-structures/user.ts&quot;;
                    </span>
                  </span>
                  <br />
                  <br />
                  <span>const data = {"{"}</span>
                  <br />
                  <span>
                    &nbsp;&nbsp;email:{" "}
                    <span className="text-[#DF5000]">&quot;test@gmail.com&quot;</span> ,
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;firstName:{" "}
                    <span className="text-[#DF5000]">&quot;akin&quot;</span> ,
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;password:{" "}
                    <span className="text-[#DF5000]">&quot;123456*&quot;</span>,
                  </span>
                  <br />
                  <span>
                    &nbsp;&nbsp;otp:{" "}
                    <span className="text-[#0086B3]">3456</span>{" "}
                  </span>
                  <br />
                  <span>{"}"};</span>
                  <br />
                  <br />
                  <span className="text-[#969896]">&#47;&#47; Insert</span>
                  <br />
                  <span>
                    const insertedData = await UserModel.insertOne(data);
                  </span>
                  <br />
                  <span>{"console.log({ insertedData })"};</span>
                  <br />
                  <br />
                  <span className="text-[#969896]">&#47;&#47; FindOne</span>
                  <br />
                  <span className="text-[#969896]">
                    &#47;&#47; The below operation will return the inserted data
                  </span>
                  <br />
                  <span>
                    const foundData = await{" "}
                    {"UserModel.findOne({ id: insertedData.id })"};
                  </span>
                  <br />
                  <span>{" console.log({ foundData })"};</span>
                  <br />
                  <br />
                  <span className="text-[#969896]"> &#47;&#47; UpdateOneById</span>
                  <br />
                  <span className="text-[#969896]">
                    &#47;&#47; The below operation allows you to update a previously
                    inserted record with its id
                  </span>
                  <br />
                  <span>
                    const updatedData = await{" "}
                    {"UserModel.updateOneById(id, { firstName: "}
                    <span className="text-[#DF5000]"> &quot;akin2&quot; </span>
                    {"});"}
                  </span>
                  <br />
                  <span>{"console.log({ updatedData });"}</span>
                  <br />
                  <br />
                  <span className="text-[#969896]"> &#47;&#47; Find</span>
                  <br />
                  <span className="text-[#969896]">
                    &#47;&#47; This will return all data within that space with `email:
                    test@gmail.com`
                  </span>
                  <br />
                  <span>
                    const allData = await {"UserModel.find({ email:"}
                    <span className="text-[#DF5000]">
                      {" "}
                      &quot;test@gmail.com&quot;
                    </span>{" "}
                    {"});"}
                  </span>
                  <br />
                  <span>console.log(allData);</span>
                </code>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-[700] mb-[5px] text-[#24242E]  tracking-[-0.01em]">
              Content
            </h3>
            <div className="flex flex-col space-y-2">
              {" "}
              <p className="text-[14px] font-[500] text-[#556DFF] cursor-pointer tracking-[-0.01em]">
                Register An Account On Nobox Cloud
              </p>
              <p className="text-[14px]  text-[#838389] tracking-[-0.01em]">
                Add the Config File in your project
              </p>{" "}
              <p className="text-[14px]  text-[#838389] tracking-[-0.01em]">
                Create Your Record Structures{" "}
              </p>{" "}
              <p className="text-[14px]  text-[#838389] tracking-[-0.01em]">
                Finally, you can now Insert/Find/Delete/Update your first Record{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
