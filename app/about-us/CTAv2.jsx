// export const cta_1 = {
//   item: (
//     <p>
//       Is Your Business Audit-Ready? ONE CALL TAX Can Help! Stay ahead of audits
//       and ensure GST compliance with our experienced team.
//     </p>
//   )
// };

const CTAv2 = ({ cta }) => {
  return (
    <section>
      <div className="bg-gray-900 ">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h3
              className="font-display max-w-2xl text-2xl font-semibold tracking-tight text-white"
              id="exports-without-gst-object-object-yes-its-possible-heres-how"
            >
              Let’s Build Your Vision <br /> From websites to apps we’ve got you
              covered!
            </h3>
          </div>
          <div className=" flex items-center justify-center">
            <a
              href="/contact-us"
              className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-neutral-50 hover:text-blue-600 px-6 font-semibold text-sm text-neutral-50 "
            >
              <span className="absolute h-48 w-44 rounded-full bg-blue-600 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
              <span className="relative">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAv2;
