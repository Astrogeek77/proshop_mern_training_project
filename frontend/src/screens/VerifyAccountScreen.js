import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const VerifyAccountScreen = ({ history }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const handler = async () => {
    console.log("INSIDE HANDLER");
    const res = await axios.post(
      "https://proshop-dyti.onrender.com/api/users/verify-account",
      {
        email: user.email,
      }
    );

    if (res.status === 200) {
      dispatch(logout());
      history.push("/");
    }
    console.log(res);
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="mt-5 text-center">Verify account</h1>
        {/* Send activation link button */}
        <button className="btn btn-info w-20 mx-auto mt-3" onClick={handler}>
          Send activation link
        </button>
      </div>
    </>
  );
};

export default VerifyAccountScreen;
