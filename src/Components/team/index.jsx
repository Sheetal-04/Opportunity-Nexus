import NandaniAvatar from "../../assets/team/avatar-nandani.png";

const people = [
  {
    name: "Nandani Paliwal",
    role: "Reactjs Developer",
    imageUrl: NandaniAvatar,
    twitterUrl: "https://twitter.com/Nandanipaliwal",
    linkedinUrl: "https://www.linkedin.com/in/nandanipaliwal/",
  },
  {
    name: "Sheetal Tyagi",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vishwajeet",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Aman kumar Gupta",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Prashant Dubey",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Team() {
  return (
    <div className="dark:bg-gray-900 bg-gray-100 max-w-7xl mx-auto">
      <div className=" py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white text-black">
              Meet our team
            </h2>
            <p className="text-xl font-medium tracking-tighter text-gray-500 dark:text-gray-300">
              Our platform is driven by a passionate and diverse team dedicated
              to simplifying your journey to career success. We're here to make
              your search for opportunities seamless and rewarding. Get to know
              the faces behind your success.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-4 sm:gap-16 sm:space-y-0 sm:[&>*:nth-child(1)]:col-start-1 sm:[&>*:nth-child(1)]:col-end-3 sm:[&>*:nth-child(2)]:col-start-3 sm:[&>*:nth-child(2)]:col-end-5 sm:[&>*:nth-child(3)]:col-start-1 sm:[&>*:nth-child(3)]:col-end-3 sm:[&>*:nth-child(4)]:col-start-3 sm:[&>*:nth-child(4)]:col-end-5 sm:[&>*:nth-child(5)]:col-start-2 sm:[&>*:nth-child(5)]:col-end-4
          
            lg:grid-cols-6 lg:max-w-5xl lg:[&>*:nth-child(1)]:col-end-3 lg:[&>*:nth-child(1)]:col-start-1 lg:[&>*:nth-child(2)]:col-end-5 lg:[&>*:nth-child(2)]:col-start-3 lg:[&>*:nth-child(3)]:col-end-7 lg:[&>*:nth-child(3)]:col-start-5 lg:[&>*:nth-child(4)]:col-end-4 lg:[&>*:nth-child(4)]:col-start-2 lg:[&>*:nth-child(5)]:col-end-6 lg:[&>*:nth-child(5)]:col-start-4 "
          >
            {people.map((person) => (
              <li key={person.name} className="">
                <div className="space-y-6">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-black dark:text-white">
                        {person.name}
                      </h3>
                      <p className="text-primary-600">{person.role}</p>
                    </div>
                    <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <a
                          href={person.twitterUrl}
                          target="blank"
                          className="dark:text-gray-400 text-gray-600 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          target="blank"
                          className="dark:text-gray-400 text-gray-600  hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
