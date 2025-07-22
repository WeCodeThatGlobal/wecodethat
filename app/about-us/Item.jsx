import React from "react";

const Item = ({ avatar, name, designation, link }) => {
  return (
    <div className="p-5">
      <div className="image-hover position-relative overflow-hidden h-full">
        <div className="py-[40px] shadow-sm rounded-lg border flex flex-col items-center h-full bg-gray-950">
          <div className="">
            <img
              className="rounded-[50%] w-20 mb-4 image-hover"
              src={avatar}
              srcSet={avatar}
              alt="image"
            />
          </div>

          <h4 className="mb-2 font-semibold text-white">{name}</h4>
          <div className="text-xs mb-4 uppercase tracking-[0.02rem] font-bold text-[#aab0bc] text-center">
            {designation}
          </div>

          <div className="flex gap-3 items-center !mb-0">
            <a
              className=" transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
              href={link}
              target="blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4470cf"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
