import React from "react";
import { Navbar } from "../components/Navbar";
import Item from "./Item";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.",
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.",
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <div className="relative isolate">
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
            <div
              aria-hidden="true"
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            >
              <div
                style={{
                  clipPath:
                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                }}
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                      We’re changing the way people connect
                    </h1>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua. Anim aute id magna aliqua
                      ad ad non deserunt sunt.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get started
                      </a>
                      <a
                        href="#"
                        className="text-sm/6 font-semibold text-gray-900"
                      >
                        Live demo <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col lg:flex-row">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-auto xl:px-8 lg:px-5 px-4 mt-12 max-w-full">
                <div>
                  <h2 className="text-lg font-bold lg:text-3xl leading-6 mb-3">
                    Who Are We?
                  </h2>
                  <p className="text-[21px] leading-relaxed font-medium mb-3 text-gray-500">
                    We are a digital and branding company that believes in the
                    power of creative strategy and along with great design.
                  </p>
                  <p className="mb-3 text-gray-500">
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et.
                  </p>
                  <div className="flex flex-wrap -mx-4 mt-4">
                    <div className="xl:w-6/12 w-full mt-4 xl:px-5 px-4 max-w-full">
                      <ul className="list-none space-y-3 text-gray-500">
                        <li className="relative pl-6">
                          <span>
                            <i className="uil uil-check w-4 h-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 12.75 6 6 9-13.5"
                                />
                              </svg>
                            </i>
                          </span>
                          <span>
                            Aenean eu leo quam ornare curabitur blandit tempus.
                          </span>
                        </li>
                        <li className="relative pl-6">
                          <span>
                            <i className="uil uil-check w-4 h-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 12.75 6 6 9-13.5"
                                />
                              </svg>
                            </i>
                          </span>
                          <span>
                            Nullam quis risus eget urna mollis ornare donec
                            elit.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="xl:w-6/12 w-full mt-4 xl:px-5 px-4 max-w-full">
                      <ul className="list-none space-y-3 text-gray-500">
                        <li className="relative pl-6">
                          <span>
                            <i className="uil uil-check w-4 h-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 12.75 6 6 9-13.5"
                                />
                              </svg>
                            </i>
                          </span>
                          <span>
                            Etiam porta sem malesuada magna mollis euismod.
                          </span>
                        </li>
                        <li className="relative pl-6">
                          <span>
                            <i className="uil uil-check w-4 h-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m4.5 12.75 6 6 9-13.5"
                                />
                              </svg>
                            </i>
                          </span>
                          <span>
                            Fermentum massa vivamus faucibus amet euismod.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative xl:!order-2 lg:!order-2">
                <div className="flex flex-wrap !relative overlap-grid-2">
                  <div className="item xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:mt-0">
                    <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                      <img
                        className="!rounded-[.4rem] "
                        src="/images/who-we-are-1.jpg"
                        // srcset="./assets/img/photos/about2@2x.jpg 2x"
                        alt="image"
                      />
                    </figure>
                    <figure className="absolute top-0 -translate-x-36">
                      <img
                        className="!rounded-[.4rem] "
                        src="/shape/shape1.svg"
                        // srcset="./assets/img/photos/about2@2x.jpg 2x"
                        alt="image"
                      />
                    </figure>
                  </div>
                  <div className="item xl:w-[55%] xl:mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:mt-[-45%] md:z-[4] md:ml-0">
                    <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                      <img
                        className="!rounded-[.4rem] "
                        src="/images/who-we-are-1.jpg"
                        // srcset="./assets/img/photos/about3@2x.jpg 2x"
                        alt="image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap mx-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="xl:w-4/12 lg:w-4/12 w-full px-6 mt-6"
                >
                  <div className="flex flex-row">
                    <div>
                      <div className="bg-blue-100 pointer-events-none mr-4 w-9 h-9 flex items-center justify-center rounded-lg">
                        <span className="font-bold text-base text-indigo-500">
                          {item.id}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold leading-snug text-gray-600 mb-3">
                        {item.title}
                      </h4>
                      <p className="mb-2 text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full xl:!order-2 lg:!order-2 mt-[50px]">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                  <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] !self-end mt-[25px]">
                    <div className="rounded-xl !bg-[#fef3e4]">
                      <div className="p-[40px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 507 512"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/telephone-3.svg"
                          className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3 "
                        >
                          <path
                            className="lineal-fill"
                            d="M402.4 437.9c0-10.5-4.4-20.4-12.6-28.7-5.1-5.6-10.6-11-16-16.1-2.7-2.6-5.5-5.3-8.1-8l-23.4-23.4c-18-18-41.3-18-59.4 0-2.4 2.4-4.9 4.8-7.3 7.2-6.4 6.4-13.1 12.9-19.6 19.9-11.6-5.2-23-12.4-36.5-23.2-13.4-10.9-62.2-59.7-73.2-73.2-10.7-13.5-17.9-25-23.2-36.5 7-6.4 13.5-13.1 19.9-19.6 2.4-2.4 4.8-4.9 7.2-7.3 18-18 18-41.3 0-59.4l-23.4-23.4c-2.7-2.7-5.4-5.4-8-8.1-5.2-5.3-10.6-10.8-16.1-16-8.3-8.2-18.3-12.6-28.7-12.6s-20.5 4.5-29.1 12.7l-.2.2L33.4 134c-10.8 10.6-17.4 24.8-18.6 39.9-2.1 25 5.3 48.4 11 63.6C39.6 275 60.4 309.7 91.3 347c11.2 13.3 23.2 26 35.9 37.8 11.8 12.7 24.4 24.7 37.8 35.8 37.2 31 72 51.7 109.5 65.6 15.3 5.7 38.6 13 63.6 11 15.1-1.2 29.3-7.8 39.9-18.6l11.6-11.4.2-.2c8.2-8.5 12.6-18.6 12.6-29.1z"
                          ></path>
                          <path
                            className="lineal-stroke"
                            d="M507 237.1C507 106.4 400.7 0 270 0c-54.9 0-108.2 19.1-150.6 54-6.1 5.1-7 14.2-1.9 20.3 5.1 6.1 14.1 7 20.2 2 37.3-30.6 84-47.4 132.3-47.4 114.9 0 208.3 93.4 208.3 208.3-.1 63.1-28.7 122.8-77.8 162.4l-.2-.2c-5.4-5.8-11.1-11.4-16.4-16.5l-.2-.1c-2.5-2.3-5-4.8-7.4-7.3l-23.8-23.8c-11.6-11.6-25.4-17.7-39.9-17.7s-28.3 6.1-39.9 17.7l-3.4 3.4c-1.1 1.1-2.6 2.5-3.8 3.7l-1.8 1.7c-3.5 3.5-7.1 7-10.8 10.7-8.6-4.9-16.8-10.5-24.4-16.7-12.9-10.5-60.4-58.1-71-71-6.2-7.7-11.8-15.8-16.8-24.4 3.7-3.6 7.2-7.2 10.7-10.7l1.7-1.8c1.3-1.3 2.6-2.6 3.8-3.9 1.1-1.1 2.2-2.3 3.4-3.4 23.5-23.5 23.5-56.2 0-79.7L149 148.3c4.5-6.1 9.4-11.8 14.8-17.1 58.5-58.5 153.6-58.5 212 0 44.9 45 56.6 113.4 29.3 170.8-3.4 7.2-.4 15.8 6.8 19.2s15.8.4 19.2-6.8c32.6-68.4 18.7-149.9-34.9-203.5-69.7-69.7-183.1-69.7-252.7 0-5.3 5.3-10.3 10.9-14.9 16.8-5-5.2-10.3-10.6-16-15.8-10.9-11-24.3-16.7-38.6-16.7s-27.8 5.7-39.1 16.6l-.2.2-.2.2-.1.1-11.3 11.6C9.9 136.9 1.8 154.2.4 172.7c-2.3 27.8 5.7 53.2 11.8 69.8 14.5 39.2 36.1 75.3 68.1 113.7C91.7 369.9 104 382.8 117 395c12.2 13 25.1 25.3 38.8 36.8 38.4 31.9 74.5 53.5 113.6 68 14.2 5.2 35.8 12.2 60 12.2 3.3 0 6.7-.1 10-.4 18.5-1.5 35.8-9.5 48.7-22.7l11.6-11.3.1-.1.2-.2.2-.2c10.9-11.3 16.6-24.9 16.6-39.1 0-4.5-.6-9-1.8-13.4 58-45 91.9-114.2 92-187.5zM379.5 457L368 468.4l-.1.1c-8.2 8.4-19.2 13.6-30.9 14.4-2.5.2-5 .3-7.5.3-19.5 0-37.8-6-49.9-10.4-36-13.4-69.5-33.4-105.2-63.1-12.9-10.8-25.1-22.3-36.6-34.6-.2-.3-.5-.5-.7-.7-12.3-11.4-23.8-23.6-34.6-36.5-29.8-35.9-49.9-69.4-63.3-105.4-5.2-14.1-11.9-35.3-10.1-57.4.9-11.8 6-22.8 14.5-31l.1-.1L55 132.5c5.8-5.6 12.4-8.5 19.1-8.5s13 2.9 18.6 8.4l.4.4c5.3 4.9 10.6 10.3 15.5 15.3 2.6 2.7 5.2 5.4 7.8 8l23.8 23.8c12.4 12.4 12.4 26.6 0 39l-3.6 3.6c-1.2 1.2-2.4 2.5-3.7 3.8l-1.9 1.8c-5.6 5.7-11.5 11.6-17.6 17.2-4.6 4.2-6 10.9-3.4 16.5 5.7 12.7 13.7 25.2 25 39.5l.1.2c11.7 14.4 60.9 63.6 75.3 75.3l.1.1c14.3 11.3 26.9 19.3 39.5 25 5.7 2.6 12.3 1.2 16.5-3.4 5.6-6.1 11.5-12 17.3-17.6l1.9-1.8c1.2-1.2 2.4-2.4 3.7-3.6s2.4-2.4 3.6-3.6c6.1-6.1 12.8-9.3 19.5-9.3s13.4 3.2 19.5 9.3l23.8 23.8c2.6 2.6 5.3 5.2 8 7.8 5 4.9 10.4 10.1 15.3 15.5l.4.4c3.9 3.9 8.4 10.3 8.4 18.6.1 6.6-2.8 13.2-8.4 19z"
                          ></path>
                          <path
                            className="lineal-stroke"
                            d="M274.8 258.4h-36.5c.1-4.4 6.9-9 14.7-14.3 13.4-9.2 30-20.6 30-40.4 0-20.4-18.1-31.4-35.1-31.4-16.6 0-34.1 10.2-34.1 29.2 0 8.7 3.9 13.2 11.6 13.2 8.6 0 13.3-5 13.3-9.7 0-7.8 5.1-9.4 9.4-9.4 7.1 0 9.6 4.8 9.6 8.8 0 8-9.9 15.2-20.4 22.9-12.4 9.1-25.2 18.5-25.2 31.2v14c0 5.2 6.6 8.4 11.3 8.4h51.5c4.4 0 8.2-5.3 8.2-11.4s-3.8-11.1-8.3-11.1z"
                          ></path>
                          <path
                            className="lineal-stroke"
                            d="M351.9 234.9h-4.8v-8.7c0-5-5-8.2-12.7-8.2s-12.7 3.2-12.7 8.2v8.7H313l24.6-49.3c.5-1 .8-2.2.8-3.3 0-6.2-8.2-10-12.7-10-4.6-.1-8.8 2.5-10.7 6.6l-33.4 65.5c-.8 1.5-1.3 3.2-1.3 5 0 5.5 3.6 9.3 9 9.3h32.4v13.9c0 5.8 6.6 8.4 12.7 8.4s12.7-2.6 12.7-8.4v-13.9h4.8c4.3 0 8.4-5.8 8.4-11.9 0-5.7-2.6-11.9-8.4-11.9z"
                          ></path>
                        </svg>
                        <h4>SEO Services</h4>
                        <p className="!mb-0">
                          Nulla vitae elit libero, a pharetra augue. Donec id
                          elit non mi porta.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full !self-end mt-[25px]">
                    <div className="rounded-xl !bg-[#fae6e7]">
                      <div className="p-[40px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 339.8 409.6"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/shield.svg"
                          className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#e2626b] text-red !mb-3 "
                        >
                          <path
                            className="lineal-stroke"
                            d="M169.9 409.6c-5.5 0-10.9-1.2-15.8-3.5C107.8 384.8 0 327.5 0 255.5V72.1c0-10.7 8.7-19.4 19.4-19.5 2.1 0 4.2.3 6.1 1 9.2 3.1 18.9 4.7 28.6 4.6 31.5.1 60.7-16.3 76.9-43.3C136.6 5.7 146.6 0 157.4 0h25c10.8.1 20.8 5.7 26.4 14.9 16.2 27 45.4 43.4 76.9 43.3 9.7 0 19.4-1.6 28.6-4.6 10.2-3.4 21.2 2.1 24.6 12.3.7 2 1 4.1 1 6.1v48c0 6.5-5.3 11.8-11.7 11.8-6.5 0-11.8-5.3-11.8-11.7V77.6c-10 2.8-20.3 4.2-30.6 4.2-39.7.2-76.5-20.6-97-54.6-1.3-2.2-3.7-3.6-6.3-3.6h-25c-2.6 0-5 1.4-6.3 3.6-20.5 34-57.3 54.8-97 54.6-10.3 0-20.6-1.4-30.6-4.2v178c0 47.7 72.5 98 140.4 129.3 3.8 1.7 8.2 1.7 12 0 67.9-31.3 140.4-81.6 140.4-129.3v-74.9c0-6.5 5.3-11.8 11.8-11.7 6.5 0 11.7 5.3 11.7 11.7v74.9c0 72-107.8 129.3-154.1 150.6-5 2.2-10.4 3.4-15.9 3.4z"
                          ></path>
                          <path
                            className="lineal-fill"
                            d="M156 269l-62.2-31.1c-11.8-5.9-16.6-20.2-10.7-32 5.9-11.8 20.2-16.6 32-10.7l44.9 22.5 56.6-70.7c8.2-10.3 23.2-12 33.5-3.7 10.3 8.2 12 23.2 3.7 33.5l-68.6 85.8c-6.9 8.8-19.1 11.5-29.2 6.4z"
                          ></path>
                          <path
                            className="lineal-stroke"
                            d="M166.7 283.3c-5.5 0-11-1.3-15.9-3.8l-62.2-31.1c-17.6-8.8-24.7-30.2-15.9-47.8s30.2-24.7 47.8-15.9l36.4 18.2 50.6-63.3c12.3-15.4 34.7-17.9 50.1-5.6 15.4 12.3 17.9 34.7 5.6 50.1l-68.6 85.8c-6.8 8.5-17.1 13.4-27.9 13.4zm-62.2-78.8c-6.7 0-12.1 5.4-12.1 12.1 0 4.6 2.6 8.8 6.7 10.8l62.2 31.1c5.1 2.6 11.3 1.2 14.9-3.3l68.6-85.8c4.3-5.1 3.7-12.8-1.4-17.1-5.1-4.3-12.8-3.7-17.1 1.4-.1.2-.3.3-.4.5l-56.6 70.7c-3.5 4.3-9.5 5.6-14.4 3.2L110 205.6c-1.7-.7-3.6-1.1-5.5-1.1z"
                          ></path>
                        </svg>
                        <h4>Web Design</h4>
                        <p className="!mb-0">
                          Nulla vitae elit libero, a pharetra augue. Donec id
                          elit non mi porta.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                    <div className="rounded-xl !bg-[#eaf3ef]">
                      <div className=" p-[40px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 409.6 361.2"
                          data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/cloud-computing-3.svg"
                          className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#7cb798] text-leaf !mb-3 "
                        >
                          <path
                            className="lineal-stroke"
                            d="M309.9 231h-12.7c-6.1.2-11.3-4.6-11.5-10.8-.2-6.1 4.6-11.3 10.8-11.5h13.4c23 0 41.6-18.7 41.6-41.6 0-20-14.3-37.1-33.9-40.8-6-1.1-10-6.9-8.9-13 0-.3.1-.5.2-.7 10-38.6-13.2-78-51.8-88-5.9-1.5-11.9-2.3-18-2.3-24.7-.1-47.7 12.6-60.9 33.5-3 4.7-8.9 6.5-14 4.2-23.4-10.6-50.9-.2-61.5 23.2-2.7 6-4.1 12.5-4.1 19.1 0 3.6.4 7.2 1.3 10.7 1.4 6-2.3 12-8.3 13.4-.1 0-.2 0-.3.1-22.5 4.7-36.9 26.7-32.2 49.2 4 19.3 21 33.1 40.7 33.1h138.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8H99.8c-35.3 0-63.8-28.6-63.8-63.9 0-26.3 16.1-49.8 40.5-59.4-.1-1.8-.2-3.6-.2-5.4 0-38 30.8-68.7 68.8-68.7 6.6 0 13.2 1 19.5 2.8C196.6-4.7 255.9-12 297 20.1c26.6 20.7 40.1 54 35.4 87.4 33 12.4 49.6 49.3 37.2 82.3-9.3 24.8-33.2 41.2-59.7 41.2z"
                          ></path>
                          <path
                            className="lineal-stroke"
                            d="M204.8 334.3c-6.1 0-11.1-5-11.1-11.1V220.8c-.2-6.1 4.6-11.3 10.8-11.5 6.1-.2 11.3 4.6 11.5 10.8v103.1c-.1 6.1-5.1 11.1-11.2 11.1z"
                          ></path>
                          <path
                            className="lineal-stroke"
                            d="M398.5 334.3H11.1C5 334.1.1 329 .3 322.8c.2-5.9 4.9-10.6 10.8-10.8h387.4c6.1.2 11 5.3 10.8 11.5-.2 5.9-4.9 10.6-10.8 10.8z"
                          ></path>
                          <path
                            className="lineal-fill"
                            d="M234.8 350.1h-60.1c-8 0-14.5-6.5-14.5-14.4v-25c0-8 6.5-14.5 14.4-14.5h60.1c8 0 14.5 6.5 14.5 14.5v25c.1 7.9-6.4 14.4-14.4 14.4z"
                          ></path>
                          <path
                            className="lineal-stroke"
                            d="M234.8 361.2h-60.1c-14.1 0-25.6-11.5-25.6-25.6v-25c0-14.1 11.5-25.6 25.6-25.6h60.1c14.1 0 25.6 11.5 25.6 25.6v25c0 14.2-11.4 25.6-25.6 25.6zm-60-53.9c-1.8 0-3.3 1.5-3.3 3.3v25c0 1.8 1.5 3.3 3.3 3.3h60.1c1.8 0 3.3-1.5 3.3-3.3v-25c0-1.8-1.5-3.3-3.3-3.3h-60.1zM71.3 356.5c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1zm267 0c-6.1 0-11.1-5-11.1-11.1v-44.5c.2-6.1 5.3-11 11.5-10.8 5.9.2 10.6 4.9 10.8 10.8v44.5c-.1 6.1-5.1 11.1-11.2 11.1z"
                          ></path>
                        </svg>
                        <h4>Social Engagement</h4>
                        <p className="!mb-0">
                          Nulla vitae elit libero, a pharetra augue.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full !self-start mt-[25px]">
                    <div className="rounded-xl !bg-[#e0e9fa]">
                      <div className=" p-[40px]">
                        <img
                          src="../../assets/img/icons/lineal/analytics.svg"
                          className="icon-svg icon-svg-md text-[#3f78e0] !mb-3 !w-[2.6rem] !h-[2.6rem]"
                          alt="image"
                        />
                        <h4>Content Marketing</h4>
                        <p className="!mb-0">
                          Nulla vitae elit libero, a pharetra augue. Donec id
                          elit non mi porta gravida at eget.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full relative">
                <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] leading-[1.35]">
                  What We Do?
                </h2>
                <h3 className="text-lg font-semibold lg:text-4xl mb-3 !leading-[1.3] text-gray-700">
                  The service we offer is specifically designed to meet your
                  needs.
                </h3>
                <p className="text-[21px] leading-relaxed font-medium mb-3 text-gray-500">
                  We are a digital and branding company that believes in the
                  power of creative strategy and along with great design.
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="206"
                  height="214"
                  viewBox="0 0 206 214"
                  fill="none"
                  className="absolute top-0 -translate-y-40 left-80 rotate-12"
                >
                  <g clip-path="url(#clip0_106_19)">
                    <path
                      d="M32.63 128.891a53.114 53.114 0 013.285-3.238.832.832 0 011.187.066.834.834 0 01-.07 1.188 50.137 50.137 0 00-4.608 4.726.83.83 0 01-1.182.093c-.343-.319-.392-.823-.088-1.182a72.21 72.21 0 011.476-1.653zm-5.447 7.003a.839.839 0 011.07-.135c.388.238.5.771.245 1.144a53.747 53.747 0 00-3.23 5.765.84.84 0 11-1.51-.733c1.034-2.094 2.134-4.095 3.334-5.943l.106-.114-.015.016zm13.963-14.328l.122-.131a50.986 50.986 0 015.853-3.478.842.842 0 011.119.369.846.846 0 01-.372 1.12 47.863 47.863 0 00-5.667 3.376c-.386.252-.91.161-1.161-.224a.841.841 0 01.09-1.047l.016.015zm-19.835 26.373a.815.815 0 01.893-.208c.433.158.67.623.511 1.056a58.115 58.115 0 00-1.819 6.343c-.11.447-.543.748-.989.638-.446-.109-.73-.557-.635-.987.478-2.183 1.128-4.389 1.876-6.535a.896.896 0 01.18-.292l-.017-.015zm31.777-32.437a.747.747 0 01.325-.218 54.822 54.822 0 015.648-1.621c.298-.059.612-.134.91-.193a.825.825 0 01.986.643.83.83 0 01-.645.988c-.298.059-.58.133-.878.192-1.85.418-3.681.945-5.477 1.567a.864.864 0 01-1.076-.512.84.84 0 01.176-.845l.031-.001zm53.965-57.967c1.051-1.13 2.135-2.23 3.205-3.282a.843.843 0 011.185.002.843.843 0 01-.006 1.186 93.784 93.784 0 00-4.59 4.805.825.825 0 01-1.168.044.83.83 0 01-.057-1.183c.488-.524.974-1.08 1.477-1.62l-.046.048zm-5.739 6.761c.289-.31.793-.362 1.119-.09a.832.832 0 01.151 1.18 124.248 124.248 0 00-3.938 5.381.852.852 0 01-1.177.219.85.85 0 01-.215-1.178 127.057 127.057 0 013.983-5.461l.045-.05h.032zm13.926-14.484l.076-.082a78.22 78.22 0 015.422-4.062c.386-.252.911-.161 1.161.224a.842.842 0 01-.228 1.163 68.687 68.687 0 00-5.314 3.979.828.828 0 01-1.173-.114.838.838 0 01.041-1.092l.015-.016zM93.685 75.349a.837.837 0 011.053-.15.835.835 0 01.262 1.16c-.809 1.294-1.54 2.507-2.215 3.592a164 164 0 00-1.284 2.135.839.839 0 01-1.144.28.836.836 0 01-.277-1.143c.433-.727.882-1.44 1.285-2.135.674-1.084 1.406-2.297 2.23-3.609l.106-.115-.016-.015zm32.657-33.055s.121-.131.215-.166a70.072 70.072 0 016.108-2.967.858.858 0 011.106.448c.188.42-.032.918-.452 1.108a70.708 70.708 0 00-5.968 2.882.842.842 0 01-1.133-.32.839.839 0 01.124-.985v0zM86.864 86.909a.814.814 0 011.005-.165c.403.222.578.72.355 1.124a65.65 65.65 0 00-2.827 5.987.847.847 0 01-1.09.452.843.843 0 01-.449-1.089 71.152 71.152 0 012.901-6.132c.046-.049.09-.13.136-.179l-.031.002zM18.43 161.024a.862.862 0 01.702-.264.83.83 0 01.759.92 48.471 48.471 0 00-.183 6.581.826.826 0 01-.808.869.82.82 0 01-.865-.805 51.832 51.832 0 01.207-6.804.899.899 0 01.22-.498l-.032.001zm47.775-48.233a.782.782 0 01.545-.258 54.513 54.513 0 016.806-.116c.46.03.805.412.805.87a.87.87 0 01-.873.808 54.181 54.181 0 00-6.601.124.84.84 0 01-.896-.772.814.814 0 01.23-.641l-.016-.015zm72.472-75.707a1 1 0 01.371-.235 71.284 71.284 0 016.501-1.654l.078-.019a.823.823 0 01.971.659.83.83 0 01-.662.973l-.063.002c-2.134.43-4.28.97-6.344 1.616a.834.834 0 01-1.046-.544.859.859 0 01.177-.813l.017.015zM81.794 99.302c.213-.23.525-.336.829-.237.43.126.7.59.573 1.022a48.05 48.05 0 00-1.373 6.453.832.832 0 01-.94.715.825.825 0 01-.711-.937 52.434 52.434 0 011.413-6.66.736.736 0 01.193-.34l.016-.016zm-62.87 75.074a.76.76 0 01.481-.255c.456-.065.893.219.972.69a62.35 62.35 0 00.96 4.467.84.84 0 01-.596 1.035.834.834 0 01-1.031-.593 46.384 46.384 0 01-.998-4.625.827.827 0 01.212-.719v0zm132.872-139.94a.86.86 0 01.528-.273 74.525 74.525 0 016.768-.336.84.84 0 01.834.837.846.846 0 01-.84.838 71.067 71.067 0 00-6.609.33c-.473.05-.864-.283-.912-.755a.869.869 0 01.215-.656l.016.015zm-71.915 78.088a.881.881 0 01.623-.276.84.84 0 01.835.837c.002.063-.012.111-.01.175 1.893.354 3.773.789 5.592 1.32.448.141.7.59.558 1.038-.143.448-.592.702-1.04.561a61.21 61.21 0 00-5.099-1.229c.055 1.579.157 3.171.306 4.714a.849.849 0 01-.743.929.841.841 0 01-.926-.739 81.636 81.636 0 01-.338-5.203l-.002-.063c-.244-.196-.38-.475-.313-.81a.966.966 0 01.314-.533c-.003-.063.011-.111.01-.174a.78.78 0 01.217-.562l.016.015zm85.235-78.136a.86.86 0 01.702-.263c2.219.2 4.474.525 6.701.946a.833.833 0 01.667.986.844.844 0 01-.988.67 73.107 73.107 0 00-6.543-.921c-.459-.03-.79-.46-.759-.92a.898.898 0 01.22-.498v0zm-83.874 91.408a.741.741 0 01.434-.238.85.85 0 011.001.626c.504 2.209 1.114 4.335 1.863 6.314a.831.831 0 01-.485 1.077.827.827 0 01-1.075-.48 51.6 51.6 0 01-1.933-6.533c-.073-.282.028-.554.211-.751l-.016-.015zm11.075-8.734a.84.84 0 01.941-.194c.786.334 1.573.699 2.329 1.065 1.27.632 2.51 1.296 3.72 1.993a.852.852 0 01.292 1.158.856.856 0 01-1.159.297 64.38 64.38 0 00-3.607-1.949 40.958 40.958 0 00-2.264-1.036.828.828 0 01-.434-1.106 1.13 1.13 0 01.166-.243l.016.015zm85.953-80.218c.213-.23.525-.336.829-.237a80.794 80.794 0 016.441 2.079.835.835 0 01.495 1.071.84.84 0 01-1.073.5 77.226 77.226 0 00-6.297-2.037.87.87 0 01-.589-1.037.731.731 0 01.194-.339v0zM85.956 138.276s.107-.115.2-.15a.837.837 0 011.15.304c1.141 1.948 2.42 3.717 3.831 5.244a.826.826 0 01-.054 1.172.825.825 0 01-1.171-.051 31.878 31.878 0 01-4.048-5.536.858.858 0 01.108-.999l-.015.016zm17.832-14.427c.289-.312.793-.362 1.119-.09.958.738 1.853 1.51 2.686 2.284a31.584 31.584 0 012.31 2.362.834.834 0 01-.069 1.188.833.833 0 01-1.188-.065 35.77 35.77 0 00-2.211-2.24 35.579 35.579 0 00-2.588-2.193.848.848 0 01-.152-1.18l.046-.049.047-.017zm87.032-82.361a.839.839 0 01.973-.195 93.668 93.668 0 016.017 3.09c.403.222.531.739.308 1.142-.223.404-.74.534-1.142.312a76.982 76.982 0 00-5.889-3.032c-.418-.205-.609-.688-.402-1.107.045-.08.089-.161.15-.227l-.015.017zM95 148a.84.84 0 011.07-.136c1.875 1.194 3.897 2.097 5.842 2.592a.84.84 0 01.605 1.02.848.848 0 01-1.022.608c-2.12-.536-4.32-1.512-6.34-2.81-.387-.238-.5-.771-.261-1.159.03-.033.06-.066.107-.115v0zm17.527-14.1s.137-.147.231-.182a.843.843 0 011.119.368 20.268 20.268 0 011.58 4.097c.219.845.359 1.709.406 2.608.032.457-.334.85-.807.868-.457.033-.849-.331-.866-.805a10.828 10.828 0 00-.363-2.262 18.197 18.197 0 00-1.458-3.769c-.153-.326-.103-.707.125-.953l.033.03zm-4.806 16.825c.092-.098.231-.183.371-.235a9.119 9.119 0 002.301-1.099 8.375 8.375 0 002.377-2.556.84.84 0 011.144-.281.837.837 0 01.276 1.144 10.274 10.274 0 01-2.864 3.08 10.227 10.227 0 01-2.766 1.338.809.809 0 01-1.031-.562.854.854 0 01.177-.813l.015-.016z"
                      fill="#605DBA"
                      stroke="#605DBA"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_106_19">
                      <path
                        fill="#fff"
                        transform="rotate(132.92 91.877 70.178)"
                        d="M0 0h222.224v74.429H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[90rem]  mx-auto px-5 py-20 !bg-[#ffffff]">
          <div
            className="rounded-lg bg-overlay bg-overlay-light-500 pb-20 [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0  xxl:rounded-[.8rem] "
            data-image-src="../../assets/img/photos/bg22.png"
            style={{
              backgroundImage: "url(/images/bg22.png)",
            }}
          >
            <div className="max-w-7xl m-auto py-[4.5rem] px-0">
              <div className="">
                <div className="flex flex-wrap mx-[-15px] lg:mx-[24px] mt-[-50px] lg:mt-0">
                  <div className="lg:w-[30%] w-full flex-[0_0_auto] px-[15px] lg:px-[20px] mt-[50px] lg:mt-0 max-w-full text-center lg:text-left mx-auto">
                    <h3 className="text-4xl font-semibold !leading-[1.3] tracking-[normal] mb-3 xxl:!pr-20 text-gray-700">
                      We are proud of our works
                    </h3>
                    <p className="text-2xl !leading-[1.6] font-medium !mb-0 text-gray-600">
                      We bring solutions to make life easier for our customers.
                    </p>
                  </div>
                  <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] xl:!mt-2 lg:!mt-2 max-w-full">
                    <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px] !text-center">
                      {[
                        {
                          icon: "/target.svg",
                          value: "1000+",
                          label: "Completed Projects",
                        },
                        {
                          icon: "/bar-chart.svg",
                          value: "4x",
                          label: "Revenue Growth",
                        },
                        {
                          icon: "/employees.svg",
                          value: "99.7%",
                          label: "Customer Satisfaction",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full"
                        >
                          <img
                            src={item.icon}
                            className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia !mb-3 m-[0_auto]"
                            alt="icon"
                          />
                          <h3 className="text-4xl font-semibold tracking-[normal] !leading-none mb-2">
                            {item.value}
                          </h3>
                          <p className="!mb-0 text-gray-500">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="mb-20 max-w-7xl mx-auto ">
              <div className="flex flex-wrap mx-[-15px] mt-[-8rem] isotope relative">
                {[
                  {
                    text: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.",
                    name: "Coriss Ambady",
                    role: "Financial Analyst",
                  },
                  {
                    text: "Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit amet fermentum.",
                    name: "Cory Zamora",
                    role: "Marketing Specialist",
                  },
                  {
                    text: "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.",
                    name: "Nikolas Brooten",
                    role: "Sales Manager",
                  },
                  {
                    text: "Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra augue.",
                    name: "Coriss Ambady",
                    role: "Financial Analyst",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full"
                  >
                    <div className="rounded-md shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom !border-[#c5d7f6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                      <div className="flex-[1_1_auto] p-[40px]">
                        <blockquote className="!text-[.85rem] !leading-[1.7] font-medium m-[0_0_1rem] pl-4 icon !mb-0 relative p-0 border-0">
                          <p>{item.text}</p>
                          <div className="flex items-center text-left">
                            <div className="info !pl-0">
                              <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                                {item.name}
                              </h5>
                              <p className="!mb-0 text-[0.8rem]">{item.role}</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 class="lg:text-4xl font-bold !leading-[1.3] !mb-8 lg:!px-10 xl:!px-10 text-gray-700">
              Save your time and money by choosing our professional team.
            </h3>
          </div>
          <div className="flex">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </section>

        <section className=" mx-auto py-16">
          <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
              <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                  <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    >
                      <defs>
                        <pattern
                          x="100%"
                          y={-1}
                          id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                          width={200}
                          height={200}
                          patternUnits="userSpaceOnUse"
                        >
                          <path d="M130 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                      </defs>
                      <rect
                        fill="white"
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                      />
                      <svg
                        x="100%"
                        y={-1}
                        className="overflow-visible fill-gray-50"
                      >
                        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                      </svg>
                      <rect
                        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                      />
                    </svg>
                  </div>
                  <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Get in touch
                  </h2>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    Proin volutpat consequat porttitor cras nullam gravida at.
                    Orci molestie a eu arcu. Sed ut tincidunt integer elementum
                    id sem. Arcu sed malesuada et magna.
                  </p>
                  <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <BuildingOffice2Icon
                          aria-hidden="true"
                          className="h-7 w-6 text-gray-400"
                        />
                      </dt>
                      <dd>
                        545 Mavis Island
                        <br />
                        Chicago, IL 99191
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <PhoneIcon
                          aria-hidden="true"
                          className="h-7 w-6 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a
                          href="tel:+1 (555) 234-5678"
                          className="hover:text-gray-900"
                        >
                          +1 (555) 234-5678
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <EnvelopeIcon
                          aria-hidden="true"
                          className="h-7 w-6 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a
                          href="mailto:hello@example.com"
                          className="hover:text-gray-900"
                        >
                          hello@example.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <form
                action="#"
                method="POST"
                className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
              >
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Phone number
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="phone-number"
                          name="phone-number"
                          type="tel"
                          autoComplete="tel"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
