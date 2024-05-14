import { useState } from "react";
import { EyeIcon, HomeIcon } from "@heroicons/react/24/solid";
// Define the Dashboard component
const Dashboard = () => {
  // State to handle sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={` ${
          sidebarOpen ? "block" : "hidden"
        } md:block md:w-60 lg:w-64`}
      >
        <div className="px-4 py-6">
          <ul className="space-y-2">
            <li>
              <a
                href="/dashboard"
                className="text-gray-700 hover:text-gray-900"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="md:hidden">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? (
                <EyeIcon className="h-6 w-6" />
              ) : (
                <HomeIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
