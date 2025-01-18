export default function RootLayout({ children }) {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex min-h-screen w-full flex-col mx-auto items-center justify-center prose md:prose-lg">
          <img src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/404-img.png" />
          <h2>Oops! This Page is Not Found. </h2>
          <p className="text-center"> 
            We can’t find the page your are looking for. You can check out our
            Help Center or head back to Homepage.
          </p>
          <a href="/" className="text-center  text-white bg-blue-600 px-4 py-2 no-underline hover:bg-gray-900 transition-all">
            Go to Homepage
          </a>
        </div>
      </div>
    </>
  );
}
