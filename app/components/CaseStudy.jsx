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

          <div className="border border-gray-200 rounded-2xl overflow-hidden lg:w-[35%] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow duration-200">
            <Link href="/case-study/chessplay" className="block">
              <div className="h-[300px] relative">
                <img
                  src="/caseStudy/chessplay.png"
                  alt="chessplay case study illustration"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl leading-7 font-semibold text-gray-900">
                  ChessPlay.io The All-in-One LMS Built For Chess Coaches With
                  Chess Coaches
                </h3>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-y-8">
            {/* CARD 2 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden flex-1 ">
              <Link href="/case-study/onecalltax">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-2/5 bg-gray-600 shrink-0 h-[300px] lg:h-auto relative">
                    <img
                      src="/caseStudy/onecalltax.png"
                      alt="onecalltax case study overview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="pt-12 px-6 flex-1 pb-6 lg:pb-0">
                    <h3 className="text-2xl leading-7 font-semibold text-gray-900">
                      One Platform, All Compliance Digitising India’s Tax &
                      Business Services for One Call Tax
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            {/* CARD 3 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden flex-1 ">
              <Link href="/case-study/veegokit">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-2/5 bg-gray-600 shrink-0 h-[300px] lg:h-auto relative">
                    <img
                      src="/caseStudy/veegokit.png"
                      alt="Corporate case study overview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="pt-12 px-6 flex-1 pb-6 lg:pb-0">
                    <h3 className="text-2xl leading-7 font-semibold text-gray-900">
                      VeeGoKit Driving Trust & Transparency in On-Demand Vehicle
                      Repairs
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CaseStudy;
