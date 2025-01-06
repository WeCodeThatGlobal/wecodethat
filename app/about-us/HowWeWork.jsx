import React from "react";

const HowWeWork = () => {
  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] leading-[1.35]">
          What We Do?
        </h2>
        <h3 className="text-lg font-semibold lg:text-4xl mb-3 !leading-[1.3] text-gray-700">
          Your Vision, Our Expertise <br /> Let’s Build Something Great Together
        </h3>
        <p className="max-w-xl mx-auto text-[17px] leading-relaxed font-medium mb-20 text-gray-500">
          we follow a simple but powerful approach to ensure every project is
          delivered with excellence
        </p>
      </div>
      <div className="mt-5 w-full">
        <div className="grid grid-cols-2 gap-10">
          <div className="pr-3">
            <div className="p-6 flex items-center gap-x-8 border border-gray-200 rounded-3xl bg-[#fef3e4]">
              <div className="w-24 h-20 rounded-xl flex justify-center items-center border border-gray-150 bg-white">
                <img src="/svg/seo.svg" className="w-11" alt="icon" />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold text-gray-900 mb-2">
                  Collaborative Discovery
                </h3>
                <p className="font-light text-gray-600 text-base leading-relaxed transition-none">
                  We begin by understanding your business needs, target
                  audience, and goals.
                </p>
              </div>
            </div>
          </div>
          <div className="pr-3">
            <div className="p-6 flex items-center gap-x-8 border border-gray-200 rounded-3xl bg-[#fae6e7]">
              <div className="w-24 h-20 rounded-xl flex justify-center items-center border border-gray-150 bg-white">
                <img src="/svg/chat-2.svg" className="w-11" alt="icon" />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold text-gray-900 mb-2">
                  Custom Strategy
                </h3>
                <p className="font-light text-gray-600 text-base leading-relaxed transition-none">
                  We develop a tailor-made strategy that aligns with your
                  objectives and budget.
                </p>
              </div>
            </div>
          </div>
          <div className="pr-3">
            <div className="p-6 flex items-center gap-x-8 border border-gray-200 rounded-3xl bg-[#eaf3ef]">
              <div className="w-24 h-20 rounded-xl flex justify-center items-center border border-gray-150 bg-white">
                <img src="/svg/tab.svg" className="w-11" alt="icon" />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold text-gray-900 mb-2">
                  Seamless Execution
                </h3>
                <p className="font-light text-gray-600 text-base leading-relaxed transition-none">
                  Our team of experts implements your solution using the latest
                  technologies and best practices
                </p>
              </div>
            </div>
          </div>
          <div className="pr-3">
            <div className="p-6 flex items-center gap-x-8 border border-gray-200 rounded-3xl bg-[#e0e9fa]">
              <div className="w-24 h-20 rounded-xl flex justify-center items-center border border-gray-150 bg-white">
                <img src="/svg/mics.svg" className="w-11" alt="icon" />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold text-gray-900 mb-2">
                  Continuous Support
                </h3>
                <p className="font-light text-gray-600 text-base leading-relaxed transition-none">
                  Post-launch, we provide ongoing support to ensure your project
                  continues to perform at its best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
