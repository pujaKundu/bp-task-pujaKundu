import React from 'react'

const About = () => {
  return (
    <div className="text-left lg:ml-28 mt-56 lg:w-[45em]">
      <h1 className="text-[#192733] text-[50px] font-bold pb-5 space-y-4 mx-8">
        {" "}
        About Us
      </h1>
      <div className="mx-8">
        <p className="py-5 text-black">
          Desh Career is Career based newsletter in Bengali language. This
          newsletter has published weekly. This is published in every Saturday
          at 12.00 PM.
        </p>
        <p className="text-black">
          We focus on Career trend, news, smart job etc.
        </p>
        <p className="text-black">
          If you want to contact us: you can send an email to
          <a className="text-blue-600 ml-2  hover:underline">
            contact.deshcareer@gmail.com
          </a>{" "}
        </p>
        <p className="text-black my-5">
          If you want to meet with us, you can come to our office based on an
          appointment.
        </p>
        <p className="text-black my-5">
          If you want to meet with us, you can come to our office based on an
          appointment.
        </p>
        <p className="text-black my-5">House: 13/3,</p>
        <p className="text-black my-5">Road: 2,</p>
        <p className="text-black my-5">Shyamoly, Dhaka-1207</p>
        <p className="text-black my-5">+8801880811047</p>
      </div>
    </div>
  );
}

export default About