"use client";
import Button from "@/source/components/global/button";
import TextInput from "@/source/components/global/textInput";
import { useState } from "react";
import Calculator from "../cart/calculator";

function Page() {
  const [activeForm, setActiveForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Kajol",
    phone: "01705956055",
    division: "Rangpur",
    city: "Lalmonirhat",
    zip: "5510",
    address: "tiperbazar, aditmari, lalmonirhat.",
  });

  return (
    <div className="container my-5 min-h-[50vh]">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-2">
        <div className="col-span-4">
          <div className="border bg-white p-2 md:p-5 hover:shadow-md transition mb-2 border-slate-400 flex flex-col justify-center items-center cursor-pointer border-dashed">
            {activeForm ? (
              <span className=" p-5 text-xl mb-5">Add Address</span>
            ) : (
              <span
                className=" p-5 w-full text-center"
                onClick={() => setActiveForm((s) => !s)}
              >
                + Add address
              </span>
            )}

            {activeForm && (
              <div className="grid md:grid-cols-2 gap-2">
                <div>
                  <label className="text-sm">
                    Full Name
                    <TextInput
                      className="py-1 border-slate-200 border focus:border-slate-300"
                      placeholder="Full Name"
                    />
                  </label>
                  <label className="text-sm">
                    Phone Number
                    <TextInput
                      className="py-1 border-slate-200 border focus:border-slate-300"
                      placeholder="Phone number"
                    />
                  </label>
                  <label className="text-sm">
                    Division
                    <TextInput
                      className="py-1 border-slate-200 border focus:border-slate-300"
                      placeholder="Enter Division"
                    />
                  </label>
                  <label className="text-sm">
                    City
                    <TextInput
                      className="py-1 border-slate-200 border focus:border-slate-300"
                      placeholder="Enter City"
                    />
                  </label>
                </div>
                <div>
                  <label className="text-sm">
                    Zip/Post Code
                    <TextInput
                      className="py-1 border-slate-200 border focus:border-slate-300"
                      placeholder="Post office"
                    />
                  </label>
                  <label className="text-sm">
                    Address
                    <TextInput
                      className="py-1 border-slate-200 border focus:border-slate-300"
                      placeholder="House no. / building / street / area"
                    />
                  </label>
                  <div className="flex flex-col items-center md:mt-8 mt-4 gap-2">
                    <Button
                      onClick={() => {
                        setActiveForm(false);
                        setFormData({
                          fullName: "",
                          phone: "",
                          division: "",
                          city: "",
                          zip: "",
                          address: "",
                        });
                      }}
                      className="bg-slate-200 w-full py-1 hover:bg-slate-300"
                      title="Discard"
                    />
                    <Button
                      className="bg-primary text-white w-full py-1 hover:opacity-90"
                      title="Add Address"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white p-2">
            <span className="text-center my-5 block">No previous address</span>
            <ul>
              <li>Address 1</li>
              <li>Address 2</li>
              <li>Address 3</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-2 w-full md:col-span-2">
          <Calculator title="Place Order" actionType="ORDER" />
        </div>
      </div>
    </div>
  );
}

export default Page;
