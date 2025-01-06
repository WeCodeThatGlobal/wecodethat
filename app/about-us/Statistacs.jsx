const Statistacs = () => {
  return (
    <section
      className="py-20 mx-auto bg-no-repeat bg-center relative z-0 text-center"
      data-image-src="./assets/img/map.png"
      style={{ backgroundImage: "url(/images/map.png)" }}
    >
      <div className="max-w-7xl mx-auto pt-0 pb-10 lg:pt-28 md:pt-24 lg:pb-36 md:pb-32">
        <div className="flex flex-wrap mx-[-15px] mb-4">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto">
            <h3 className="text-lg font-semibold lg:text-4xl mb-3 !leading-[1.3] text-gray-700">
              Big Dreams, Bold Beginnings
            </h3>
            <p className="text-[17px] leading-relaxed font-medium mb-3 text-gray-500 max-w-2xl mx-auto">
              We’re just getting started, but our passion for creating impactful
              digital solutions is boundless. Here’s how far we’ve come
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-10/12 lg:w-9/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full mx-auto">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-20px] xl:mt-0 lg:mt-0 md:mt-0">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center mt-[20px]">
                <h3 className=" text-3xl leading-none mb-2 lg:text-4xl font-semibold text-[#3f78e0]">
                  20+
                </h3>
                <p className="text-base font-medium mb-0">Projects Completed</p>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center mt-[20px]">
                <h3 className=" text-3xl leading-none mb-2 lg:text-4xl font-semibold text-[#3f78e0]">
                  15+
                </h3>
                <p className="text-base font-medium mb-0">Satisfied Clients</p>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center mt-[20px]">
                <h3 className=" text-3xl leading-none mb-2 lg:text-4xl font-semibold text-[#3f78e0]">
                  6+
                </h3>
                <p className="text-base font-medium mb-0">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistacs;
