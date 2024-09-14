import { UserData } from "@Components/User";
import UserDetails from "@Components/User/UserDetails";
import React from "react";

const page = async ({ params: { userId } }) => {
  return (
    <div className="mt-20">
      <UserDetails username={userId} />

      <UserData userId={userId} />
    </div>
  );
};

export default page;
