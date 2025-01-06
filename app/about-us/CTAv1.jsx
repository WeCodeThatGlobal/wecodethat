// export const cta_1 = {
//   item: (
//     <p>
//       Is Your Business Audit-Ready? ONE CALL TAX Can Help! Stay ahead of audits
//       and ensure GST compliance with our experienced team.
//     </p>
//   )
// };

const CTAv1 = ({ cta }) => {
  return (
    <section>
      <div className="bg-gray-900 ">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h3
              className="font-display max-w-2xl text-2xl leading-relaxed font-semibold text-white"
              id="exports-without-gst-object-object-yes-its-possible-heres-how"
            >
              Start Your Project Today <br /> Let’s make your vision a reality!
            </h3>
          </div>
          <div className=" flex items-center justify-center">
            <a
              href="#"
              className="rounded-md bg-white px-11 py-2.5 text-sm font-semibold hover:text-white hover:bg-black hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  hover:shadow-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book a Free Call
              <span aria-hidden="true" className="ml-4">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAv1;
