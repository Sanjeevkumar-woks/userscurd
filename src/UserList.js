import { Edit, DeleteOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function UserList({ users, Delete }) {
  let navigate = useNavigate();

  return (
    <>
      <h1>Users</h1>
      <Button
        variant="outlined"
        sx={{ ml: "46%", mt: "10px" }}
        onClick={() => navigate("/add/user")}
      >
        Add-User
      </Button>
      <table>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th
              style={{
                width: "fit-content",
                backgroundColor: "#ffeecc",
                padding: "5px",
              }}
            >
              SI.No.
            </th>
            <th
              style={{
                width: "fit-content",
                backgroundColor: "#ffeecc",
                padding: "5px",
              }}
            >
              Name
            </th>
            <th
              style={{
                width: "fit-content",
                backgroundColor: "#ffeecc",
                padding: "5px",
              }}
            >
              Age
            </th>
            <th
              style={{
                width: "fit-content",
                backgroundColor: "#ffeecc",
                padding: "5px",
              }}
            >
              Email
            </th>
            <th
              style={{
                width: "fit-content",
                backgroundColor: "#ffeecc",
                padding: "5px",
              }}
            >
              Phone
            </th>
            <th
              style={{
                width: "fit-content",
                backgroundColor: "#ffeecc",
                padding: "5px",
              }}
            >
              Depertment
            </th>
            <th
              style={{
                width: "fit-content",
                backgroundColor: "#ffeecc",
                padding: "5px",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, age, email, phone, depertment }, id) => (
            <tr key={id}>
              <td
                style={{
                  backgroundColor: "#ffeecc",
                  borderRight: "2px black solid",
                }}
              >
                {id + 1}
              </td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{depertment}</td>
              <td className="edit-btns">
                <IconButton
                  onClick={() => {
                    navigate(`/update/user/${email}`);
                  }}
                >
                  <Edit color="primary" />
                </IconButton>
                <IconButton onClick={() => Delete(email)}>
                  <DeleteOutline color="error" />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
