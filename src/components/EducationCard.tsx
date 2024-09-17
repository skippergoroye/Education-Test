"use client"



import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/app/store';
import { addEducation, removeEducation, handleChange } from "../redux/feature/Education/educationSlice";

const EducationCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const { educations, message, dateErrors } = useSelector((state: RootState) => state.education);

  return (
    <section className="flex flex-col items-center container max-auto px-6">
      <div>
        <h1 className="text-[#001633] text-[22px] mb-2 font-semibold">Education</h1>
        <p className="text-[16px] text-[#333333] mb-4">
          Input your educational background, degrees earned, and academic achievements
        </p>

        {educations.map((education, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg mb-4">Education Entry {index + 1}</h3>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col mt-3 lg:w-1/2">
                <label>Institution Name</label>
                <input
                  type="text"
                  placeholder="Institution Name"
                  className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
                  value={education.institution}
                  onChange={(e) =>
                    dispatch(handleChange({ index, field: 'institution', value: e.target.value }))
                  }
                />
              </div>

              <div className="flex flex-col mt-3 lg:w-1/2">
                <label>Field of Study</label>
                <input
                  type="text"
                  placeholder="Field of Study"
                  className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
                  value={education.fieldOfStudy}
                  onChange={(e) =>
                    dispatch(handleChange({ index, field: 'fieldOfStudy', value: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mb-4 mt-4">
              <div className="flex flex-col mt-3 lg:w-1/2">
                <label>Degree</label>
                <input
                  type="text"
                  placeholder="Degree"
                  className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
                  value={education.degree}
                  onChange={(e) =>
                    dispatch(handleChange({ index, field: 'degree', value: e.target.value }))
                  }
                />
              </div>

              <div className="flex flex-col mt-3 lg:w-1/2">
                <label>End date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
                  value={education.endDate}
                  onChange={(e) =>
                    dispatch(handleChange({ index, field: 'endDate', value: e.target.value }))
                  }
                  onBlur={(e) =>
                    dispatch(handleChange({ index, field: 'endDate', value: e.target.value }))
                  }
                />
                {dateErrors[index] && (
                  <p className="text-red-500 text-sm mt-1">{dateErrors[index]}</p>
                )}
              </div>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={education.isStudent}
                  onChange={(e) =>
                    dispatch(handleChange({ index, field: 'isStudent', value: e.target.checked }))
                  }
                />
                <p className="font-light text-[14px] text-[#002156]">I am still a student</p>
              </label>
            </div>

            <div className="flex space-x-4">
              <div className="mt-3 w-full">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="p-2 mt-1 border border-[#0061F9] outline-none bg-[#F7FCFF] w-full rounded"
                  value={education.location}
                  onChange={(e) =>
                    dispatch(handleChange({ index, field: 'location', value: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end gap-4 mt-4">
          {educations.length > 1 && (
            <button
              type="button"
              className="text-red-500 hover:text-red-700 text-sm"
              onClick={() => dispatch(removeEducation(educations.length - 1))}
            >
              - Remove section
            </button>
          )}

          <button
            type="button"
            className="text-blue-500 hover:text-blue-700 text-sm"
            onClick={() => dispatch(addEducation())}
          >
            + Add education
          </button>
        </div>

        {message && (
          <p className="text-red-500 lg:-mt-5 text-[14px]">{message}</p>
        )}
      </div>
    </section>
  );
};

export default EducationCard;
