import { useFormik } from "formik";
import "./App.css";
import * as yup from "yup";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export function AddUser({ adduser }) {
  // Newly Added Userdata Object with validation
  let validation = yup.object({
    name: yup.string().required(),
    age: yup.number().required(),
    email: yup.string().required(),
    phone: yup.number().typeError("you must specify a number").required(),
    depertment: yup.string().required(),
  });

  const [dept, setDept] = useState("");

  const handleDept = (event) => {
    setDept(event.target.value);
    console.log(dept);
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        age: "",
        email: "",
        phone: "",
        depertment: "Development",
      },
      validationSchema: validation,
      onSubmit: (newuser) => adduser(newuser),
    });

  return (
    <form className="Adduserlist" onSubmit={handleSubmit}>
      {/* TextField */}
      <TextField
        className="Addtextfield"
        label="name"
        id="name"
        name="name"
        variant="standard"
        type="text"
        onBlur={handleBlur}
        onInput={handleChange}
        error={errors.name && touched.name}
        value={values.name}
        helperText={errors.name && touched.name && errors.name}
        placeholder="Enter the username"
      />
      <br />

      <TextField
        className="Addtextfield"
        label="age"
        id="age"
        name="age"
        variant="standard"
        type="text"
        onBlur={handleBlur}
        onInput={handleChange}
        error={errors.age && touched.age}
        value={values.age}
        helperText={errors.age && touched.age && errors.age}
        placeholder="Profile pic url"
      />
      <br />

      <TextField
        className="Addtextfield"
        label="phone Number"
        id="phone"
        name="phone"
        variant="standard"
        type="text"
        onBlur={handleBlur}
        onInput={handleChange}
        error={errors.phone && touched.phone}
        value={values.phone}
        helperText={errors.phone && touched.phone && errors.phone}
        placeholder="Enter the phone Number"
      />
      <br />

      <TextField
        className="Addtextfield"
        label="email"
        id="email"
        name="email"
        variant="standard"
        type="email"
        onBlur={handleBlur}
        onInput={handleChange}
        error={errors.email && touched.email}
        value={values.email}
        helperText={errors.email && touched.email && errors.email}
        placeholder="Enter the emailid"
      />
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dept}
          label="depertment"
          onChange={handleDept}
          onBlur={handleBlur}
        >
          <MenuItem value="Finance">Finance</MenuItem>
          <MenuItem value="Development">Development</MenuItem>
          <MenuItem value="Testing">Testing</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <Button
        type="Submit"
        variant="contained"
        style={{ marginRight: "4rem", marginBottom: "1rem" }}
      >
        Add user
      </Button>
    </form>
  );
}
