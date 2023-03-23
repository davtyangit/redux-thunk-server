import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addUser, load_singleUser, updateUser } from "../../redux/actions";

import "./AddEdit.css";

export const AddEdit = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(load_singleUser(id));
    }
  }, []);

  useEffect(() => {
    if (user && id) {
      setFormValues({
        name: user.name,
        address: user.address,
        email: user.email,
        contact: user.contact,
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, address, contact } = formValues;
    const data = { name, address, email, contact };

    if (data && !id) {
      if (name.length && email.length && address.length && contact.length) {
        dispatch(addUser(data));
        setFormValues({
          name: "",
          email: "",
          address: "",
          contact: "",
        });
        navigate("/");
        toast.success("User added");
      } else {
        toast.error("Fields are required");
      }
    } else {
      dispatch(updateUser(data, id));
      toast.success("User updated");
      navigate("/");
    }
  };

  return (
    <div>
      <h2>{id ? "Edit user" : "Add user"}</h2>
      <form className="add_edit_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          value={formValues.name || ""}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Address.."
          value={formValues.address || ""}
          onChange={(e) =>
            setFormValues({ ...formValues, address: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Email..."
          value={formValues.email || ""}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Contact..."
          value={formValues.contact || ""}
          onChange={(e) =>
            setFormValues({ ...formValues, contact: e.target.value })
          }
        />
        <button type="submit">{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};
