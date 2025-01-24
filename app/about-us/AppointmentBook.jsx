export default function AppointmentBook() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Book Your Free 30-Minute Consultation
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-pretty text-lg/8 text-gray-300">
            Got questions or a project in mind? Let’s chat! In just 30 minutes
            <br />
            we’ll explore your goals, tailor solutions, and share actionable
            insights no strings attached.
          </p>

          <div className=" flex items-center justify-center w-full mt-10">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0THqOtbWCkTEfTRS6X_4n16i8N0hFxFi_s6PKGGqCrZAHWCbgBmBtOFmqcFGOTZ3MdC8hK6RMI?gv=true"
              target="blank"
              className="rounded-md bg-white px-11 py-2.5 text-sm font-semibold hover:text-white hover:bg-black hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  hover:shadow-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book a Free Call
              <span aria-hidden="true" className="ml-4">
                →
              </span>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
