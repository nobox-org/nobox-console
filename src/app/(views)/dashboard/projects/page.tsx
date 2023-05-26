import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Projects = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex font-light gap-1 px-3 py-2 border border-[#E6E8F9] bg-[#FCFCFD] items-center text-[#838389]">
          <FiSearch />
          <input
            type="search"
            name=""
            placeholder="Search for projects"
            id=""
          />
        </div>
        <button className="bg-secondary text-white flex justify-center items-center py-2 gap-2 px-4">
          <AiOutlinePlus /> Create Project
        </button>
      </div>
    </div>
  );
};

export default Projects;
