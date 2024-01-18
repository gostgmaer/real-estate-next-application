// components/DashboardLayout.js
import Layout from "@/components/global/layout";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <Layout>
      <div className="flex min-h-screen ">
        {/* Sidebar */}
        <div className="w-1/5 p-4 bg-white border dark:bg-gray-700 dark:border-gray-500">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <ul>
            <li className="mb-2">
              <Link href="/">
              Home
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/listing">
               Listing
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/my-profile">
              Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-800">{children}</div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
