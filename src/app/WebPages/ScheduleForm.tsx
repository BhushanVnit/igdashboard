/* eslint-disable @next/next/no-img-element */
"use client";
import AuthLayout from "../Components/AuthLayout";
import { Button } from "../Components/Button";
import { FormEvent, useState } from "react";

export default function ScheduleForm() {
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

    function handleInputChange(arg0: string, arg1: string, value: string): void {
        throw new Error("Function not implemented.");
    }
       
   const [data,setdata] = useState({})

    const [membersData, setMembersData] = useState({
        mem1: {
          name: "",
          email: "",
          phone: "",
          gender: "Male",
          age: "",
          year: "1st Year",
          dept: "Chem",
          rollnum: "",
        },
        mem2: {
          name: "",
          email: "",
          phone: "",
          gender: "Male",
          age: "",
          year: "1st Year",
          dept: "Chem",
          rollnum: "",
        },
        mem3: {
          name: "",
          email: "",
          phone: "",
          gender: "Male",
          age: "",
          year: "1st Year",
          dept: "Chem",
          rollnum: "",
        },
        mem4: {
          name: "",
          email: "",
          phone: "",
          gender: "Male",
          age: "",
          year: "1st Year",
          dept: "Chem",
          rollnum: "",
        },
        mem5: {
          name: "",
          email: "",
          phone: "",
          gender: "Male",
          age: "",
          year: "1st Year",
          dept: "Chem",
          rollnum: "",
        },
      });


  return (
    <>
      <AuthLayout>
        <div className="flex flex-col items-center sm:pl-10 pl-6 pb-4 ">
          <p className="text-4xl">Schedule the Event</p>
          <div className="flex flex-col text-black">
            <form action="#" onSubmit={handleSubmit} className="mt-10 ">
              <div className="min-h-full  sm:pl-10 w-[80vw]  sm:w-[35vw]">
                <div className="grid grid-cols-1 gap-y-6   sm:grid-cols-2 sm:gap-x-8 sm:px-0">
                <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Team-1
                  </label>
                  <input
                    className="col-span-full border "
                    
                    id="TN"
                    name="TN"
                    type="text"
                    required
                  />
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Team-2
                  </label>
                  <input
                    className="col-span-full border "
                 
                    id="TN"
                    name="TN"
                    type="text"
                    required
                  /> 
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                  GameName
                  </label>
                  <input
                    className="col-span-full border "
                    label="GameName"
                    id="TN"
                    name="TN"
                    type="text"
                    required
                  />
                   <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                 Winner
                  </label>
                  <input
                    className="col-span-full border "
              
                    id="TN"
                    name="TN"
                    type="text"
                    required
                  />
                   <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                 Time
                  </label>
                  <input
                    className="col-span-full border "
          
                    id="TN"
                    name="TN"
                    type="text"
                    required
                  />
                   <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                Date
                  </label>
                  <input
                    className="col-span-full border "
                    id="TN"
                    name="TN"
                    type="text"
                    required
                  />
                </div>
             </div>

              <div className="my-10">
                <Button
                  type="submit"
                  variant="solid"
                  color="slate"
                  className="w-full col-span-full  pb-3 text-lg shadow-lg "
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}