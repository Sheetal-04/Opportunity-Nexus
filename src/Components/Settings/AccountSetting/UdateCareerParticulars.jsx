import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { updateCareerParticular } from "../../../Services/Operations/SocialLinks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";

const LookupData = [
  "Choose Your Type of job",
  "Full-Time",
  "Internship",
  "Not-Specified",
];
const WorkModeData = [
  "Choose Your Work Mode",
  "WORK FROM HOME",
  "IN-OFFICE",
  "Hybrid",
];
export default function UdateCareerParticulars() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [skills, setSkills] = useState([]);
  const handleSkillsSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newSkills = event.target.value.trim();
      if (newSkills && !skills.includes(newSkills)) {
        setSkills([...skills, newSkills]);
        event.target.value = " ";
      }
    }
  };
  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter((skill) => skill !== skillToDelete));
  };
  const submitHandler = async (data) => {
    try {
      data.skills = skills;
      console.log(token, data);
      const result = await updateCareerParticular(data, token);
      if (result) {
        navigate("/dashboard/my-profile");
      }
    } catch (error) {
      console.log("Error ", error.message);
    }
  };
  return (
    <>
      <form action=" " onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-y-4 rounded-md border-[1px] dark:border-richblack-700 dark:bg-richblack-800 p-8 sm:px-6">
          <h2 className="sm:text-2xl text-xl font-bold dark:text-richblack-5 mb-8 text-center sm:text-start  ">
            Career Details
          </h2>
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="projectName" className="label-style">
              Your Skills
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              className="input-style"
              placeholder="Enter Your Skills"
              onKeyDown={handleSkillsSubmit}
              {...register("skills")}
            />
            {errors.skills && (
              <span className="error-style">Enter your skills </span>
            )}
            <div>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-semibold text-sm flex  items-center gap-x-1 "
                >
                  {skill}
                  <button
                    type="button"
                    className="text-center "
                    onClick={() => handleDeleteSkill(skill)}
                  >
                    <FaDeleteLeft />
                  </button>
                  {"  "}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col gap-2 w-full">
            <label htmlFor="workExperience" className="label-style">
              <div className="flex items-center gap-x-1">Work Experience</div>
            </label>
            <input
              type="text"
              name="workExperience"
              id="workExperience"
              placeholder="Enter Your Work Experience"
              className="input-style"
              {...register("workExperience")}
            />
          </div>
          <div className="relative flex flex-col gap-2 w-full">
            <label htmlFor="achievements" className="label-style">
              <div className="flex items-center gap-x-1">Achievements</div>
            </label>
            <input
              type="text"
              name="achievements"
              id="achievements"
              placeholder="Enter Your  Achievements"
              className="input-style"
              {...register("achievements")}
            />
          </div>
          <div className="flex flex-col  sm:w-full space-y-2 sm:mt-1 mt-3   ">
            <label htmlFor="oppToLookFor" className="label-style">
              What you are looking for
            </label>
            <select
              type="text"
              name="oppToLookFor"
              id="oppToLookFor"
              placeholder="Choose Opp to Look for"
              className="border border-gray-300 text-black dark:text-richblack-5 bg-gray-50 dark:bg-richblack-700 dark:border-none rounded-lg w-full px-3 py-3 shadow-[0_1px_0_0] shadow-white/25"
              {...register("oppToLookFor")}
            >
              {LookupData.map((element, i) => (
                <option key={i} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col  sm:w-full space-y-2 sm:mt-1 mt-3   ">
            <label htmlFor="workModeChoice" className="label-style">
              Work Mode
            </label>
            <select
              type="text"
              name="workModeChoice"
              id="workModeChoice"
              className="border border-gray-300 text-black dark:text-richblack-5 bg-gray-50 dark:bg-richblack-700 dark:border-none rounded-lg w-full px-3 py-3 shadow-[0_1px_0_0] shadow-white/25"
              {...register("workModeChoice")}
            >
              {WorkModeData.map((element, i) => (
                <option key={i} value={element}>
                  {element}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center sm:justify-end gap-2  flex-wrap">
            <button
              onClick={() => {
                navigate("/dashboard/my-profile");
              }}
              className="cursor-pointer rounded-md dark:bg-red-500 py-2 px-5 font-semibold  dark:text-richblack-5 border dark:border-richblack-700"
            >
              Cancel
            </button>
            <button
              className="bg-primary-600 hover:bg-primary-700 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-white"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
}