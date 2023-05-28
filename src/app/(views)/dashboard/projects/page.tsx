import { AiOutlinePlus } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: "NoBox Codebase",
      description:
        "This where everything in the codebase happens. Until we decide a new method later",
      slug: "/noBox-repo-codebase",
      date: "14th Feb. 2023",
    },
    {
      id: 1,
      name: "NoBox Codebase",
      description:
        "This where everything in the codebase happens. Until we decide a new method later",
      slug: "/noBox-repo-codebase",
      date: "14th Feb. 2023",
    },
    {
      id: 2,
      name: "NoBox Codebase",
      description:
        "This where everything in the codebase happens. Until we decide a new method later",
      slug: "/noBox-repo-codebase",
      date: "14th Feb. 2023",
    },
    {
      id: 3,
      name: "NoBox Codebase",
      description:
        "This where everything in the codebase happens. Until we decide a new method later",
      slug: "/noBox-repo-codebase",
      date: "14th Feb. 2023",
    },
    {
      id: 4,
      name: "NoBox Codebase",
      description:
        "This where everything in the codebase happens. Until we decide a new method later",
      slug: "/noBox-repo-codebase",
      date: "14th Feb. 2023",
    },
    {
      id: 6,
      name: "NoBox Codebase",
      description:
        "This where everything in the codebase happens. Until we decide a new method later",
      slug: "/noBox-repo-codebase",
      date: "14th Feb. 2023",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex font-light gap-1 px-3 py-1 border border-[#E6E8F9] bg-[#FCFCFD] items-center text-[#838389]">
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
      <div className="table-container mt-6">
        {projects.length ? (
          <table className="table-auto w-full">
            <thead className="table__header">
              <tr className="table__row capitalize divide-x divide-[#E6E8F9] border border-[#E6E8F9] text-left text-[#515478] bg-[#FFFFFF]">
                <th className="font-medium px-2 text-sm py-3">
                  <input
                    className="border border-[#B0B2C9] rounded-sm"
                    type="checkbox"
                    name="check"
                    id=""
                  />
                </th>
                <th className="font-medium text-sm p-2 text-left">
                  <span className="flex gap-1">
                    Name{" "}
                    <span className="self-center">
                      <img src="/sort.svg" alt="sort icon" />
                    </span>
                  </span>
                </th>
                <th className="font-medium text-sm p-2 text-left">
                  Description
                </th>
                <th className="font-medium text-sm p-2 text-left">Slug</th>
                <th className="font-medium text-sm p-2 text-left">
                  <span className="flex gap-1">
                    Date{" "}
                    <span className="self-center">
                      <img src="/sort.svg" alt="sort icon" />
                    </span>
                  </span>
                </th>
                <th className="font-medium text-sm p-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="table__row capitalize divide-x divide-[#E6E8F9] border border-[#E6E8F9] text-left text-[#24242E] bg-[#FFFFFF]"
                >
                  <th className="font-medium px-2 text-sm py-4">
                    <input
                      className="border border-[#B0B2C9] rounded-sm"
                      type="checkbox"
                      name="check"
                      id=""
                    />
                  </th>
                  <th className="font-medium text-sm p-2 text-left">
                    {project.name}
                  </th>
                  <th className="font-medium text-sm p-2 text-left">
                    {project.description}
                  </th>
                  <th className="font-medium text-sm p-2 text-left">
                    {project.slug}
                  </th>
                  <th className="font-medium text-sm p-2 text-left">
                    {project.date}
                  </th>
                  <th className="font-light text-sm text-primary p-2 text-left">
                    <div className="flex gap-2 items-center">
                      <FaPen /> Edit
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col h-[70vh] justify-center items-center">
            <div className="mx-auto mb-5">
              <img src="/empty-project.svg" alt="no projects" />
            </div>
            <h6 className="text-[#24242E]">No projects yet.</h6>
            <p className="text-[#838389] font-thin">
              Create your first project below
            </p>
            <button className="bg-secondary text-white flex justify-center items-center py-2 mt-2 gap-2 px-4">
              <AiOutlinePlus /> Create Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
