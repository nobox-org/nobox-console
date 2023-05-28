import { useState } from "react";
import { FaPen } from "react-icons/fa";

const CreateProject = () => {
  const [open, setOpen] = useState(false);
  if (open) {
    return (
      <div
        onClick={() => {
          setOpen(true);
        }}
        className="modal-overlay flex justify-center items-center"
      >
        <div className="modal-container">
          <div>
            <div className="text-[#292D32]">
              <h6 className="text-base font-medium py-1">Create project</h6>
              <p className="text-[#838389] text-sm font-light">
                Create your project with different fields
              </p>
              <form className="mt-10">
                <div className="">
                  <label htmlFor="pName">Project Name</label>
                  <input type="text" className="" id="pName" name="pName" />
                </div>
                <div className="my-3">
                  <label htmlFor="pDescription">Description</label>
                  <textarea
                    placeholder="Describe your project"
                    className=""
                    id="pDescription"
                    name="pDescription"
                  ></textarea>
                </div>
                <div className="">
                  <label htmlFor="pName">Slug</label>
                  <div className="flex">
                    <input type="text" className="" id="pSlug" name="pSlug" />
                    <button>
                      <FaPen /> Edit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CreateProject;
