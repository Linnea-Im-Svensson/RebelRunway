import React from "react";
import Image from "next/image";
import ProfilePic from "public/joseph-gonzalez.jpg";

const UserInfo = () => {
  return (
    <>
      <Image src={ProfilePic} alt="ProfilePic" height={200} />
      <div>User Information</div>
      <div>Name: Joseph Gonzalez</div>
      <div>Email: joseph.gonzalez@test.com</div>
      <div>Address: </div>
      <div>Street: 561 Hespeler Rd</div>
      <div>City: Cambridge </div>
      <div>Postal Code: N1R 8J6</div>
      <div>Country: Canada</div>
    </>
  );
};

export default UserInfo;
