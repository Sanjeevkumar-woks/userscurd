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
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "./App";
import { useState } from "react";

export function Updateuser({ users, getusers }) {
  let { email } = useParams();
  let user = users.find((u) => u.email === email);
  let navigate = useNavigate();

  // Update User
  const updateuser = (updateduser) => {
    fetch(`${URL}/update/${email}`, {
      method: "PATCH",
      body: JSON.stringify(updateduser),
      headers: { "Content-Type": "Application/Json" },
    })
      .then((x) => x.json())
      .then(getusers)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  // Newly Added Userdata Object with validation
  let validation = yup.object({
    name: yup.string().required(),
    age: yup.number().required(),
    email: yup.string().required(),
    phone: yup.number().typeError("you must specify a number").required(),
    depertment: yup.string().required(),
  });

  const [dept, setDept] = useState(user.depertment);
  console.log(dept);

  const handleDept = (event) => {
    setDept(event.target.value);
  };

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: user.name,
        age: user.age,
        email: user.email,
        phone: user.phone,
        depertment: user.depertment,
      },
      validationSchema: validation,
      onSubmit: (newuser) => updateuser(newuser),
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
        Save user
      </Button>
    </form>
  );
}
