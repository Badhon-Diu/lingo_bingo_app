import { Code, Heart, Sparkles } from "lucide-react";
import NProgress from "nprogress";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
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
      <div className="mt-20 space-y-5">
        <section className="bg-gradient-to-r  from-[#40006f] my-20 to-[#ff3a6b] text-white py-12 md:py-20py-12 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="text-3xl md:text-4xl font-bold mb-4"
                data-aos="fade-up"
              >
                About Lingo Bingo
              </h1>
              <p
                className="text-lg mb-6 text-white/80"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Our mission is to make Japanese language learning accessible,
                enjoyable, and effective for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <div className="p-5 my-6">
          <section className="section">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#36005c]">
                    Our Story
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Lingo Bingo was created by a team of language enthusiasts
                    and educators who believe that learning a new language
                    should be an engaging and rewarding experience. We found
                    that many language learners struggle with vocabulary
                    retention, so we designed a platform specifically focused on
                    making vocabulary learning more effective through context
                    and interactive methods.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our approach combines visual learning, audio pronunciation,
                    contextual examples, and spaced repetition to help learners
                    not just memorize words, but truly understand when and how
                    to use them in real conversations.
                  </p>

                  <Link
                    to="/start-learning"
                    className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                  >
                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                      <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                      <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                    </span>
                    <span className="relative text-white">
                      Start Learning Now
                    </span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-6" data-aos="fade-left">
                  <div className="card p-6 border-l-4 border-[#ff6388]">
                    <h3 className="text-xl font-semibold mb-3 text-[#36005c]">
                      Our Values
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <Sparkles
                          size={18}
                          className="text-[#ff6388] mt-1 mr-2 flex-shrink-0"
                        />
                        <span>
                          <strong>Accessibility:</strong> We believe language
                          learning should be accessible to everyone, regardless
                          of background or resources.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles
                          size={18}
                          className="text-[#ff6388] mt-1 mr-2 flex-shrink-0"
                        />
                        <span>
                          <strong>Engagement:</strong> Learning is most
                          effective when it's enjoyable and interactive.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles
                          size={18}
                          className="text-[#ff6388] mt-1 mr-2 flex-shrink-0"
                        />
                        <span>
                          <strong>Practicality:</strong> We focus on vocabulary
                          that learners will actually use in real-life
                          situations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles
                          size={18}
                          className="text-[#ff6388] mt-1 mr-2 flex-shrink-0"
                        />
                        <span>
                          <strong>Community:</strong> We foster a supportive
                          community of learners to encourage progress and shared
                          growth.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Technology Section */}
        <div className="p-5 my-6 ">
          <section className="section bg-gray-50">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4 text-[#36005c]"
                  data-aos="fade-up"
                >
                  Built With Modern Technology
                </h2>
                <p
                  className="text-gray-600 max-w-2xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Lingo Bingo leverages the latest web technologies to create a
                  seamless and responsive learning experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="card p-6 text-center border flex items-center gap-4 border-gray-200"
                  data-aos="fade-up"
                >
                  <div className="inline-flex  items-center justify-center w-12 h-12 bg-[#dbd0e7] text-[#4b0082] rounded-full mb-4">
                    <Code size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#36005c]">
                    React
                  </h3>
                  <p className="text-gray-600">
                    Built with React for a dynamic and responsive user interface
                    that updates in real-time as you interact with the app.
                  </p>
                </div>

                <div
                  className="card p-6 text-center border flex items-center gap-4 border-gray-200"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#fee5eb] text-[#ff6388] rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#36005c] ">
                    Tailwind CSS
                  </h3>
                  <p className="text-gray-600">
                    Styled with Tailwind CSS for a clean, modern, and fully
                    responsive design that works on all devices.
                  </p>
                </div>

                <div
                  className="card p-6 text-center border flex items-center gap-4 border-gray-200"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#fff4c6] text-[#e6c200] rounded-full mb-4">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#36005c]">
                    Passion Project
                  </h3>
                  <p className="text-gray-600">
                    Created with love and attention to detail by language
                    enthusiasts who are committed to making learning enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="p-5 my-14 ">
          {/* Call to Action */}
          <section className="section bg-primary-50">
            <div className="container-custom text-center">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-secondary-700"
                data-aos="fade-up"
              >
                Ready to Start Your Japanese Journey?
              </h2>
              <p
                className="text-gray-600 mb-8 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Join thousands of learners who are building their Japanese
                vocabulary skills with Lingo Bingo's interactive approach.
              </p>
              <div data-aos="fade-up" data-aos-delay="200">
                <Link
                  to="/start-learning"
                  className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">
                    Start Learning Now
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
