"use client";
import React, { useState } from "react";

export default function EducationCard() {
  return (
    <section className="flex flex-col items-center container max-auto px-6">
      <div className="">
        <h1 className="text-[#001633] text-[22px] mb-2 font-semibold">
          Education
        </h1>
        <p className="text-[16px] text-[#333333] mb-4">
          Input your educational background, degrees earned and academic
          achievements
        </p>

        <div>
          <h3 className="text-lg mb-4">Education Entry 1</h3>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col mt-3 lg:w-1/2">
              <label htmlFor="Entryone">Institution Name</label>
              <input
                type="text"
                placeholder="Institution Name"
                className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
              />
            </div>

            <div className="flex flex-col mt-3 lg:w-1/2">
              <label htmlFor="Entrytwo">Field of Study</label>
              <input
                type="text"
                placeholder="Field of Study"
                className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mb-4 mt-4">
            <div className="flex flex-col mt-3 lg:w-1/2">
              <label htmlFor="Entryone">Degree</label>
              <input
                type="text"
                placeholder="Degree"
                className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
              />
            </div>

            <div className="flex flex-col mt-3 lg:w-1/2">
              <label htmlFor="Entrytwo">End date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
              />
            </div>
          </div>

          <div>
            <label htmlFor="student" className="flex items-center">
              <input type="checkbox" className="mr-2" />

              <p className="font-light text-[14px] text-[#002156]">
                I am still a student
              </p>
            </label>
          </div>

          <div className="flex space-x-4">
            <div className="mt-3 w-full">
              <label htmlFor="Entryone">Location</label>
              <input
                type="text"
                placeholder="Location"
                className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              className="text-red-500 hover:text-red-700 text-sm"
            >
              - Remove section
            </button>

            <button
              type="button"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              + Add education
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


