import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { authMultiFormApi } from "../../api";

export default function Marketplace() {
  const [projects, setProjects] = useState(null);

  async function getProjects() {
    const { data: { data } } = await authMultiFormApi.get('/project/read');
    // console.log(data);
    setProjects(data);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div className="px-5">
        <Heading
          heading={"Marketplace"}
          subHeading={"Buy and Sell Real Estate NFTs Within Seconds"}
        />
      </div>

      <form className="flex flex-col py-3 2xl:gap-10 gap-5 flex-wrap">
        <div className="flex flex-wrap gap-x-5 lg:gap-20 justify-between items-center px-5">
          <div className="lg:w-[50%]">
            <Input.Search
              className="flex-1 min-w-[250px]"
              name={"search"}
              placeholder={"search by name"}
            ></Input.Search>
          </div>

          <div className="">
            <Link to='/marketplace/add-project'>
              <button
                className='w-20 p-2 py-3 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover'>
                Add
              </button>
            </Link>
          </div>

        </div>

        <div className="flex flex-wrap gap-5 lg:gap-10 items-center px-5">
          <div className="relative">
            <select
              name=""
              id=""
              className="px-5 py-2 border border-gray-300 bg-gray-50  text-gray-600 rounded-3xl outline-none pr-8"
              style={{ WebkitAppearance: "none", appearance: "none" }}
            >
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
            </select>
            <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
              <IoMdArrowDropdown />
            </div>
          </div>

          <div className="relative">
            <select
              name=""
              id=""
              className="px-5 py-2 border border-gray-300 bg-gray-50  text-gray-600 rounded-3xl outline-none pr-8"
              style={{ WebkitAppearance: "none", appearance: "none" }}
            >
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
            </select>
            <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
              <IoMdArrowDropdown />
            </div>
          </div>

          <div className="relative">
            <select
              name=""
              id=""
              className="px-5 py-2 border border-gray-300 bg-gray-50  text-gray-600 rounded-3xl outline-none pr-8"
              style={{ WebkitAppearance: "none", appearance: "none" }}
            >
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
            </select>
            <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
              <IoMdArrowDropdown />
            </div>
          </div>

          <input
            type="reset"
            value={"clear all filters"}
            className="text-gray-500 capitalize font-semibold"
          />
        </div>

      </form>

      <div className="my-5">
        {
          projects && (
            <div className="flex gap-5 justify-center flex-wrap">
              {projects?.map(project => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )
        }
      </div>
    </>
  );
}