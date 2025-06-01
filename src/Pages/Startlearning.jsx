import NProgress from "nprogress";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
export default function Startlearning() {
  const alldata = useLoaderData();

  useEffect(() => {
    // Start progress bar when component mounts
    NProgress.start();

    // Simulate loading
    const timer = setTimeout(() => {
      NProgress.done();
    }, 800); // Adjust time as needed

    // Clean up on unmount
    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r  from-[#40006f] my-20 to-[#ff3a6b] text-white py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              Start Learning Japanese Vocabulary
            </h1>
            <p
              className="text-lg mb-8 text-white/80"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Choose from our structured lessons designed to build your
              vocabulary from beginner to advanced. Each lesson focuses on
              related words to help you communicate effectively in Japanese.
            </p>
            <div
              className="flex justify-center space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="#lessons">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Browse Lessons
                </button>
              </a>
              <Link to="/tutorials">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Watch Tutorial
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-11/12 mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold mb-2 text-secondary-700"
          data-aos="fade-up"
        >
          Our Lessons
        </h2>
        <p
          className="text-gray-600 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Start with the basics and work your way up through our comprehensive
          curriculum.
        </p>
      </div>

      {/* grid */}
      <div
        id="lessons"
        className="grid justify-center w-11/12 mx-auto  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-16"
      >
        {/* Start of one card */}
        {/* You can copy and repeat this div 10 times */}
        {/* Example below repeated with slight changes to word/lesson number */}
        {/* Loop (or paste) begins */}
        {/* Card Component */}
        {/* Repeat this div with different data 10 times */}
        {/* CARD TEMPLATE START */}
        {/* JavaScript-like way to simulate 10 similar cards */}
        {/* Below are 10 hardcoded cards for HTML */}
        {/* CARD 1 */}

        {alldata.map((singledata) => (
          <div className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9"
              alt="Lesson Image"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-800">
                  {singledata.word}
                </h2>
                <span
                  className={`text-sm ${
                    singledata.difficulty === "easy" &&
                    " bg-green-100 text-green-800 "
                  } px-2 py-1 ${
                    singledata.difficulty === "medium" &&
                    " bg-yellow-100 text-yellow-800 "
                  } rounded-full ${
                    singledata.difficulty === "hard" &&
                    " bg-red-100 text-red-800 "
                  }   `}
                >
                  {singledata.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-500 italic mb-2">
                Pronunciation :{" "}
                <span className="font-medium text-gray-700">
                  {singledata.pronunciation}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">Meaning : </span>{" "}
                {singledata.meaning}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                <div>
                  <span className="font-semibold text-gray-700">
                    Part of Speech :
                  </span>
                  <p className="text-gray-600">{singledata.part_of_speech}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Lesson No :
                  </span>
                  <p className="text-gray-600">{singledata.lesson_no}</p>
                </div>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">
                  When to Say :
                </span>
                <p className="text-gray-600">{singledata.when_to_say}</p>
              </div>
              <div className="bg-gray-50 border-l-4 border-blue-400 p-3 rounded-md">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">Example :</span>
                </p>
                <p className="text-gray-700 italic">{singledata.example}</p>
              </div>
              <button className="btn btn-secondary my-4 ">
                <Link to={`/lesson/${singledata.lesson_id}`}>View More</Link>
              </button>
            </div>
          </div>
        ))}

        {/* Duplicate with slight changes for cards 2 to 10 */}
      </div>
    </>
  );
}
