import React from "react";
import Input from "../../../components/Input";
import { AddSquare, Search } from "../../../assets/svg";
import Button from "../../../components/Button";

const UserManagement = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          boxShadow: "0px 4px 3+0px rgba(0, 0, 0, 0.10)",
          borderRadius: 15,
        }}
        className="px-10 py-6"
      >
        <div className="inputs flex justify-between">
          <div className="w-full max-w-xl">
            <Input.IconInput
              id="searc bar"
              name="search"
              type="search"
              placeholder="Search.."
              rgtIcon={false}
            >
              <Search size={12} />
            </Input.IconInput>
          </div>

          <div className="w-max">
            <Button className={"!my-0 mx-4 -translate-x-4"}>
              <span>Add</span>
              <AddSquare></AddSquare>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
