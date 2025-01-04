import React from "react";

const Item = () => {
  return (
    <div className="p-5">
      <div className="py-[40px] shadow-sm rounded-lg border bg-white flex flex-col items-center">
        <img
          className="rounded-[50%] w-28 mb-4"
          src="/team/team1.jpg"
          srcSet="./assets/img/avatars/te3@2x.jpg 2x"
          alt="image"
        />
        <h4 className="mb-2 font-semibold">Nikolas Brooten</h4>
        <div className="text-xs mb-4 uppercase tracking-[0.02rem] font-bold text-[#aab0bc]">
          Sales Manager
        </div>

        <div className="flex gap-3 items-center !mb-0">
          <a
            className=" transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
            href="#"
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
  );
};

export default Item;
