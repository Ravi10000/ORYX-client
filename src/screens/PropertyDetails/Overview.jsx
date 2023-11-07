import React from "react";
import RoundIcon from "../../components/RoundIcon";

const Overview = () => {
  return (
    <>
      <h1 className="h1 text-3xl font-bold text-center my-8 mt-16">Overview</h1>

      <section className="grid grid-rows-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="font-bold text-lg mb-8">About the Property</h3>
          <p className="text-sm pl-4 text-slate-900">
            Here you will find all available information regarding the specific
            property. For example, this might entail where the property is
            located, what makes it unique, and why it could interest you.
            Furthermore, Metropoly provides insights about market conditions and
            why our team believes that the property value will increase in the
            long term. We evaluate crucial aspects of the property, including
            the area, surrounding development, service charges, building
            quality, number of amenities, developer, and expected supply.
            <br />
            <br />
            All real estate offered on the Metropoly marketplace must pass a
            strict screening and selection process to provide users with the
            best opportunity to earn both rental yield and capital appreciation.
            In addition, we leverage data from leading third - party vendors to
            ensure that all of our internal research and analysis tools are
            accurate and reliable in current market conditions.
          </p>
        </div>
        <div className="grid 2xl:grid-cols-5 grid-cols-3 gap-5 xl:place-items-start place-items-center">
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
        </div>
      </section>
    </>
  );
};

export default Overview;
