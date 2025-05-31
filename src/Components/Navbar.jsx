import { Cherry } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
const userdata = "new";
function logout() {}
export default function Navbar() {
  return (
    <>
      <div className="">
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-2 rounded-2xl">
          <div className="flex w-11/12 mt-5 mx-auto items-center justify-between">
            <a className="flex items-center" to="/home">
              {" "}
              <Cherry
                size={28}
                className="text-[#ff6388] mr-2 animation-float "
              />
              <span className="text-2xl font-bold text-secondary-600">
                Lingo<span className="text-[#ff6388]">Bingo</span>
              </span>
            </a>

          <div className="dropdown md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Homepage</Link>
                </li>
                <li>
                  <Link to="/tutorials">Tutorials</Link>
                </li>
                <li>
                  <Link to="/learn">Start Learning</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>

            <nav className="hidden text-xl md:flex items-center  space-x-8">
              <NavLink to="/home" className="">
                {" "}
                Home
              </NavLink>
              <NavLink to="/start-learning"> Start Learning</NavLink>
              <NavLink to="/tutorials"> Tutorials</NavLink>
              <NavLink to="/about"> About Us</NavLink>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://images.unsplash.com/photo-1630207831419-3532bcb828d7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                      </Link>
                    </li>

                    <li>
                      <a >Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div>
                <button className="flex items-center gap-2 bg-white text-gray-800 border border-gray-300 px-3 py-[2px] rounded-full shadow hover:shadow-md hover:bg-gray-100 transition">
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google logo"
                    className="w-5 h-5"
                  />
                  Login with Google
                </button>
              </div> */}
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
