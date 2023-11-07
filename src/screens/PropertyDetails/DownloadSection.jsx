import React from "react";
import Button from "../../components/Button";

const DownloadSection = () => {
  return (
    <section className="bg-blue-500 py-16">
      <h1 className="h1 text-3xl font-bold text-center mb-2 text-white">
        Documents
      </h1>
      <p className="text-sm text-white text-center">
        Confidential property documents
      </p>
      <div className="flex gap-4 mt-8 center flex-wrap">
        <Button.Stamp></Button.Stamp>
        <Button.Stamp></Button.Stamp>
        <Button.Stamp></Button.Stamp>
        <Button.Stamp></Button.Stamp>
      </div>
    </section>
  );
};

export default DownloadSection;
