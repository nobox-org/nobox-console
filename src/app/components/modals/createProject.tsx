import { FaPen, FaTimes } from "react-icons/fa";
import "./style.scss";
export interface Props {
  open: boolean;
  close: Function;
}
const CreateProject: React.FC<Props> = (props) => {
  if (!props.open) {
    return null;
  }
  return (
    <div
      className="modal-overlay flex justify-center items-center"
      // onClick={() => props.close()}
    >
      <div className="modal-container">
        <div>
          <div className={`create-project ${props.open && "show"}`}>
            <div className="text-[#292D32]">
              <div className="flex justify-between">
                <div className="">
                  <h6 className="text-[20px] font-[700] text-[#292D32]">
                    Create project{props.open}
                  </h6>
                  <p className="text-[#838389] text-[14px] font-[400] tracking-[-0.015em]">
                    Create your project with different fields
                  </p>
                </div>
                <div
                  onClick={() => props.close()}
                  className="flex w-8 h-8 rounded-full text-[#0F172A] border border-[#E6E8F9] justify-center items-center cursor-pointer"
                >
                  <FaTimes />
                </div>
              </div>
              <form className="mt-[52px]">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="pName"
                    className="text-[#262626] text-[16px] font-[500]"
                  >
                    Project Name
                  </label>
                  <div className="border border-[#D0D5DD]">
                    <input
                      type="text"
                      className=" rounded-sm w-full border-none p-2 focus:ring-0 "
                      id="pName"
                      name="pName"
                    />
                  </div>
                </div>
                <div className="my-5 flex flex-col gap-2">
                  <label
                    htmlFor="pDescription"
                    className="text-[#262626] text-[16px] font-[500]"
                  >
                    Description
                  </label>
                  <div className="w-full border border-[#D0D5DD]">
                    <textarea
                      placeholder="Describe your project"
                      className="w-full rounded-sm  border-none p-2 focus:ring-0"
                      id="pDescription"
                      name="pDescription"
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="pName"
                    className="text-[#262626] text-[16px] font-[500]"
                  >
                    Slug
                  </label>
                  <div className="flex just border rounded-sm border-[#D0D5DD]">
                    <input
                      type="text"
                      className="bg-[#F9FAFB] w-full p-2 border-none focus:ring-0"
                      id="pSlug"
                      name="pSlug"
                    />
                    <button className="flex border-l border-[#D0D5DD] px-3 text-sm items-center gap-1">
                      <FaPen /> Edit
                    </button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="bg-secondary font-light text-[#E6E8F9] flex mt-10 items-center py-2 gap-2 px-2 md:px-4">
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
