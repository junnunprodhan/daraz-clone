"use client";
import Button from "@/source/components/global/button";
import TextInput from "@/source/components/global/textInput";
import Link from "next/link";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    re_password: "",
  });

  function submit() {
    console.log("Submit");
    console.log(formData);
  }
  return (
    <div className="md:w-3/5 my-10 mx-auto">
      {/* Header */}
      <div className="flex md:px-0 px-2 justify-between items-center">
        <h2 className="text-xl">Welcome to Daraz! Please Register.</h2>
        <span className="text-xs text-gray-600">
          Already member?
          <Link href="/login" className="text-green-500 mx-1">
            Login
          </Link>
          here.
        </span>
      </div>
      <div className="bg-white my-5 grid gap-2 md:grid-cols-2 md:p-4 p-2">
        {/* Input form */}
        <div>
          <div className="flex flex-col my-4">
            <span className="text-xs text-gray-500">Full Name</span>
            <TextInput
              onChange={({ target: { value } }) =>
                setFormData((s) => ({ ...s, name: value }))
              }
              className="border focus:border-slate-300 text-sm py-2"
              placeholder="Please enter your Name"
            />
          </div>
          <div className="flex flex-col my-4">
            <span className="text-xs text-gray-500">Enter your email</span>
            <TextInput
              onChange={({ target: { value } }) =>
                setFormData((s) => ({ ...s, email: value }))
              }
              className="border focus:border-slate-300 text-sm py-2"
              placeholder="Please enter your Email"
            />
          </div>
          <div className="flex flex-col my-4">
            <span className="text-xs text-gray-500">Enter your Phone</span>
            <TextInput
              type="number"
              onChange={({ target: { value } }) =>
                setFormData((s) => ({ ...s, phone: value }))
              }
              className="border focus:border-slate-300 text-sm py-2"
              placeholder="Please enter your Phone"
            />
          </div>
        </div>
        {/* Row */}
        <div>
          <div className="flex flex-col my-4">
            <span className="text-xs text-gray-500">Enter your Password</span>
            <TextInput
              onChange={({ target: { value } }) =>
                setFormData((s) => ({ ...s, password: value }))
              }
              className="border focus:border-slate-300 text-sm py-2"
              placeholder="Please enter your Password"
            />
          </div>
          <div className="flex flex-col my-4">
            <span className="text-xs text-gray-500">
              Enter your Re-type Password
            </span>
            <TextInput
              onChange={({ target: { value } }) =>
                setFormData((s) => ({ ...s, re_password: value }))
              }
              className="border focus:border-slate-300 text-sm py-2"
              placeholder="Please enter your Password"
            />
          </div>
          <div className="flex flex-col my-8">
            <Button
              onClick={submit}
              title="Register"
              className="border bg-primary text-white hover:opacity-80 focus:border-slate-300 text-sm py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
