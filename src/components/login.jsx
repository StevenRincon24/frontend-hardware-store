import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import Header from "./header";
const Login = () => {
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="flex flex-column align-items-center justify-content-center"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)",
      }}
    >
      <Header></Header>
      <div
        style={{
          borderRadius: "56px",
          padding: "0.3rem",
          marginTop: "3%",
          background:
            "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)",
        }}
      >
        <div
          className="w-full surface-card py-8 px-5 sm:px-8"
          style={{ borderRadius: "53px" }}
        >
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">
              Inicia sesión para continuar
            </div>
          </div>

          <div>
            <label
              htmlFor="email1"
              className="block text-900 text-xl font-medium mb-2"
            >
              Email
            </label>
            <InputText
              inputid="email1"
              type="text"
              placeholder="Email address"
              className="w-full md:w-30rem mb-5"
              style={{ padding: "1rem" }}
            />

            <label
              htmlFor="password1"
              className="block text-900 font-medium text-xl mb-2"
            >
              Password
            </label>
            <Password
              inputid="password1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              toggleMask
              className="w-full mb-5"
              inputClassName="w-full p-3 md:w-30rem"
            ></Password>

            <div className="flex align-items-center justify-content-between mb-5 gap-5">
              <div className="flex align-items-center">
                <Checkbox
                  inputid="rememberme1"
                  checked={checked}
                  onChange={(e) => setChecked(e.checked)}
                  className="mr-2"
                ></Checkbox>
                <label htmlFor="rememberme1">Remember me</label>
              </div>
              <Link
                className="font-medium no-underline ml-2 text-right cursor-pointer"
                style={{ color: "var(--primary-color)" }}
              >
                Forgot password?
              </Link>
            </div>
            <Button label="Sign In" className="w-full p-3 text-xl"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
