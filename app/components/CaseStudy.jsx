import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

const CaseStudy = () => {
  return (
    <section className="py-20 bg-[f9f9fb]">
      <div className="max-w-7xl mx-auto px-5 xs:px-10 md:px-12 lg:px-5 space-y-16">
        <Header
          alignment="text-center"
          title="Explore the Stories Behind Our Most Successful Projects"
          subtitle="Case Studies"
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* CARD 1 */}

          <div className="border border-gray-200 rounded-2xl overflow-hidden lg:w-[35%] shrink-0 w-full">
            <div>
              <div className="h-[300px] relative">
                <img
                  src="/caseStudy/chessplay.png"
                  alt="chessplay case study illustration"
                  className="h-full w-full object-fill"
                />
                <p className="bg-indigo-200 text-indigo-800 px-4 py-1 inline-block text-xs font-semibold rounded-2xl absolute bottom-4 left-6">
                  SAAS
                </p>
              </div>
              <div className="p-6">
                <Link href="/case-study-chessplay">
                  <h3 className="text-2xl leading-7 font-semibold text-gray-900">
                    ChessPlay.io The All-in-One LMS Built For Chess Coaches,
                    With Chess Coaches
                  </h3>
                </Link>
                <div className="flex justify-between my-2 items-center">
                  <div className="flex gap-x-6">
                    <p className="text-gray-500 text-sm flex items-center gap-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-dot-icon lucide-dot"
                      >
                        <circle cx="12.1" cy="12.1" r="1" />
                      </svg>
                      Jan 01, 2025
                    </p>
                  </div>
                  <div className="w-10 h-10 border border-gray-200 flex justify-center items-center rounded-full">
                    <Link href="/case-study-chessplay">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#60a5fa"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-8">
            {/* CARD 2 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden flex-1 ">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 bg-gray-600 shrink-0 h-[300px] lg:h-auto relative">
                  <img
                    src="/caseStudy/onecalltax.png"
                    alt="onecalltax case study overview"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pt-6 px-6 flex-1 pb-6 lg:pb-0">
                  <p className="bg-purple-200 text-purple-800 px-4 py-1 lg:inline-block text-xs font-semibold rounded-2xl mb-3 hidden">
                    Website
                  </p>
                  <Link href="/case-study-onecalltax">
                    <h3 className="text-2xl leading-7 font-semibold text-gray-900">
                      Tax Services Website with Integrated Booking System
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center my-2 lg:my-0 lg:mt-1 ">
                    <div className="flex gap-x-6">
                      <p className="text-gray-500 text-sm flex items-center gap-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-dot-icon lucide-dot"
                        >
                          <circle cx="12.1" cy="12.1" r="1" />
                        </svg>
                        Jan 01, 2025
                      </p>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 flex justify-center items-center rounded-full">
                      <Link href="/case-study-onecalltax">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#60a5fa"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden flex-1 ">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 bg-gray-600 shrink-0 h-[300px] lg:h-auto relative">
                  <img
                    src="/caseStudy.webp"
                    alt="Corporate case study overview"
                    className="h-full w-full object-cover"
                  />
                  <p className="bg-amber-200 text-amber-800  px-4 py-1 inline-block text-xs font-semibold rounded-2xl absolute bottom-4 left-6 lg:hidden">
                    Corporate
                  </p>
                </div>
                <div className="pt-6 px-6 flex-1 pb-6 lg:pb-0">
                  <p className="bg-amber-200 text-amber-800 px-4 py-1 lg:inline-block text-xs font-semibold rounded-2xl mb-3 hidden">
                    Corporate
                  </p>
                  <Link href="/">
                    <h3 className="text-2xl leading-7 font-semibold text-gray-900">
                      Presents the Payarin integrated solutions platform for
                      corporate customers
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center my-2 lg:my-0 lg:mt-1 ">
                    <div className="flex gap-x-6">
                      <Link href="/">AFIF</Link>
                      <ul className="list-disc list-outside text-gray-600">
                        <li className="text-gray-500">Jan 01, 2025</li>
                      </ul>
                    </div>
                    <div className="w-10 h-10 border border-gray-200 flex justify-center items-center rounded-full">
                      <Link href="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#60a5fa"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CaseStudy;
