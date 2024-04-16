import React from "react";
import { CalendarIcon } from "@heroicons/react/solid";
import { HiInformationCircle } from "react-icons/hi";
import { IoMdPin } from "react-icons/io";
import {
  FaHourglassEnd,
  FaRupeeSign,
  FaExclamationTriangle,
  FaClock,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { removeBookmarkedOpportunity } from "../../Services/Operations/MyOpportunity";
import { useSelector } from "react-redux";

const OnCampusOpportunityCard = (opportunity) => {
  const isExpired = new Date(opportunity.opportunityFillDate) < new Date();
  const { token } = useSelector((state) => state.auth);

  const handleOpportunityDelete = async () => {
    try {
      console.log("DATA BEFORE DELETE", token, opportunity.frontendId);
      const result = await removeBookmarkedOpportunity(
        opportunity.frontendId,
        token
      );
      if (result) {
        opportunity.setSavedOpportunitiesList((data) =>
          data.filter((i) => i.name !== opportunity.name)
        );
        toast.success("Opportunity removed from your profile!", {
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 overflow-hidden sm:rounded-md w-full">
        <ul className="divide-y divide-gray-200">
          <li>
            <div className=" dark:hover:bg-gray-800 hover:bg-gray-50 group px-4 py-4 sm:px-6 flex flex-col lg:flex-row lg:justify-between w-full gap-16">
              <div className="flex flex-col flex-1 gap-2">
                <p className="text-sm md:text-base font-medium text-black dark:text-white truncate">
                  {opportunity.opportunityName}
                </p>

                <div className="sm:flex items-start">
                  <p className="flex text-sm text-gray-500 md:max-w-lg items-start text-justify">
                    <HiInformationCircle
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 text-start hidden lg:flex"
                      aria-hidden="true"
                    />
                    {opportunity.opportunityDescription
                      ? opportunity.opportunityDescription
                      : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent "}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="font-medium">
                    {opportunity.opportunityRole}
                  </span>
                  |
                  <div className="font-medium flex items-center gap-px">
                    <FaRupeeSign className="h-4 w-4" />
                    <p>{opportunity.opportunityPackage}</p>
                  </div>
                </div>
                <div className="sm:flex items-start">
                  <p className="flex text-sm text-gray-500 md:max-w-lg items-start text-justify">
                    <FaExclamationTriangle
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-300 text-start hidden lg:flex"
                      aria-hidden="true"
                    />
                    {opportunity.eligibilityCriteria
                      ? opportunity.eligibilityCriteria
                      : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent "}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex flex-col flex-1 lg:mr-auto lg:items-end gap-2">
                <div className="mt-2 sm:flex flex-col flex-1 gap-2 items-start">
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center ${
                        isExpired ? "hidden" : ""
                      }`}
                    >
                      <a
                        href={opportunity.applicationUrl}
                        className="inline-flex items-center justify-center px-1 py-1 border border-transparent text-xs rounded-md text-white bg-primary-500 hover:bg-primary-600 cursor-pointer"
                      >
                        Apply now
                      </a>
                    </div>
                    <p className="inline-flex text-xs leading-5 font-semibold">
                      {!isExpired ? (
                        <span className="bg-green-100 text-green-800 px-2 rounded-full">
                          Active
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 px-2 rounded-full">
                          Expired
                        </span>
                      )}
                    </p>
                    <div className="flex items-center justify-center">
                      <button
                        // onClick={handleOpportunityDelete}
                        className="inline-flex items-center justify-center px-1 py-1  border border-primary-600 text-xs font-medium rounded-md text-primary-600 hover:bg-primary-600 hover:text-white"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 gap-px">
                    <CalendarIcon
                      className="flex-shrink-0  h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      {new Date(opportunity.opportunityDriveDate) > new Date()
                        ? "Drive Date"
                        : " Drive Ends"}{" "}
                      {new Date(
                        opportunity.opportunityDriveDate
                      ).toDateString()}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 gap-2">
                    <div className="flex items-center gap-px">
                      {" "}
                      <IoMdPin
                        className="flex-shrink-0 h-4 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <p>
                        {opportunity.opportunityMode === "OFF-LINE" ||
                        opportunity.opportunityMode === "Offline" ? (
                          <span className="uppercase font-medium">
                            {opportunity.opportunityLocation}
                          </span>
                        ) : (
                          <span className="uppercase font-medium">
                            {opportunity.opportunityMode}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center">
                      {opportunity.opportunityMode === "TBD (To Be Decided)" ? (
                        <></>
                      ) : (
                        <div className="flex items-center gap-px">
                          <span className="mr-1">|</span>
                          <FaClock
                            className="flex-shrink-0 h-4 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <p className="uppercase font-medium">
                            {opportunity.opportunityDriveTime}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 gap-px">
                    <FaHourglassEnd
                      className="flex-shrink-0  h-4 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      {new Date(opportunity.opportunityFillLastDate) >
                      new Date()
                        ? "Fill Last Date is"
                        : "Application closed"}{" "}
                      {new Date(
                        opportunity.opportunityFillLastDate
                      ).toDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OnCampusOpportunityCard;
