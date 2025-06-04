import React from "react";
import Loader from "../components/Loader";
import LogoutButton from "../components/LogoutButton";

const Dashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <Loader />
      <LogoutButton />
    </div>
  );
};

export default Dashboard;
