import React, { useState } from "react";
import Popup from "./Popup";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function AdminDashboard({ users, onLogout }) {
  const students = users.filter((u) => u.UserType === "student");
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredStudents = students.filter(
    (s) =>
      s.UserName.toLowerCase().includes(search.toLowerCase()) ||
      s.Subjects.some((subject) =>
        subject.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Typography sx={{ textAlign: "center", fontWeight: 700 }} variant="h5">
        Admin Dashboard
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          sx={{ width: "30%" }}
          type="text"
          placeholder="Search by name or subject"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" onClick={onLogout}>
          Logout
        </Button>{" "}
      </Box>

      {/* Logout Button */}
      <Grid
        sx={{ marginTop: 20 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredStudents.map((student, index) => (
          <Grid style={{ marginTop: 10 }} item xs={2} sm={4} md={4} key={index}>
            <Box
              key={student.Email}
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Typography>
                {student.UserName} - {student.Email}
              </Typography>
              <Typography>Subject :- {student?.Subjects?.join(" ")}</Typography>
              <Button
                sx={{ marginLeft: "10px" }}
                variant="outlined"
                onClick={() => setSelectedUser(student)}
              >
                Details
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      {selectedUser && (
        <Popup user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </Box>
  );
}

export default AdminDashboard;
