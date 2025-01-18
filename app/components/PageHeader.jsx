import React from "react";

export default function PageHeader({ title }) {
  return (
    <div
      className="relative w-full bg-cover bg-center pb-24 pt-32"
      style={{
        backgroundImage:
          "url('https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/page-title.jpg')",
      }}
    >
    <div className="bg-gray-900 absolute inset-0 opacity-80 transition duration-300 ease-in-out"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl relative">
            <h2 className="font-bold text-6xl text-slate-50">{title} </h2>
            <ul className="flex space-x-3 items-center font-bold mt-4">
                <li className="text-gray-100"><a href="/">Home</a></li>
                <li className="text-blue-600">/</li>
                <li className="text-gray-400">{title}</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
