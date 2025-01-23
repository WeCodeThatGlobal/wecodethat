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
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-12">
        <div className="max-w-6xl mx-auto text-center text-white">
          <p className="px-3 py-1 bg-gray-600 text-white rounded-[4px] font-semibold mb-6 inline-block">
            Our Testimonials
          </p>
          <div className="relative">
            <h3 className="text-6xl font-semibold mb-2 text-white">
              Client's success stories
            </h3>
            <img
              src="images/02-savee-sticker-e1701854191447.png"
              className="w-32 absolute top-0 translate-x-2 md:translate-x-48 -translate-y-7 -rotate-6"
              alt="verified"
            />
          </div>
        </div>
        <div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg/8 text-white">
                  <p>
                    "Working with WeCodeThat was such a smooth experience. They
                    really took the time to understand what we needed and
                    delivered a website that not only looks great but works
                    perfectly for our users. The team was always available for
                    updates and feedback. Highly recommend them!"
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  {/* <img
                    alt=""
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-14 rounded-full bg-gray-800"
                  /> */}
                  <div className="text-base">
                    <div className="font-semibold text-white">Rajesh Kumar</div>
                    <div className="mt-1 text-gray-400">
                      Small Business Owner
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg/8 text-white">
                  <p>
                    "I was nervous about finding the right team to handle my
                    project, but WeCodeThat made the entire process stress-free.
                    They were transparent, quick to respond, and delivered
                    exactly what they promised. The end result was better than I
                    imagined. Great job!"
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  {/* <img
                    alt=""
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-14 rounded-full bg-gray-800"
                  /> */}
                  <div className="text-base">
                    <div className="font-semibold text-white">Ananya</div>
                    <div className="mt-1 text-gray-400">
                      Small Business Owner
                    </div>
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
