import { useState } from "react";
import toast from "react-hot-toast";
import CustomModal from "../CustomModal";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ApplyModal = ({ opportunity, isOpen, setIsOpen }) => {
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);
  const navigate = useNavigate();

  const [answerValue, setAnswerValue] = useState(null);

  async function applyToOpportunity() {
    try {
      if (answerValue) {
        toast.error("Please fill up the answer first to apply");
        return;
      }

      // ! TODO: backend call here

      const response = {}; // placeholder for now
      if (response.data.success) {
        toast.success("Successfully applied to opportunity!");
        setIsApplicationSubmitted(true);
      } else {
        throw new Error("Something went wrong while applying to opportunity");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  return (
    <>
      <CustomModal
        closeModal={() => {
          setIsOpen(() => false);
        }}
        isOpen={isOpen}
      >
        <div className="lg:min-w-lg flex w-full flex-col items-center justify-center gap-4 py-5">
          {!isApplicationSubmitted ? (
            <>
              <p className="max-w-lg text-center text-xl font-medium text-gray-500 dark:text-gray-300 py-2">
               Your details will be shared, make sure all the deatils are updated!!
              </p>

              <form
                className="flex w-full max-w-md flex-col items-center justify-center gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  applyToOpportunity().catch((error) => console.error(error));
                }}
              >
                {/* <div className="flex w-full flex-col gap-3">
                  <textarea
                    label="Your product description (optional)"
                    id="description"
                    type="text"
                    onChangeHandler={(e) => {
                      setAnswerValue(() => e.target.value);
                    }}
                    placeholder="Description"
                    fullWidth
                    value={answerValue}
                    className="dark:bg-gray-950 bg-white"
                  />
                </div> */}

                <div className="flex flex-col justify-center gap-2 items-center w-full">
                  <button
                    className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium  rounded-md text-white bg-primary-500 hover:bg-primary-700 cursor-pointer w-full"
                    type="submit"
                  >
                    Submit
                  </button>

                  <button
                    onClick={() => {
                      navigate("/dashboard/my-settings");
                    }}
                    className="inline-flex items-center justify-center px-3 py-2 border border-black dark:border-white text-base font-medium  rounded-md text-black dark:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white cursor-pointer w-full"
                    type="submit"
                  >
                    Update Details
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <p className="flex max-w-lg flex-col gap-4 text-center">
                <span>Successfully applied to opportunity!!</span>
                <FaCheckCircle className="mx-auto h-10 w-10 text-green-500" />
              </p>
            </>
          )}
        </div>
      </CustomModal>
    </>
  );
};

export default ApplyModal;
