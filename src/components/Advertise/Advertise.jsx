import React from 'react'

const Advertise = () => {
  return (
    <div className="text-left lg:ml-28 mt-56 lg:w-[45em]">
      <h1 className="text-[#192733] text-[50px] font-bold pb-5 space-y-4 mx-8">
        {" "}
        Advertisement
      </h1>
      <div className="mx-8">
        <p className="py-5 text-black">Our audience age is 20-35 Year.</p>

        <p className="text-black my-5">We focus on Career related content. </p>
        <p className="text-black my-5">
          If you want to promote your product to our audience, you can give
          advertisement, Sponsored Content.
        </p>
        <p className="text-black">
          Our contact email:
          <a className="text-blue-600 ml-2  hover:underline">
            contact.deshcareer@gmail.com
          </a>{" "}
          and phone number: +8801880811047
        </p>
      </div>
    </div>
  );
}

export default Advertise