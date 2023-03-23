import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsSearch } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import {
  filteredUser,
  loadUsers,
  removeUser,
  searchUser,
} from "../../redux/actions";
import "./Home.css";
import { toast } from "react-toastify";

export const Home = () => {
  const { users, loading } = useSelector((state) => state.users);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = ["Armenia", "Russia", "Belgium"];

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
    setTimeout(() => {
      dispatch(loadUsers());
    }, 200);
    toast.success("User deleted");
  };

  const Reset = () => {
    dispatch(loadUsers());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    query && dispatch(searchUser(query));
  };

  useEffect(() => {
    query === "" && dispatch(loadUsers());
  }, [query]);

  const toFilter = (filterQuery) => {
    dispatch(filteredUser(filterQuery));
  };

  return (
    <div>
      <button onClick={() => navigate("/add")} className="add">
        Add
      </button>

      <div>
        <div className="filter">
          {countries.map((item, index) => (
            <p key={index} onClick={() => toFilter(item)}>
              {item}
            </p>
          ))}
          <div onClick={Reset} className="reset">
            Reset
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="search_input"
          value={query}
          placeholder="search something.."
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="search_btn" type="submit">
          <BsSearch />
        </div>
      </form>
      <div className="items">
        {loading ? (
          <b className="Loading">Loading...</b>
        ) : (
          users.map((user) => {
            return (
              <div className="items_panel" key={user.id}>
                <div>
                  <span>{user.name}</span>
                  <span>{user.address}</span>
                  <span>{user.email}</span>
                  <span>{user.contact}</span>
                </div>
                <div className="actions_btns">
                  <div
                    className="remove_btn"
                    onClick={() => deleteUser(user.id)}
                  >
                    <BsFillTrash3Fill />
                  </div>
                  <div
                    className="edit_btn"
                    onClick={() => {
                      navigate(`edit/${user.id}`);
                    }}
                  >
                    <BsFillPencilFill />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="Empty">
        {users.length === 0 && <p>No data to show</p>}
      </div>
    </div>
  );
};
