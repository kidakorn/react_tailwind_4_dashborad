import { Link } from "react-router";

export default function Navbar() {
  // main menu
  const navigation = [
    { name: "Company", path: "/company" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  //product menus
  const productMenus = [
    { name: "Analytics", href: "#" },
    { name: "Engagement", href: "#" },
    { name: "Security", href: "#" },
    { name: "Integrations", href: "#" },
  ];

  // feature menus
  const featureMenus = [
    { name: "Manegement", href: "#" },
    { name: "Collaboration", href: "#" },
    { name: "Developer API", href: "#" },
    { name: "Mobile App", href: "#" },
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container px-8 py-4 mx-auto xl:px-0">
        <nav className="relative flex flex-wrap items-center justify-between mx-auto lg:justify-between max-w-screen-xl">
          {/* logo */}
          <Link to="/">
            <span className="flex items-center space-x-2 text-2xl font-semibold dark:text-white">
              <span>
                <img
                  src="/react_tailwind_4_dashborad/public/images/wrlogo.png"
                  alt=""
                  className="w-8"
                />
              </span>
              <span>WindReact</span>
            </span>
          </Link>

          {/* desktop menu */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {/* product Dropdown */}
              <li className="relative mr-3">
                <button
                  className="inline-flex items-center px-4 py-2 text-lg font-normal no-underline rounded-md 
							hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 focus:text-indigo-500
							focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-hidden"
                >
                  Product
                  <svg
                    className={`ml-2 h-5 w-5 transform`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div className="absolute left-0 w-48 mt-4 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                  <div className="py-1">
                    {productMenus.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block w-full px-4 py-2 text-lg font-normal text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              {/* feature Dropdown */}
              <li className="relative mr-3">
                <button
                  className="inline-flex items-center px-4 py-2 text-lg font-normal no-underline rounded-md 
							hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 focus:text-indigo-500
							focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-hidden"
                >
                  Features
                  <svg
                    className={`ml-2 h-5 w-5 transform`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div className="absolute left-0 w-48 mt-4 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                  <div className="py-1">
                    {featureMenus.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block w-full px-4 py-2 text-lg font-normal text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              {/* other menu */}
              {navigation.map((item) => (
                    <li className="mr-3" key={item.name}>
                      <Link
                        to={item.path}
                        className={`inline-block px-4 py-2 text-lg font-normal rounded-md hover:text-indigo-500
                          focus:text-indigo-500 focus:bg-indigo-100 focus:outline-hidden`}
                      >
                        {item.name}
                      </Link>
                    </li>
              ))}

            </ul>
          </div>

          {/* Button sign in */}
          <div className="flex items-center gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <div className="hidden mr-3 lg:flex nav__item">
              <Link 
                to="/login"
                className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Sign In
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
