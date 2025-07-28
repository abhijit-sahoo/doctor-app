import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { AdminContext } from "../contexts/Admin.context";
import { toast } from "react-toastify";
import { DoctorContext } from "../contexts/Doctor.context";
const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const {data} = await axios.post(backendUrl + '/api/doctor/login',{email,password})
        if(data.success){
          localStorage.setItem('dToken',data.token)
          setDToken(data.token)
          console.log(data.token)
        }
        else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center"
      action=""
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>{" "}
            to Login as Doctor
          </p>
        ) : (
          <p>
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>{" "}
            to Login as Admin
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
