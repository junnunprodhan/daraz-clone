"use client";
import { FormEvent } from "react";
import PageHeader from "./header";

const Auth = () => {
  function submit(event: FormEvent<HTMLFormElement>) {
    console.log("");
  }
  return (
    <div className="m-2">
      <PageHeader title="Add Categories" />

      <div className="grid grid-cols-2 gap-5">
        {/* Add Categories form */}
        <form onSubmit={submit}>
          {/* Main Menu */}
          <h2 className="text-xl">Main Menu</h2>
          <label>
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter Categories Name"
              className="border border-slate-300 focus:border-slate-400 p-1 w-full rounded outline-none"
            />
          </label>
          <label>
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter Categories Name"
              className="border border-slate-300 focus:border-slate-400 p-1 w-full rounded outline-none"
            />
          </label>
        </form>
        <form onSubmit={submit}>
          {/* Main Menu */}
          <h2 className="text-xl">2nd Menu</h2>
          <label>
            <span>Parent Menu</span>
            <select className="border border-slate-300 focus:border-slate-400 p-1 w-full rounded outline-none">
              <option selected value="select" disabled>
                Select
              </option>
              <option value="mobile">Mobile</option>
              <option value="computer">Computer</option>
            </select>
          </label>
          <label>
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter Categories Name"
              className="border border-slate-300 focus:border-slate-400 p-1 w-full rounded outline-none"
            />
          </label>
          <label>
            <span>Cover image</span>
            <div className="flex w-full  items-center justify-center bg-grey-lighter">
              <label className="w-64 flex flex-col items-center px-4 py-6 hover:bg-blue-400 transition bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  Upload Cover
                </span>
                <input accept="image/*" type="file" className="hidden" />
              </label>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Auth;
