import React from "react";

const Item = () => {
  return (
    <div className="p-5">
      <div className="p-[40px] shadow-sm rounded-lg border bg-white">
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
        <p className="mb-3 text-gray-600 text-base/7">
          Fermentum massa justo sit amet risus morbi leo.
        </p>
        <nav className="flex gap-3 items-center !mb-0">
          <a
            className="transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4470cf"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
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
              stroke="#e94d88"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-dribbble"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Item;
