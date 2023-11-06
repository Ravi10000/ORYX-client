import React from "react";
import Heading, { HR } from "../components/Heading";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import ToggleItem from "../screens/ToggleItem";

const Settings = () => {
  return (
    <div>
      <Heading
        heading={"General Settings"}
        subHeading={"Upload your photo and details here"}
        isHorizontalline={false}
      >
        <div className="flex gap-8">
          <Button className={"px-8 !my-0"}>Save</Button>
          <Button className={"px-8 !my-0"}>Cancel</Button>
        </div>
      </Heading>

      <div className="xl:grid xl:grid-cols-[1fr_520px] my-8 gap-x-6 2xl:gap-x-12">
        <div>
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <HR></HR>

          <form action="" className="my-6">
            <Input.LabelInput
              id="username--1"
              labelText="Username"
              placeholder="Enter username"
              type="text"
              isRequired={true}
            ></Input.LabelInput>
            <Input.LabelInput
              id="email--1"
              labelText="Email"
              placeholder="Enter email address"
              type="email"
              isRequired={true}
            ></Input.LabelInput>
            <Input.Textarea
              id="teaxtarea"
              labelText="Biography"
            ></Input.Textarea>
            <Input.LabelInput
              id="twitter--1"
              labelText="Twitter"
              placeholder="Enter twitter"
              type="url"
            ></Input.LabelInput>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Your Photo</h3>
          <HR></HR>

          <div className="my-2">
            <Link className="mb-5 flex gap-4 items-center">
              <div className="user-profile w-12 h-12 bg-gray-800 rounded-full ">
                <img src="" alt="" />
              </div>

              <div>
                <h1 className="text-base font-semibold capitalize">
                  edit your photo
                </h1>

                <div className="flex gap-1">
                  <span className="rounded-full p-[0.2rem] text-gray-500">
                    {/* <GoHome size={14} /> */}
                    Delete
                  </span>
                  <span className="text-red-600 rounded-full p-[0.2rem]">
                    {/* <GoHome size={14} /> */}
                    Update
                  </span>
                </div>
              </div>
            </Link>

            <Input.File></Input.File>
          </div>
        </div>
      </div>

      <div className="max-w-[940px]">
        <h3 className="text-lg font-semibold">Notification Settings</h3>
        <HR></HR>

        <div className="flex flex-col gap-5 my-4 mb-10 ">
          <ToggleItem
            heading="Real Estate NFT Sold"
            subHeading="When someone purchase one of your NFTs"
          ></ToggleItem>
          <ToggleItem
            heading="Auction Expires"
            subHeading="When an auction you participate in ends"
          ></ToggleItem>
          <ToggleItem
            heading="Individual NFTs Update"
            subHeading="When important updates occur regarding your NFT"
          ></ToggleItem>
          <ToggleItem
            heading="Successful Purchase"
            subHeading="When you successfully buy an NFT"
          ></ToggleItem>
        </div>
      </div>
    </div>
  );
};

export default Settings;
