import React from "react";
import "./Profile.scss";
import "react-vertical-timeline-component/style.min.css";
import { Avatar } from "@mui/material";
import ProfilePic from "../../../styles/images/profile-pic.png";

const Profile: React.FC = () => {

  return (
    <Avatar
      alt="Profile Picture"
      src={ProfilePic}
      sx={{
        width: 200,
        height: 200,
        boxShadow: "0 0 0 8px white, 0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
};

export default Profile;
