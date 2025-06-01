import { Link } from "react-router-dom";

export default function Tutorials() {
  return (
    <>
      <div className="my-20">
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] mx-auto flex-1 w-full">
            <div className="container">
              <div className="p-2 sm:p-4">
                <div
                  className="flex min-h-[300px] sm:min-h-[400px] md:min-h-[480px] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat rounded-lg sm:rounded-xl items-center justify-center p-4 sm:p-6 md:p-8"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUChpJ6CpAdwyErJ32Pk3ZbAbddDw4lkyaxU_IK5AwRX3EcTl3ZZLQEZa7L-SDBf9HQs2q_L1gkPs7bWfZDNL3xTLUUl6uAdWsyDqS78pl3HzunN9wlOG1rnlGdLho4xdz-Cj2Z_dB0cc1d3z6K73-unVl1-H28BOrFdSkdMYefLtPpwPnTultTpPjiNhiodoAMvGagdKu-Wa2srfaKOHC5BQ4HzYNUoz4cXSstF6FkPDbEWKtBL7-XMR-wtukZpji-qsVDCl03rU")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                      Unlock the World of Japanese
                    </h1>
                    <h2 className="text-white text-xs sm:text-sm md:text-base font-normal leading-normal">
                      Embark on your journey to fluency with our comprehensive
                      and engaging online courses. Learn at your own pace, with
                      expert guidance and interactive lessons.
                    </h2>
                  </div>

                  <button>
                    {" "}
                    <Link
                      to="/start-learning"
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      <span className="relative">Get Started</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-[#111418] text-lg sm:text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Learning Modules
            </h2>
            <div className="p-2 sm:p-4">
              <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-4 sm:flex-[2_2_0px]">
                  <div className="flex flex-col gap-3">
                    <p className="text-[#111418] text-base font-bold leading-tight">
                      Beginner's Japanese
                    </p>
                    <p className="text-[#637488] text-sm font-normal leading-normal">
                      Master the fundamentals of Japanese, including basic
                      grammar, vocabulary, and essential phrases for everyday
                      conversations.
                    </p>
                  </div>

                  <button className="flex">
                    <a
                      href="#_"
                      className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                        Learn More
                      </span>
                    </a>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl sm:flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoE5-vds56_zRN2f3POX39kkvqQEp7ziWZx0GAPW5dAfotOlquljSV5DCrisRzXUjlC0mn0kMFRpe7L6ebxSj0_IE3gYE1J8PzPIqbywrhwPpLprlxSPatjH2lYcLu4O3rK7QaGMHwIXwD453Iao35craPB26GzYhgc1wI9e5Fd5_OLbxuhRR5Eswc9LtNSptTMqjPu5HJsmNVHjE0gbE5JFkjzI9NpTC4QEuZE884Z_qm--0dHusQ-eVDWlwtP19r4OXdIWq4bZ8")',
                  }}
                />
              </div>
            </div>
            <div className="p-2 sm:p-4">
              <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-4 sm:flex-[2_2_0px]">
                  <div className="flex flex-col gap-3">
                    <p className="text-[#111418] text-base font-bold leading-tight">
                      Intermediate Japanese
                    </p>
                    <p className="text-[#637488] text-sm font-normal leading-normal">
                      Enhance your language skills with more complex grammar,
                      expand your vocabulary, and practice real-life scenarios.
                    </p>
                  </div>
                  <button className="flex">
                    <a
                      href="#_"
                      className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                        Learn More
                      </span>
                    </a>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl sm:flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcNBu6FbXAxM1hWGEZi1B_9O00gCB5UHaxEiZSy7Cz-YkNRDC8Rd77DyMPgBXez5WdZW_PmQQ7-gbo7RwZZdDVnqybX73YNPdAgvFa--HEwu0H57ouD5EakPMye1bv9Z9qge6Kvqlb9GAxC7HCZ4smjT_eqKmK8q0qB97MjwrNIpQHJtTDQDGLQpcDTj0Ony0lP7fUPjRldQcprv920XE38oIMyzJL1BAl8CB3aXFlcvYBOoeFASc0O_qSmZ0tpoDbIGhG2VCvdwE")',
                  }}
                />
              </div>
            </div>
            <div className="p-2 sm:p-4">
              <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-col gap-4 sm:flex-[2_2_0px]">
                  <div className="flex flex-col gap-3">
                    <p className="text-[#111418] text-base font-bold leading-tight">
                      Advanced Japanese
                    </p>
                    <p className="text-[#637488] text-sm font-normal leading-normal">
                      Achieve fluency with advanced grammar, nuanced
                      expressions, and in-depth cultural insights. Prepare for
                      professional or academic settings.
                    </p>
                  </div>
                  <button className="flex">
                    <a
                      href="#_"
                      className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                        Learn More
                      </span>
                    </a>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl sm:flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpds5BVIgZkbiqbJZ_vA5sIPHZGzjNkS98a1IlB4MTT6xM6nljkXGAk1L_FSPv6zt3TW1h-mATG4efVjuxCcOOK_C7KMIhoAr9HfWz1BoR4kYv4ak8tRmiXrHr1xe8l7P3bQMK1tJIT5fe9jNEZcmIju9xUNpgpNFN52-xOhCILKgdFlB2wZ-9jE9oHiaoNC79ZPA4I8JgtwbNvo69c5xoB13KB1k-r5ZnCP8DzYQ2xg_djBWMbmw34nbVq7gihOs8VMIgeFrlyq4")',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
