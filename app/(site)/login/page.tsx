"use client";
import Button from "@/source/components/global/button";
import TextInput from "@/source/components/global/textInput";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    phone_Email_Username: "",
    password: "",
  });
  function submit() {
    signIn("credentials", { ...formData, callbackUrl: "/" });
  }
  function provider(value: "FACEBOOK" | "GOOGLE") {
    if (value === "FACEBOOK") {
      signIn("facebook", { callbackUrl: "/" });
    } else if (value === "GOOGLE") {
      signIn("google", { callbackUrl: "/" });
    }
  }

  return (
    <div className="md:w-3/5 my-10 mx-auto">
      {/* Header */}
      <div className="flex md:px-0 px-2 justify-between items-center">
        <h2 className="text-xl">Welcome to Daraz! Please login.</h2>
        <span className="text-xs text-gray-600">
          New member?
          <Link href="/register" className="text-green-500 mx-1">
            Resister
          </Link>
          here.
        </span>
      </div>
      <div className="bg-white my-5 grid md:grid-cols-2 md:p-4 p-2">
        {/* Input form */}
        <div>
          <div className="flex flex-col my-4">
            <span className="text-xs text-gray-500">Phone Number or Email</span>
            <TextInput
              onChange={({ target: { value } }) =>
                setFormData((s) => ({ ...s, phone_Email_Username: value }))
              }
              className="border focus:border-slate-300 text-sm py-2"
              placeholder="Please enter your phone/email"
            />
          </div>
          <div className="flex flex-col my-4">
            <span className="text-xs text-gray-500">Enter your password</span>
            <TextInput
              onChange={({ target: { value } }) =>
                setFormData((s) => ({ ...s, password: value }))
              }
              className="border focus:border-slate-300 text-sm py-2"
              placeholder="Please enter your password"
            />
          </div>
          <div className="flex flex-col items-end my-4">
            <Link href="/" className="text-xs text-blue-500">
              Forget password
            </Link>
          </div>
        </div>
        {/* Provider auth */}
        <div className="flex flex-col md:py-5 md:px-8">
          <Button
            onClick={submit}
            className="bg-primary text-white py-2 my-2 w-full"
            title="Login"
          />
          <span className="text-xs text-gray-500">Or, login with</span>
          <Button
            onClick={() => provider("FACEBOOK")}
            className="bg-[#3b5998] text-white py-2 my-2 w-full"
            title={
              <div className="flex items-center gap-2 justify-center">
                <i className="bi bi-facebook"></i>
                <span>Facebook</span>
              </div>
            }
          />
          <Button
            onClick={() => provider("GOOGLE")}
            className="bg-[#d34836] text-white py-2 my-2 w-full"
            title={
              <div className="flex items-center gap-2 justify-center">
                <i className="bi bi-google"></i>
                <span>Google</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
