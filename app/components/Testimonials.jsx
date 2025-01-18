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
              className="w-32 absolute top-0 translate-x-2 md:translate-x-48 -translate-y-7 -rotate-6"
              alt="verified"
            />
          </div>
          <p className="text-lg font-medium text-gray-500 dark:text-gray-300 max-w-xl mx-auto">
            We’re passionate about helping our clients achieve financial
            success. See what they have to say about our expertise.
          </p>
        </div>
        <div className="">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg/8 text-white">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                  arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
                  ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-14 rounded-full bg-gray-800"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Judith Black</div>
                  <div className="mt-1 text-gray-400">CEO of Tuple</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg/8 text-white">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                  reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                  dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-14 rounded-full bg-gray-800"
                />
                <div className="text-base">
                  <div className="font-semibold text-white">Joseph Rodriguez</div>
                  <div className="mt-1 text-gray-400">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
