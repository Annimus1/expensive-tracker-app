import React from "react";

function Card() {
  return (
    <div className=" 
    p-5 rounded-lg mx-5 mt-10 cardShadow bg-gradient-to-tl from-rose-700 from-0% via-blue-700 via-100% 
    md:max-w-[52rem] md:h-96 md:mx-auto md:flex md:flex-col md:justify-around
    ">

      <div className="mb-5 px-5">
        <h1 className="text-slate-100 font-sans text-lg md:text-3xl">Current Balance</h1>
        <h2 className=" text-slate-100 font-sans text-3xl md:text-4xl"> $<span>200.5</span> </h2>
      </div>

      <div className="flex justify-around items-center">

        <p className=" text-slate-100 font-sans md:text-xl"> ****-****-****-<span>0801</span></p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.407 108" className="h-10 w-10 md:h-40 md:w-40">
          <g>
            <rect width="152.407" height="108" fill="none" />
            <g>
              <rect x="60.4117" y="25.6968" width="31.5" height="56.6064" className="fill-[#ff5f00]" />
              <path d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z" transform="translate(-319.79649 -252)" className="fill-[#eb001b]" />
              <path d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z" transform="translate(-319.79649 -252)" className="fill-[#f79e1b]" />
              <path d="M450.76889,328.3077v-1.1589h.4673v-.2361h-1.1901v.2361h.4675v1.1589Zm2.3105,0v-1.3973h-.3648l-.41959.9611-.41971-.9611h-.365v1.3973h.2576v-1.054l.3935.9087h.2671l.39351-.911v1.0563Z" transform="translate(-319.79649 -252)" className="fill-[#f79e1b]" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Card;