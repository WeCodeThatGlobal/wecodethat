"use client";
import React from "react";
import Header from "./Header";
import "./Services.css";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-slate-100">
        <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto py-16">
        <Header title="Services That Help You Grow." subtitle="What We Do" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="card group relative p-6 bg-white shadow rounded-md bg-[url('https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-01.jpg')]">
            <span className="icon">
    
              <Image
                src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/13.png"
                width={40}
                height={40}
                />
            </span>
            
            <div className="overflow-hidden relative z-50">
              <h3 className="text-3xl font-bold group-hover:text-gray-900 text-slate-50 mb-3">
                <a>
                  Web
                  <br /> 
                  Designing
                </a>
              </h3>

              <div className="card-content">
                <p className="text-gray-600 mt-8 font-medium leading-loose">
                  We offers plan and assemble managing for you from startups to
                  the last creation or closing creation.
                </p>
              </div>
            </div>
          </div>
          <div className="card group relative p-6 bg-white shadow rounded-md bg-[url('https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-01.jpg')]">
            <span className="icon">
    
              <Image
                src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/13.png"
                width={40}
                height={40}
                />
            </span>
            
            <div className="overflow-hidden relative z-50">
              <h3 className="text-3xl font-bold group-hover:text-gray-900 text-slate-50 mb-3">
                <a>
                  Web
                  <br /> 
                  Designing
                </a>
              </h3>

              <div className="card-content">
                <p className="text-gray-600 mt-8 font-medium leading-loose">
                  We offers plan and assemble managing for you from startups to
                  the last creation or closing creation.
                </p>
              </div>
            </div>
          </div>
          <div className="card group relative p-6 bg-white shadow rounded-md bg-[url('https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-01.jpg')]">
            <span className="icon">
    
              <Image
                src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/13.png"
                width={40}
                height={40}
                />
            </span>
            
            <div className="overflow-hidden relative z-50">
              <h3 className="text-3xl font-bold group-hover:text-gray-900 text-slate-50 mb-3">
                <a>
                  Web
                  <br /> 
                  Designing
                </a>
              </h3>

              <div className="card-content">
                <p className="text-gray-600 mt-8 font-medium leading-loose">
                  We offers plan and assemble managing for you from startups to
                  the last creation or closing creation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
        </div>
    </div>
  );
};

export default Services;
