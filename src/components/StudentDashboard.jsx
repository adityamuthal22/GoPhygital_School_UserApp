import { Box, Button, Typography } from "@mui/material";
import React from "react";

function StudentDashboard({ user, onLogout }) {
  return (
    <Box
      sx={{
        width: "40%",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "20px",
        marginTop: "10%",
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h5">
        Welcome, {user.UserName}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined" onClick={onLogout}>
          Logout
        </Button>{" "}
      </Box>
      {/* Logout Button */}
      <Box
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          <strong>Email:</strong> {user?.Email}
        </p>
        <p>
          <strong>Language:</strong> {user?.Language}
        </p>
        <p>
          <strong>Address:</strong> {user?.Address}
        </p>
        <p>
          <strong>Standard:</strong> {user?.Standard}
        </p>
        <p>
          <strong>Subjects:</strong> {user?.Subjects?.join(", ")}
        </p>
      </Box>
    </Box>
  );
}

export default StudentDashboard;
