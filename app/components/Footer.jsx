"use client";

import Link from "next/link";

const FooterItem = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-blue-600 dark:hover:text-blue-500"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Links
      </h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const footerBlocks = [
  {
    id: 1,
    title: "Links",
    items: [
      {
        id: 1,
        text: "About",
        link: "/about-us",
      },
      {
        id: 2,
        text: "Contact",
        link: "/contact-us",
      },
    ],
  },
  {
    id: 2,
    title: "Ressources",
    items: [
      {
        id: 1,
        text: "Blog",
        link: "#",
      },
      {
        id: 2,
        text: "Privacy",
        link: "/privacy-policy",
      },
      {
        id: 3,
        text: "Terms",
        link: "/terms-of-service",
      },
      {
        id: 4,
        text: "FAQ",
        link: "/faq",
      },
    ],
  },
];

const FooterBlock = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 py-20">
        <div className="space-y-6 col-span-2">
          <Link href="#">
            <span>
              <img src="/logo/footer_logo.png" alt="" className="w-40" />
            </span>
          </Link>
          <div className="space-y-3">
            <p className="max-w-lg">Transforming ideas into code</p>
            <p className="max-w-lg text-gray-400">
              WeCodeThat specializes in delivering custom software solutions
              tailored to your unique needs.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start w-full gap-3">
            <a
              href="https://www.linkedin.com/company/wecodethatglobal/"
              aria-label="social link"
              rel="noreferer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
        </div>

        {footerBlocks.map((footerBlock) => (
          <FooterBlockItem key={footerBlock.id} {...footerBlock} />
        ))}

        <div className="space-y-6 col-span-2">
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="flex items-center mt-8">
              <div>
                <svg
                  className="size-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-base font-bold">Call us at</h4>
                <h4>+91 9094321163</h4>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div>
                <svg
                  className="size-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-base font-bold">Mail us at</h4>
                <h4>support@wecodethat.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-t-gray-800 text-gray-300">
          <div className="w-full flex justify-center text-center sm:text-left sm:min-w-max">
            <p> © 2024 - 2025 WeCodeThat. All right reserved </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
