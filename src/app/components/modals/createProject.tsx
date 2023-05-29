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
      onClick={() => props.close()}
    >
      <div className="modal-container">
        <div>
          <div className={`create-project ${props.open && "show"}`}>
            <div className="text-[#292D32]">
              <div className="flex justify-between">
                <div className="">
                  <h6 className="text-lg font-medium py-1">
                    Create project{props.open}
                  </h6>
                  <p className="text-[#838389] text-sm font-light">
                    Create your project with different fields
                  </p>
                </div>
                <div
                  onClick={() => props.close()}
                  className="flex w-8 h-8 rounded-full text-[#0F172A] border border-[#E6E8F9] justify-center items-center"
                >
                  <FaTimes />
                </div>
              </div>
              <form className="mt-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="pName">Project Name</label>
                  <input
                    type="text"
                    className="border rounded-sm border-[#D0D5DD] p-2"
                    id="pName"
                    name="pName"
                  />
                </div>
                <div className="my-5 flex flex-col gap-2">
                  <label htmlFor="pDescription">Description</label>
                  <textarea
                    placeholder="Describe your project"
                    className="border rounded-sm border-[#D0D5DD] p-2"
                    id="pDescription"
                    name="pDescription"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pName">Slug</label>
                  <div className="flex just border rounded-sm border-[#D0D5DD]">
                    <input
                      type="text"
                      className="bg-[#F9FAFB] w-full p-2"
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
