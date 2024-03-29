import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { api } from "../api";
import PropertyCard from "./myProperties/PropertyCard";

export default function Favorites() {
  const [properties, setProperties] = useState(null);

  async function getProperties() {
    const {
      data: { favProperties },
    } = await api.get("/property/read-fav");
    // console.log(favProperties);
    setProperties(favProperties);
  }

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      <div className="px-5">
        <Heading
          heading={"favorites"}
          subHeading={"All of your favorite real estate NFTs in one place."}
        />
      </div>

      <div className="my-5">
        {properties && (
          <div className="flex gap-5 justify-center flex-wrap">
            {properties?.map((property) => (
              <PropertyCard
                key={property._id}
                property={property}
                getProperties={getProperties}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
