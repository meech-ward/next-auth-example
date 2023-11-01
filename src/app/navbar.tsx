import Link from "next/link"

import { twMerge } from "tailwind-merge"

export default async function NavBar({ className }: { className?: string }) {

  return (
    <nav className={twMerge("flex h-full justify-between items-center", className)}>
      <Link
        href="/"
        className="hover:bg-neutral-100 dark:hover:bg-neutral-900 flex justify-center items-center h-14 w-20 rounded-md transition-all fill-none stroke-neutral-600"
      >
        <svg className="w-7 h-7 stroke-2" aria-label="Home" viewBox="0 0 26 26" role="img">
          <title>Home</title>
          <path d="M2.25 12.8855V20.7497C2.25 21.8543 3.14543 22.7497 4.25 22.7497H9.25C9.52614 22.7497 9.75 22.5258 9.75 22.2497V17.6822V16.4997C9.75 14.7048 11.2051 13.2497 13 13.2497C14.7949 13.2497 16.25 14.7048 16.25 16.4997V17.6822V22.2497C16.25 22.5258 16.4739 22.7497 16.75 22.7497H21.75C22.8546 22.7497 23.75 21.8543 23.75 20.7497V12.8855C23.75 11.3765 23.0685 9.94814 21.8954 8.99882L16.1454 4.34539C14.3112 2.86094 11.6888 2.86094 9.85455 4.34539L4.10455 8.99882C2.93153 9.94814 2.25 11.3765 2.25 12.8855Z"></path>
        </svg>
      </Link>
      <Link
        href="/search"
        className="hover:bg-neutral-100 dark:hover:bg-neutral-900 flex justify-center items-center h-14 w-20 rounded-md transition-all fill-none stroke-neutral-600 text-neutral-600"
      >
        <svg className="w-7 h-7 stroke-0" aria-label="Search" viewBox="0 0 26 26" role="img">
          <title>Search</title>
          <path
            className="fill-current"
            d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z"
          ></path>
        </svg>
      </Link>
      <Link
        href={"/create"}
        className="hover:bg-neutral-100 dark:hover:bg-neutral-900 flex justify-center items-center h-14 w-20 rounded-md transition-all fill-none stroke-neutral-600"
      >
        <svg className="w-7 h-7 stroke-2" aria-label="Create" viewBox="0 0 26 26" role="img">
          <title>Create</title>
          <path d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25"></path>
          <path d="M21.75 4.25L13.75 12.25"></path>
        </svg>
      </Link>
      <Link
        href="/activity"
        className="hover:bg-neutral-100 dark:hover:bg-neutral-900 flex justify-center items-center h-14 w-20 rounded-md transition-all fill-none stroke-neutral-600"
      >
        <svg className="w-7 h-7 stroke-2" aria-label="Notifications" viewBox="0 0 26 26" role="img">
          <title>Notifications</title>
          <path d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"></path>
        </svg>
      </Link>
      <Link
        href="/me"
        className="hover:bg-neutral-100 dark:hover:bg-neutral-900 flex justify-center items-center h-14 w-20 rounded-md transition-all fill-none stroke-neutral-600"
      >
        <svg className="w-7 h-7 stroke-2" aria-label="Profile" viewBox="0 0 26 26" role="img">
          <title>Profile</title>
          <circle cx="13" cy="7.25" r="4"></circle>
          <path d="M6.26678 23.75H19.744C21.603 23.75 22.5 23.2186 22.5 22.0673C22.5 19.3712 18.8038 15.75 13 15.75C7.19625 15.75 3.5 19.3712 3.5 22.0673C3.5 23.2186 4.39704 23.75 6.26678 23.75Z"></path>
        </svg>
      </Link>
    </nav>
  )
}
