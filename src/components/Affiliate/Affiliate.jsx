import React from 'react'

const Affiliate = () => {
  return (
    <div className="text-left lg:ml-28 mt-56 lg:w-[45em]">
      <h1 className="text-[#192733] text-[50px] font-bold pb-5 space-y-4 mx-8">
        {" "}
        Search your Invitation
      </h1>
      <div className="flex items-center justify-center shadow-lg rounded my-2 mx-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>

        <input
          className="p-5 w-[400px] pl-8 placeholder-gray-500"
          placeholder="Your E-mail address"
          type="text"
        />
        <button className="bg-[#DC3545] text-white w-52 sm:w-44 rounded">
          Join Free
        </button>
      </div>
    </div>
  );
}

export default Affiliate