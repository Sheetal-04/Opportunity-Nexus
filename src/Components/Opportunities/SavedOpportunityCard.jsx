import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/solid";
import { HiInformationCircle } from "react-icons/hi";
import { FaBookmark } from 'react-icons/fa';

const SavedOpportunityCard = (opportunity) => {
  const opportunityName = window.location.pathname.split("/")[2];

  return (
    <>
      <div className="bg-white dark:bg-gray-900 overflow-hidden sm:rounded-md w-full">
        <ul role="list" className="divide-y divide-gray-200">
          <li>
            <Link
              to={opportunity.applicationUrl}
              title="apply"
              className="block dark:hover:bg-gray-800 hover:bg-gray-50 group"
            >
              <div className="px-4 py-4 sm:px-6 flex flex-col lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-base font-medium text-black dark:text-white truncate">
                    {opportunity.name}
                  </p>

                  <div className="sm:flex items-start">
                    <p className="flex text-sm text-gray-500 max-w-[280px] md:max-w-md items-start">
                      <HiInformationCircle
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 text-start hidden lg:flex"
                        aria-hidden="true"
                      />
                      {opportunity.description
                        ? opportunity.description
                            .split(" ")
                            .slice(0, 15)
                            .join(" ") + "..."
                        : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent "}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex flex-col gap-2">
                  <div className="flex-shrink-0 flex">
                    <p className="inline-flex text-xs leading-5 font-semibold">
                      {new Date(opportunity.endDate) > new Date() ? (
                        <span className="bg-green-100 text-green-800 px-2 rounded-full">
                          Active
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 px-2 rounded-full">
                          Expired
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      {new Date(opportunity.endDate) > new Date()
                        ? "Closing on"
                        : " Closed on"}

                      {" "}{new Date(opportunity.endDate).toDateString()}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <FaBookmark
                      className="flex-shrink-0 mr-1.5 h-4 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      Bookmarked on {new Date(opportunity.createdAt).toDateString()}               </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SavedOpportunityCard;
