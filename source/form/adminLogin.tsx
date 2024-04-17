"use client";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Button from "../components/global/button";
import TextInput from "../components/global/textInput";

function AdminLogin() {
  const [data, setData] = useState({ phone_Email_Username: "", password: "" });

  function submit() {
    signIn("credentials", data);
  }
  2;
  return (
    <>
      <div className="lg:w-1/4 md:w-2/5 mx-auto bg-white p-5 rounded">
        <h2 className="text-center ">Welcome to Daraz Mall</h2>
        <div className="my-2">
          <TextInput
            onChange={(e) =>
              setData((s) => ({ ...s, phone_Email_Username: e.target.value }))
            }
            className="my-1 py-1 bg-slate-100 text-sm focus:border-slate-400 border transition"
            placeholder="Enter Username"
          />
          <TextInput
            onChange={(e) =>
              setData((s) => ({ ...s, password: e.target.value }))
            }
            className="my-1 py-1 bg-slate-100 text-sm focus:border-slate-400 border transition"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex gap-2">
          <Button
            onClick={submit}
            className={` py-[6px] my-1 bg-primary text-white text-sm w-full hover:opacity-80 transition`}
            title="Login"
          />
          <Button
            onClick={() => signOut()}
            className={` py-[6px] my-1 text-sm w-full hover:opacity-80 transition bg-gray-200`}
            title="Help center"
          />
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
