const client = [
  {
    image: "/team/team1.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa pariatur culpa iste dolore aliquid officia modi quas vel inventore animi, error commodi distinctio eum accusamus? Accusantium, tempora quisquam!",

    name: "John Doe",
    designation: "SEO Kelasi-AI SARL",
  },
  {
    image: "/team/team1.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa pariatur culpa iste dolore aliquid officia modi quas vel inventore animi, error commodi distinctio eum accusamus? Accusantium, tempora quisquam!",

    name: "John Doe",
    designation: "SEO Kelasi-AI SARL",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-6xl mx-auto text-center text-white">
          <p className="px-3 py-1 bg-gray-600 text-white rounded-[4px] font-semibold mb-6 inline-block">
            Our Testimonials
          </p>
          <div className="relative">
            <h3 className="text-6xl font-semibold mb-4 text-white">
              Client's success stories
            </h3>
            <img
              src="images/02-savee-sticker-e1701854191447.png"
              className="w-32 absolute top-0 translate-x-48 -translate-y-7 -rotate-6"
              alt="verified"
            />
          </div>
          <p className="text-lg font-medium text-gray-500 dark:text-gray-300 max-w-xl mx-auto">
            We’re passionate about helping our clients achieve financial
            success. See what they have to say about our expertise.
          </p>
        </div>
        <div className="">
          {client.map((item, index) => (
            <div className="p-5 md:p-6 h-80 space-y-6 rounded-lg bg-[#202020]">
              <p className="font-medium text-gray-400 dark:text-gray-300">
                {item.review}
              </p>
              <div className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt="Author avatar"
                  className="w-12 h-12 rounded-full flex object-cover"
                />
                <div className="space-y-1 flex-1">
                  <h2 className="text-lg font-semibold leading-none text-gray-100 dark:text-gray-200">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
