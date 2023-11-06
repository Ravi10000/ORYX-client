import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"

const Pagination = () => {
  return (
    <div className="w-full flex justify-end my-6">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              <span className="sr-only">Previous</span>
              <MdArrowBackIos />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              2
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              <span className="sr-only">Next</span>
              <MdArrowForwardIos />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
