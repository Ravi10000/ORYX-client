import React, { useEffect, useState } from "react";
import CarouselX from "../../../components/CarouselX";
import Heading from "../../../components/Heading";
import Input from "../../../components/Input";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { authMultiFormApi } from "../../../api";
import PropertyCard from "./PropertyCard";

export default function ViewProperties() {
    const location = useLocation();
    const projectId = location?.state?.projectId;
    console.log(projectId);

    const [properties, setProperties] = useState(null);

    async function getProperties() {
        const { data: { data } } = await authMultiFormApi.get(`/property/read/${projectId}`);
        // console.log(data);
        setProperties(data);
    }

    useEffect(() => {
        getProperties();
    }, []);

    return (
        <>
            <Heading
                heading={"Marketplace / Property"}
                subHeading={"Buy and Sell Real Estate NFTs Within Seconds"}
            />

            <form className="flex flex-col py-3 2xl:gap-10 gap-5 flex-wrap">
                <div className="flex gap-20 justify-between items-center">
                    <div className="w-[50%]">
                        <Input.Search
                            className="flex-1 min-w-[250px]"
                            name={"search"}
                            placeholder={"search by name"}
                        ></Input.Search>
                    </div>

                    <div className="">
                        <Link to='/marketplace/view-properties/add-property'
                            state={projectId}
                        >
                            <button
                                className='w-20 p-2 py-3 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover'>
                                Add
                            </button>
                        </Link>
                    </div>

                </div>

                <div className="flex gap-10 items-center">
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

            <div className="overflow-hidden my-8">
                {
                    properties && (
                        <CarouselX>
                            {properties?.map(property => (
                                <PropertyCard key={property._id} property={property} />
                            ))}
                        </CarouselX>
                    )
                }
            </div>
        </>
    );
}