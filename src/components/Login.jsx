import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import data from "../data.json";
import { encryptPassword } from "../utils";
import { Box, Button, TextField, Typography } from "@mui/material";

function Login({ onLogin }) {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      const user = data.find(
        (u) =>
          u.Email === values.email &&
          u.Password === encryptPassword(values.password)
      );
      if (user) onLogin(user);
      else alert("Invalid email or password");
    },
  });

  return (
    <form
      style={{ width: "40%", margin: "auto", marginTop: "10%" }}
      onSubmit={formik.handleSubmit}
    >
      <Box>
        <Typography
          style={{ textAlign: "center", fontWeight: 700 }}
          variant="h5"
        >
          Login Page
        </Typography>
        <TextField
          style={{ marginTop: 10 }}
          fullWidth
          variant="outlined"
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
      </Box>

      <Box>
        <TextField
          style={{ marginTop: 10 }}
          fullWidth
          variant="outlined"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
      </Box>

      <Button
        style={{ marginTop: 10 }}
        fullWidth
        variant="contained"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}

export default Login;
