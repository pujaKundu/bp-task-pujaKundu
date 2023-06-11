import React from 'react'

const FAQ = () => {
  return (
    <div className="text-left lg:ml-28 mt-56 lg:w-[45em]">
      <h1 className="text-[#192733] text-[50px] font-bold pb-5 space-y-4 mx-8">
        {" "}
        FAQ's
      </h1>
      <div className="mx-8">
        <p className="text-[#192733] text-3xl ">
          How can i subsribe Desh Career Email?
        </p>
        <p className="py-5 text-black">
          You can subscribe this newsletter from . You input you email, then
          follow instruction. After email confirmation, your email address is
          added in our database.
        </p>

        <p className="text-[#192733] text-3xl mt-5">
          I am a subscriber of Desh Career, but I don't find your email. Why?
        </p>
        <p className="py-5 text-black">
          Please check your email. May be our email goes to Promotion tab. If
          you find our email in this tab, please move it to primary tab. Than
          you will find this email in primary tab.
        </p>
      </div>
    </div>
  );
}

export default FAQ