import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { api } from "../../api";
import { useContract, useContractWrite, useAddress } from "@thirdweb-dev/react";

export default function MyProperties() {
  const [properties, setProperties] = useState(null);
  const address = useAddress();
  console.log({ address });
  const {
    data: contract,
    status,
    ...rest
  } = useContract(import.meta.env.VITE_PROPERTY_CONTRACT_ADDRESS);
  console.log({ status, contract, rest });

  const {
    mutate: mintProperty,
    isLoading,
    isError,
    data,
  } = useContractWrite(contract, "listProperty");
  console.log({ data, isLoading, isError });
  async function getProperties() {
    const {
      data: { data },
    } = await api.get("/property/read");
    console.log({ "get properties": data });
    setProperties(data);
  }

  useEffect(() => {
    getProperties();
  }, []);

  // console.log(properties);

  return (
    <>
      <button
        className="bg-blue-500 text-white rounded-full px-3 py-1"
        disabled={isLoading}
      >
        <span>mint </span>
        {isLoading && <span> loading...</span>}
      </button>
      <div className="px-5">
        <Heading
          heading={"MyProperties"}
          subHeading={"Buy and Sell Real Estate NFTs Within Seconds"}
        />
      </div>

      <form className="flex flex-col py-3 2xl:gap-10 gap-5 flex-wrap px-5">
        <div className="flex flex-wrap gap-5 lg:gap-20 justify-between items-center">
          <div className="lg:w-[50%]">
            <Input.Search
              className="flex-1 min-w-[250px]"
              name={"search"}
              placeholder={"search by name"}
            ></Input.Search>
          </div>

          <div className="">
            <Link to="/my-properties/add-property">
              <button className="w-20 p-2 py-3 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover">
                Add
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 lg:gap-10 items-center">
          <div className="relative">
            <select
              name=""
              id=""
              className="px-5 py-2 border border-gray-300 bg-gray-50  text-gray-600 rounded-3xl outline-none pr-8"
              style={{ WebkitAppearance: "none", appearance: "none" }}
            >
              <option value="">Option 1</option>
              <option value="">Option 2</option>
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
              <option value="">Option 1</option>
              <option value="">Option 2</option>
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
              <option value="">Option 1</option>
              <option value="">Option 2</option>
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
        {properties && (
          <div className="flex gap-5 justify-center flex-wrap">
            {properties?.map((property) => (
              <PropertyCard
                key={property._id}
                property={property}
                getProperties={getProperties}
                isLoading={isLoading}
                mintProperty={(...args) => mintProperty({ args })}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
