"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import { useRef, useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

import FooterBlock from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ScrollToTop from "../components/ScrollToTop";

const page = () => {
  const box = useRef(null);
  const scrollPosition = useScrollPosition();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const percentage =
        scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0;
      setScrollPercentage(percentage);
    };

    updateScrollPercentage();
  }, [scrollPosition]);

  return (
    <div ref={box}>
      <Navbar />
      <PageHeader title="Privacy Policy" />
      <div className="container mx-auto px-4 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto mb-10 text-justify">
          <div>
            <div className={`section-title text-3xl md:text-4xl`}>
              <h2 className={`leading-tight mt-6 font-bold`}>PRIVACY POLICY</h2>
              <span className="text-blue-600 text-base mb-2 pb-3 relative uppercase font-bold leading-relaxed">
                Last updated January 22, 2025
              </span>
            </div>

            <section className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6">
              <p>
                This Privacy Notice for <strong>WE CODE THAT</strong> ("we,"
                "us," or "our"), describes how and why we might access, collect,
                store, use, and/or share ("process") your personal information
                when you use our services ("Services"), including when you:
              </p>

              <ul className="mt-8 font-bold space-y-2 ml-10">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    className="size-5 text-blue-600 mr-1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Visit our website at {"  "}
                  <a
                    href="https://wecodethat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    https://wecodethat.com
                  </a>
                  , or any website of ours that links to this Privacy Notice
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    className="size-5 text-blue-600 mr-1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Engage with us in other related ways, including any sales,
                  marketing, or events
                </li>
              </ul>

              <p>
                Questions or concerns? Reading this Privacy Notice will help you
                understand your privacy rights and choices. We are responsible
                for making decisions about how your personal information is
                processed. If you do not agree with our policies and practices,
                please do not use our Services. If you still have any questions
                or concerns, please contact us at{" "}
                <a href="mailto:support@wecodethat.com">
                  support@wecodethat.com
                </a>
                .
              </p>
            </section>

            <section className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6">
              <h3 className="text-2xl font-semibold text-black">
                SUMMARY OF KEY POINTS
              </h3>
              <p className="italic">
                This summary provides key points from our Privacy Notice, but
                you can find out more details about any of these topics by
                clicking the link following each key point or by using our{" "}
                <a href="tableofcontent" className="text-blue-600">
                  table of contents
                </a>{" "}
                below to find the section you are looking for.
              </p>

              <ul className="space-y-4 ml-10">
                <li>
                  <strong>What personal information do we process?</strong> When
                  you visit, use, or navigate our Services, we may process
                  personal information depending on how you interact with us and
                  the Services, the choices you make, and the products and
                  features you use.{" "}
                  <a href="#information-sharing" className="text-blue-600">
                    Learn more about personal information you disclose to us.
                  </a>
                </li>
                <li>
                  <strong>
                    Do we process any sensitive personal information?
                  </strong>{" "}
                  Some of the information may be considered "special" or
                  "sensitive" in certain jurisdictions, for example your racial
                  or ethnic origins, sexual orientation, and religious beliefs.
                  We do not process sensitive personal information.
                </li>
                <li>
                  <strong>
                    Do we collect any information from third parties?
                  </strong>{" "}
                  We do not collect any information from third parties.
                </li>
                <li>
                  <strong>How do we process your information?</strong> We
                  process your information to provide, improve, and administer
                  our Services, communicate with you, for security and fraud
                  prevention, and to comply with law. We may also process your
                  information for other purposes with your consent. We process
                  your information only when we have a valid legal reason to do
                  so.{" "}
                  <a href="#information-processing" className="text-blue-600">
                    Learn more about how we process your information.
                  </a>
                </li>
                <li>
                  <strong>
                    In what situations and with which parties do we share
                    personal information?
                  </strong>{" "}
                  We may share information in specific situations and with
                  specific third parties.{" "}
                  <a href="#information-sharing" className="text-blue-600">
                    Learn more about when and with whom we share your personal
                    information.
                  </a>
                </li>
                <li>
                  <strong>How do we keep your information safe?</strong> We have
                  adequate organisational and technical processes and procedures
                  in place to protect your personal information. However, no
                  electronic transmission over the internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorised third parties will not be able to defeat
                  our security and improperly collect, access, steal, or modify
                  your information.{" "}
                  <a href="#information-safety" className="text-blue-600">
                    Learn more about how we keep your information safe.
                  </a>
                </li>
                <li>
                  <strong>What are your rights?</strong> Depending on where you
                  are located geographically, the applicable privacy law may
                  mean you have certain rights regarding your personal
                  information.{" "}
                  <a href="#privacy-rights" className="text-blue-600">
                    Learn more about your privacy rights.
                  </a>
                </li>
                <li>
                  <strong>How do you exercise your rights?</strong> The easiest
                  way to exercise your rights is by submitting a{" "}
                  <a
                    className="text-blue-600"
                    href="https://app.termly.io/notify/ddc1ccee-5f84-4439-8aef-0e87a30aacaf"
                  >
                    data subject access request
                  </a>
                  , or by contacting us. We will consider and act upon any
                  request in accordance with applicable data protection laws.
                </li>
              </ul>

              <p>
                Want to learn more about what we do with any information we
                collect?{" "}
                <a href="#full-privacy-notice">
                  Review the Privacy Notice in full.
                </a>
              </p>
            </section>

            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="tableofcontent"
            >
              <h3 className="text-2xl font-semibold text-black">
                Table of Contents
              </h3>
              <ul className="text-blue-600">
                <li>
                  <a href="#information-collection">
                    1. WHAT INFORMATION DO WE COLLECT?
                  </a>
                </li>
                <li>
                  <a href="#information-processing">
                    2. HOW DO WE PROCESS YOUR INFORMATION?
                  </a>
                </li>
                <li>
                  <a href="#legal-bases">
                    3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                    INFORMATION?
                  </a>
                </li>
                <li>
                  <a href="#information-sharing">
                    4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </a>
                </li>
                <li>
                  <a href="#cookies-tracking">
                    5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </a>
                </li>
                <li>
                  <a href="#data-retention">
                    6. HOW LONG DO WE KEEP YOUR INFORMATION?
                  </a>
                </li>
                <li>
                  <a href="#information-safety">
                    7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                  </a>
                </li>
                <li>
                  <a href="#information-from-minors">
                    8. DO WE COLLECT INFORMATION FROM MINORS?
                  </a>
                </li>
                <li>
                  <a href="#privacy-rights">9. WHAT ARE YOUR PRIVACY RIGHTS?</a>
                </li>
                <li>
                  <a href="#do-not-track">
                    10. CONTROLS FOR DO-NOT-TRACK FEATURES
                  </a>
                </li>
                <li>
                  <a href="#us-residents-privacy">
                    11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </a>
                </li>
                <li>
                  <a href="#updates-to-notice">
                    12. DO WE MAKE UPDATES TO THIS NOTICE?
                  </a>
                </li>
                <li>
                  <a href="#contact-us">
                    13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </a>
                </li>
                <li>
                  <a href="#review-update-delete">
                    14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                    COLLECT FROM YOU?
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="information-collection"
            >
              <h3 className="text-2xl font-semibold text-black">
                1. WHAT INFORMATION DO WE COLLECT?
              </h3>

              <h4 className="text-xl font-semibold text-black">
                Personal information you disclose to us
              </h4>
              <section className="space-y-4">
                <p className="italic">
                  <strong>In Short:</strong> We collect personal information
                  that you provide to us.
                </p>
                <p>
                  We collect personal information that you voluntarily provide
                  to us when you express an interest in obtaining information
                  about us or our products and Services, when you participate in
                  activities on the Services, or otherwise when you contact us.
                </p>
                <h5>Personal Information Provided by You</h5>
                <p>
                  The personal information that we collect depends on the
                  context of your interactions with us and the Services, the
                  choices you make, and the products and features you use. The
                  personal information we collect may include the following:
                </p>
                <ul className="mt-8 font-bold space-y-2 ml-10">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      className="size-5 text-blue-600 mr-1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    Names
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      className="size-5 text-blue-600 mr-1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    Phone numbers
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      className="size-5 text-blue-600 mr-1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    Email addresses
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      className="size-5 text-blue-600 mr-1.5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    Contact preferences
                  </li>
                </ul>
                <p>
                  <strong>Sensitive Information:</strong> We do not process
                  sensitive information.
                </p>
                <p>
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                </p>

                <h4 className="text-xl font-semibold text-black">
                  Information automatically collected
                </h4>
                <p>
                  <strong>In Short:</strong> Some information — such as your
                  Internet Protocol (IP) address and/or browser and device
                  characteristics — is collected automatically when you visit
                  our Services.
                </p>
                <p>
                  We automatically collect certain information when you visit,
                  use, or navigate the Services. This information does not
                  reveal your specific identity (like your name or contact
                  information) but may include device and usage information,
                  such as your IP address, browser and device characteristics,
                  operating system, language preferences, referring URLs, device
                  name, country, location, information about how and when you
                  use our Services, and other technical information. This
                  information is primarily needed to maintain the security and
                  operation of our Services, and for our internal analytics and
                  reporting purposes.
                </p>
                <p>
                  Like many businesses, we also collect information through
                  cookies and similar technologies.
                </p>
              </section>

              <h5>The information we collect includes:</h5>

              <ul className="mt-8 space-y-2 ml-10">
                <li className="">
                  <strong>Log and Usage Data:</strong> Service-related,
                  diagnostic, usage, and performance information our servers
                  automatically collect when you access or use our Services and
                  which we record in log files. This may include your IP
                  address, device information, browser type, settings, and other
                  activity in the Services.
                </li>
                <li>
                  <strong>Device Data:</strong> Information about the device you
                  use to access the Services, such as your IP address, device
                  information, browser type, operating system, and system
                  configuration.
                </li>
                <li>
                  <strong>Location Data:</strong> Information about your
                  device's location, which can be precise or imprecise. This
                  includes GPS and other technologies to collect geolocation
                  data. You can opt out by disabling your location settings on
                  your device.
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-black">Google API</h4>
              <p>
                Our use of information received from Google APIs will adhere to
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  className="text-blue-600"
                >
                  Google API Services User Data Policy
                </a>
                , including the{" "}
                <a
                  className="text-blue-600"
                  href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
                >
                  Limited Use requirements.
                </a>
              </p>
            </div>

            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="information-processing"
            >
              <h3 className="text-2xl font-semibold text-black">
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> We process your information to
                provide, improve, and administer our Services, communicate with
                you, for security and fraud prevention, and to comply with law.
                We may also process your information for other purposes with
                your consent.
              </p>

              <p>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </p>

              <ul className="space-y-4 ml-10 list-disc">
                <li>
                  <strong>
                    To deliver and facilitate delivery of services to the user:
                  </strong>{" "}
                  We may process your information to provide you with the
                  requested service.
                </li>
                <li>
                  <strong>
                    To respond to user inquiries/offer support to users:
                  </strong>{" "}
                  We may process your information to respond to your inquiries
                  and solve any potential issues you might have with the
                  requested service.
                </li>
                <li>
                  <strong>To send administrative information to you:</strong> We
                  may process your information to send you details about our
                  products and services, changes to our terms and policies, and
                  other similar information.
                </li>
                <li>
                  <strong>To enable user-to-user communications:</strong> We may
                  process your information if you choose to use any of our
                  offerings that allow for communication with another user.
                </li>
                <li>
                  <strong>To request feedback:</strong> We may process your
                  information when necessary to request feedback and to contact
                  you about your use of our Services.
                </li>
                <li>
                  <strong>
                    To send you marketing and promotional communications:
                  </strong>{" "}
                  We may process the personal information you send to us for our
                  marketing purposes, if this is in accordance with your
                  marketing preferences. You can opt out of our marketing emails
                  at any time. For more information, see{" "}
                  <a href="#privacy-rights" className="text-blue-600">
                    'WHAT ARE YOUR PRIVACY RIGHTS?'
                  </a>{" "}
                  below.
                </li>
                <li>
                  <strong>To deliver targeted advertising to you:</strong> We
                  may process your information to develop and display
                  personalised content and advertising tailored to your
                  interests, location, and more.
                </li>
                <li>
                  <strong>To protect our Services:</strong> We may process your
                  information as part of our efforts to keep our Services safe
                  and secure, including fraud monitoring and prevention.
                </li>
                <li>
                  <strong>To identify usage trends:</strong> We may process
                  information about how you use our Services to better
                  understand how they are being used so we can improve them.
                </li>
                <li>
                  <strong>
                    To determine the effectiveness of our marketing and
                    promotional campaigns:
                  </strong>{" "}
                  We may process your information to better understand how to
                  provide marketing and promotional campaigns that are most
                  relevant to you.
                </li>
                <li>
                  <strong>
                    To save or protect an individual's vital interest:
                  </strong>{" "}
                  We may process your information when necessary to save or
                  protect an individual’s vital interest, such as to prevent
                  harm.
                </li>
              </ul>
            </div>

            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="legal-bases"
            >
              <h3 className="text-2xl font-semibold text-black">
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> We only process your personal
                information when we believe it is necessary and we have a valid
                legal reason (i.e., legal basis) to do so under applicable law,
                like with your consent, to comply with laws, to provide you with
                services to enter into or fulfil our contractual obligations, to
                protect your rights, or to fulfil our legitimate business
                interests.
              </p>

              <p className="italic underline">
                If you are located in the EU or UK, this section applies to you.
              </p>

              <p>
                The General Data Protection Regulation (GDPR) and UK GDPR
                require us to explain the valid legal bases we rely on in order
                to process your personal information. As such, we may rely on
                the following legal bases to process your personal information:
              </p>

              <ul className="space-y-4 ml-10 list-disc">
                <li>
                  <strong>Consent:</strong> We may process your information if
                  you have given us permission (i.e., consent) to use your
                  personal information for a specific purpose. You can withdraw
                  your consent at any time. Learn more about &nbsp;
                  <a href="#withdrawyourcontent" className="text-blue-600">
                    withdraw your consent
                  </a>
                </li>
                <li>
                  <strong>Performance of a Contract:</strong> We may process
                  your personal information when we believe it is necessary to
                  fulfil our contractual obligations to you, including providing
                  our Services or at your request prior to entering into a
                  contract with you.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> We may process your
                  information when we believe it is reasonably necessary to
                  achieve our legitimate business interests and those interests
                  do not outweigh your interests and fundamental rights and
                  freedoms. For example, we may process your personal
                  information for some of the purposes described in order to:
                  <ul className="space-y-4 ml-10 list-inside">
                    <li>
                      Send users information about special offers and discounts
                      on our products and services
                    </li>
                    <li>
                      Develop and display personalised and relevant advertising
                      content for our users
                    </li>
                    <li>
                      Analyse how our Services are used so we can improve them
                      to engage and retain users
                    </li>
                    <li>Support our marketing activities</li>
                    <li>
                      Diagnose problems and/or prevent fraudulent activities
                    </li>
                    <li>
                      Understand how our users use our products and services so
                      we can improve user experience
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Legal Obligations:</strong> We may process your
                  information where we believe it is necessary for compliance
                  with our legal obligations, such as to cooperate with a law
                  enforcement body or regulatory agency, exercise or defend our
                  legal rights, or disclose your information as evidence in
                  litigation in which we are involved.
                </li>
                <li>
                  <strong>Vital Interests:</strong> We may process your
                  information where we believe it is necessary to protect your
                  vital interests or the vital interests of a third party, such
                  as situations involving potential threats to the safety of any
                  person.
                </li>
              </ul>

              <p className="italic underline">
                If you are located in Canada, this section applies to you.
              </p>

              <p>
                We may process your information if you have given us specific
                permission (i.e., express consent) to use your personal
                information for a specific purpose, or in situations where your
                permission can be inferred (i.e., implied consent). You can
                &nbsp;
                <a href="#withdrawyourcontent" className="text-blue-600">
                  withdraw your consent
                </a>{" "}
                at any time.
              </p>

              <p>
                In some exceptional cases, we may be legally permitted under
                applicable law to process your information without your consent,
                including, for example:
              </p>

              <ul className="space-y-4 ml-10 list-disc">
                <li>
                  If collection is clearly in the interests of an individual and
                  consent cannot be obtained in a timely way
                </li>
                <li>For investigations and fraud detection and prevention</li>
                <li>
                  For business transactions provided certain conditions are met
                </li>
                <li>
                  If it is contained in a witness statement and the collection
                  is necessary to assess, process, or settle an insurance claim
                </li>
                <li>
                  For identifying injured, ill, or deceased persons and
                  communicating with next of kin
                </li>
                <li>
                  If we have reasonable grounds to believe an individual has
                  been, is, or may be a victim of financial abuse
                </li>
                <li>
                  If it is reasonable to expect collection and use with consent
                  would compromise the availability or the accuracy of the
                  information and the collection is reasonable for purposes
                  related to investigating a breach of an agreement or a
                  contravention of the laws of Canada or a province
                </li>
                <li>
                  If disclosure is required to comply with a subpoena, warrant,
                  court order, or rules of the court relating to the production
                  of records
                </li>
                <li>
                  If it was produced by an individual in the course of their
                  employment, business, or profession and the collection is
                  consistent with the purposes for which the information was
                  produced
                </li>
                <li>
                  If the collection is solely for journalistic, artistic, or
                  literary purposes
                </li>
                <li>
                  If the information is publicly available and is specified by
                  the regulations
                </li>
              </ul>
            </div>

            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="share-personal-info"
            >
              <h3 className="text-2xl font-semibold text-black">
                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> We may share information in specific
                situations described in this section and/or with the following
                third parties.
              </p>

              <p>
                We may need to share your personal information in the following
                situations:
              </p>

              <ul className="space-y-4 ml-10 list-disc">
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer
                  your information in connection with, or during negotiations
                  of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business to another
                  company.
                </li>
                <li>
                  <strong>When we use Google Maps Platform APIs:</strong> We may
                  share your information with certain Google Maps Platform APIs
                  (e.g., Google Maps API, Places API). Google Maps uses GPS,
                  Wi-Fi, and cell towers to estimate your location. GPS is
                  accurate to about 20 meters, while Wi-Fi and cell towers help
                  improve accuracy when GPS signals are weak, like indoors. This
                  data helps Google Maps provide directions, but it is not
                  always perfectly precise.
                </li>
              </ul>
            </div>

            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="use-of-cookies"
            >
              <h3 className="text-2xl font-semibold text-black">
                5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> We may use cookies and other tracking
                technologies to collect and store your information.
              </p>

              <p>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to gather information when you interact with
                our Services. Some online tracking technologies help us maintain
                the security of our Services, prevent crashes, fix bugs, save
                your preferences, and assist with basic site functions.
              </p>

              <p>
                We also permit third parties and service providers to use online
                tracking technologies on our Services for analytics and
                advertising, including to help manage and display
                advertisements, to tailor advertisements to your interests, or
                to send abandoned shopping cart reminders (depending on your
                communication preferences). The third parties and service
                providers use their technology to provide advertising about
                products and services tailored to your interests which may
                appear either on our Services or on other websites.
              </p>

              <p>
                To the extent these online tracking technologies are deemed to
                be a 'sale'/'sharing' (which includes targeted advertising, as
                defined under the applicable laws) under applicable US state
                laws, you can opt out of these online tracking technologies by
                submitting a request as described below under section{" "}
                <a href="#us-residents-privacy" className="text-blue-500">
                  'DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?'
                </a>
                .
              </p>

              <p>
                Specific information about how we use such technologies and how
                you can refuse certain cookies is set out in our{" "}
                <a href="#cookies-tracking" className="text-blue-500">
                  Cookie Notice
                </a>
                .
              </p>
              <h4 className="text-xl font-semibold text-black">
                Google Analytics
              </h4>
              <p>
                We may share your information with Google Analytics to track and
                analyse the use of the Services. The Google Analytics
                Advertising Features that we may use include: Google Analytics
                Demographics and Interests Reporting, Remarketing with Google
                Analytics and Google Display Network Impressions Reporting. To
                opt out of being tracked by Google Analytics across the
                Services, visit{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
                . You can opt out of Google Analytics Advertising Features
                through Ads Settings and Ad Settings for mobile apps. Other
                opt-out means include{" "}
                <a
                  href="http://optout.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  http://optout.networkadvertising.org/
                </a>{" "}
                and{" "}
                <a
                  href="http://www.networkadvertising.org/mobile-choice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  http://www.networkadvertising.org/mobile-choice
                </a>
                . For more information on the privacy practices of Google,
                please visit the{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Google Privacy & Terms
                </a>{" "}
                page.
              </p>
            </div>
            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="data-retention"
            >
              <h3 className="text-2xl font-semibold text-black">
                6. HOW LONG DO WE KEEP YOUR INFORMATION?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> We keep your information for as long
                as necessary to fulfil the purposes outlined in this Privacy
                Notice unless otherwise required by law.
              </p>

              <p>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this Privacy Notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements).
              </p>

              <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymise such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>
            </div>
            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="information-safety"
            >
              <h3 className="text-2xl font-semibold text-black">
                7. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> We aim to protect your personal
                information through a system of organisational and technical
                security measures.
              </p>

              <p>
                We have implemented appropriate and reasonable technical and
                organisational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorised third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
              </p>
            </div>
            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="information-from-minors"
            >
              <h3 className="text-2xl font-semibold text-black">
                8. DO WE COLLECT INFORMATION FROM MINORS?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> We do not knowingly collect data from
                or market to children under 18 years of age.
              </p>

              <p>
                We do not knowingly collect, solicit data from, or market to
                children under 18 years of age, nor do we knowingly sell such
                personal information. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at
                support@wecodethat.com.
              </p>
            </div>
            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="privacy-rights"
            >
              <h3 className="text-2xl font-semibold text-black">
                9. WHAT ARE YOUR PRIVACY RIGHTS?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> Depending on your state of residence
                in the US or in some regions, such as the European Economic Area
                (EEA), United Kingdom (UK), Switzerland, and Canada, you have
                rights that allow you greater access to and control over your
                personal information. You may review, change, or terminate your
                account at any time, depending on your country, province, or
                state of residence.
              </p>

              <p>
                In some regions (like the EEA, UK, Switzerland, and Canada), you
                have certain rights under applicable data protection laws. These
                may include the right (i) to request access and obtain a copy of
                your personal information, (ii) to request rectification or
                erasure; (iii) to restrict the processing of your personal
                information; (iv) if applicable, to data portability; and (v)
                not to be subject to automated decision-making. In certain
                circumstances, you may also have the right to object to the
                processing of your personal information. You can make such a
                request by contacting us by using the contact details provided
                in the section '&nbsp;
                <a href="#contact-us" className="text-blue-600">
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>{" "}
                ' below.
              </p>

              <p>
                We will consider and act upon any request in accordance with
                applicable data protection laws.
              </p>

              <p>
                If you are located in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your{" "}
                <a
                  className="text-blue-600"
                  href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                >
                  Member State data protection authority
                </a>{" "}
                or{" "}
                <a
                  href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
                  className="text-blue-600"
                >
                  UK data protection authority.
                </a>
              </p>

              <p>
                If you are located in Switzerland, you may contact the{" "}
                <a
                  href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                  className="text-blue-600"
                >
                  {" "}
                  Federal Data Protection and Information Commissioner.
                </a>{" "}
              </p>

              <p id="withdrawyourcontent">
                <strong>Withdrawing your consent:</strong> If we are relying on
                your consent to process your personal information, which may be
                express and/or implied consent depending on the applicable law,
                you have the right to withdraw your consent at any time. You can
                withdraw your consent at any time by contacting us by using the
                contact details provided in the section &nbsp;
                <a href="#contact-us" className="text-blue-600">
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>{" "}
                below.
              </p>

              <p>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
              </p>

              <p>
                <strong>
                  Opting out of marketing and promotional communications:
                </strong>{" "}
                You can unsubscribe from our marketing and promotional
                communications at any time by clicking on the unsubscribe link
                in the emails that we send, replying 'STOP' or 'UNSUBSCRIBE' to
                the SMS messages that we send, or by contacting us using the
                details provided in the section&nbsp;
                <a href="#contact-us" className="text-blue-600">
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>{" "}
                below. You will then be removed from the marketing lists.
                However, we may still communicate with you — for example, to
                send you service-related messages that are necessary for the
                administration and use of your account, to respond to service
                requests, or for other non-marketing purposes.
              </p>

              <p>
                <strong>Cookies and similar technologies:</strong> Most Web
                browsers are set to accept cookies by default. If you prefer,
                you can usually choose to set your browser to remove cookies and
                to reject cookies. If you choose to remove cookies or reject
                cookies, this could affect certain features or services of our
                Services.
              </p>

              <p>
                If you have questions or comments about your privacy rights, you
                may email us at{" "}
                <a
                  href="mailto:support@wecodethat.com"
                  className="text-blue-600"
                >
                  support@wecodethat.com
                </a>
                .
              </p>
            </div>

            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="do-not-track"
            >
              <h3 className="text-2xl font-semibold text-black">
                10. CONTROLS FOR DO-NOT-TRACK FEATURES
              </h3>

              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ('DNT') feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage, no uniform technology standard for
                recognising and implementing DNT signals has been finalised. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this Privacy Notice.
              </p>

              <p>
                California law requires us to let you know how we respond to web
                browser DNT signals. Because there currently is not an industry
                or legal standard for recognising or honouring DNT signals, we
                do not respond to them at this time.
              </p>
            </div>

            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="us-residents-privacy-rights"
            >
              <h3 className="text-2xl font-semibold text-black">
                11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> If you are a resident of California,
                Colorado, Connecticut, Delaware, Florida, Indiana, Iowa,
                Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New
                Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may
                have the right to request access to and receive details about
                the personal information we maintain about you and how we have
                processed it, correct inaccuracies, get a copy of, or delete
                your personal information. You may also have the right to
                withdraw your consent to our processing of your personal
                information. These rights may be limited in some circumstances
                by applicable law. More information is provided below.
              </p>

              <h4 className="text-xl font-semibold text-black">
                Categories of Personal Information We Collect
              </h4>
              <p>
                We have collected the following categories of personal
                information in the past twelve (12) months:
              </p>

              <div className="rounded-xl overflow-hidden border">
                <table className=" divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Category
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Examples
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Collected
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {[
                      [
                        "A. Identifiers",
                        "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
                        "NO",
                      ],
                      [
                        "B. Personal information as defined in the California Customer Records statute",
                        "Name, contact information, education, employment, employment history, and financial information",
                        "NO",
                      ],
                      [
                        "C. Protected classification characteristics under state or federal law",
                        "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data",
                        "NO",
                      ],
                      [
                        "D. Commercial information",
                        "Transaction information, purchase history, financial details, and payment information",
                        "NO",
                      ],
                      [
                        "E. Biometric information",
                        "Fingerprints and voiceprints",
                        "NO",
                      ],
                      [
                        "F. Internet or other similar network activity",
                        "Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements",
                        "NO",
                      ],
                      ["G. Geolocation data", "Device location", "NO"],
                      [
                        "H. Audio, electronic, sensory, or similar information",
                        "Images and audio, video or call recordings created in connection with our business activities",
                        "NO",
                      ],
                      [
                        "I. Professional or employment-related information",
                        "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
                        "NO",
                      ],
                      [
                        "J. Education Information",
                        "Student records and directory information",
                        "NO",
                      ],
                      [
                        "K. Inferences drawn from collected personal information",
                        "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics",
                        "NO",
                      ],
                      ["L. Sensitive personal Information", "", "NO"],
                    ].map(([category, examples, collected]) => (
                      <tr key={category} className="even:bg-gray-50">
                        <td className=" px-3 py-4 text-sm text-gray-500">
                          {category}
                        </td>
                        <td className=" px-3 py-4 text-sm text-gray-500">
                          {examples}
                        </td>
                        <td className=" px-3 py-4 text-sm text-gray-500">
                          {collected}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                We may also collect other personal information outside of these
                categories through instances where you interact with us in
                person, online, or by phone or mail in the context of:
              </p>
              <ul className="space-y-4 list-disc ml-10">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests;</li>
                <li>
                  Facilitation in the delivery of our Services and to respond to
                  your inquiries.
                </li>
              </ul>

              <p>
                We will use and retain the collected personal information as
                needed to provide the Services or for:
              </p>
              <ul className="list-disc ml-10">
                <li>Category H - 6 months</li>
              </ul>

              <h4 className="text-xl font-semibold text-black">
                Sources of Personal Information
              </h4>

              <p>
                Learn more about the sources of personal information we collect
                in{" "}
                <a href="#information-collection" className="text-blue-600">
                  WHAT INFORMATION DO WE COLLECT?
                </a>
                .
              </p>
              <h4 className="text-xl font-semibold text-black">
                How We Use and Share Personal Information
              </h4>

              <p>
                Learn more about how we use your personal information in the
                section,{" "}
                <a href="#information-processing" className="text-blue-600">
                  HOW DO WE PROCESS YOUR INFORMATION?
                </a>
                .
              </p>

              <h4 className="text-xl font-semibold text-black">
                Will your information be shared with anyone else?
              </h4>
              <p>
                We may disclose your personal information with our service
                providers pursuant to a written contract between us and each
                service provider. Learn more about how we disclose personal
                information to in the section,
                <a href="#information-sharing" className="text-blue-600">
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
                .
              </p>

              <p>
                We may use your personal information for our own business
                purposes, such as for undertaking internal research for
                technological development and demonstration. This is not
                considered to be 'selling' of your personal information.
              </p>

              <p>
                We have not disclosed, sold, or shared any personal information
                to third parties for a business or commercial purpose in the
                preceding twelve (12) months. We will not sell or share personal
                information in the future belonging to website visitors, users,
                and other consumers.
              </p>

              <h4 className="text-xl font-semibold text-black">Your Rights</h4>
              <p>
                You have rights under certain US state data protection laws.
                However, these rights are not absolute, and in certain cases, we
                may decline your request as permitted by law. These rights
                include:
              </p>
              <ul className="space-y-4 list-disc ml-10">
                <li>
                  Right to know whether or not we are processing your personal
                  data
                </li>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccuracies in your personal data</li>
                <li>Right to request the deletion of your personal data</li>
                <li>
                  Right to obtain a copy of the personal data you previously
                  shared with us
                </li>
                <li>Right to non-discrimination for exercising your rights</li>
                <li>
                  Right to opt out of the processing of your personal data if it
                  is used for targeted advertising (or sharing as defined under
                  California’s privacy law), the sale of personal data, or
                  profiling in furtherance of decisions that produce legal or
                  similarly significant effects ('profiling')
                </li>
              </ul>

              <p>
                Depending upon the state where you live, you may also have the
                following rights:
              </p>
              <ul className="space-y-4 list-disc ml-10">
                <li>
                  Right to access the categories of personal data being
                  processed (as permitted by applicable law, including
                  Minnesota’s privacy law)
                </li>
                <li>
                  Right to obtain a list of the categories of third parties to
                  which we have disclosed personal data (as permitted by
                  applicable law, including California's and Delaware's privacy
                  law)
                </li>
                <li>
                  Right to obtain a list of specific third parties to which we
                  have disclosed personal data (as permitted by applicable law,
                  including Minnesota's and Oregon's privacy law)
                </li>
                <li>
                  Right to review, understand, question, and correct how
                  personal data has been profiled (as permitted by applicable
                  law, including Minnesota’s privacy law)
                </li>
                <li>
                  Right to limit use and disclosure of sensitive personal data
                  (as permitted by applicable law, including California’s
                  privacy law)
                </li>
                <li>
                  Right to opt out of the collection of sensitive data and
                  personal data collected through the operation of a voice or
                  facial recognition feature (as permitted by applicable law,
                  including Florida’s privacy law)
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-black">
                How to Exercise Your Rights
              </h4>
              <p>
                To exercise these rights, you can contact us by submitting a
                data subject access request, by emailing us at{" "}
                <a
                  href="mailto:support@wecodethat.com"
                  className="text-blue-600"
                >
                  support@wecodethat.com
                </a>
                , by visiting{" "}
                <a
                  href="https://wecodethat.com/contact-us"
                  className="text-blue-600"
                >
                  https://wecodethat.com/contact-us
                </a>
                , or by referring to the contact details at the bottom of this
                document.
              </p>

              <p>
                We will honour your opt-out preferences if you enact the{" "}
                <a
                  href="https://globalprivacycontrol.org/"
                  className="text-blue-600"
                >
                  Global Privacy Control
                </a>{" "}
                (GPC) opt-out signal on your browser.
              </p>

              <h4 className="text-xl font-semibold text-black">
                Request Verification
              </h4>
              <p>
                Upon receiving your request, we will need to verify your
                identity to determine you are the same person about whom we have
                the information in our system. We will only use personal
                information provided in your request to verify your identity or
                authority to make the request. However, if we cannot verify your
                identity from the information already maintained by us, we may
                request that you provide additional information for the purposes
                of verifying your identity and for security or fraud-prevention
                purposes.
              </p>

              <p>
                If you submit the request through an authorised agent, we may
                need to collect additional information to verify your identity
                before processing your request and the agent will need to
                provide a written and signed permission from you to submit such
                request on your behalf.
              </p>

              <h4 className="text-xl font-semibold text-black">Appeals</h4>
              <p>
                Under certain US state data protection laws, if we decline to
                take action regarding your request, you may appeal our decision
                by emailing us at{" "}
                <a
                  href="mailto:support@wecodethat.com"
                  className="text-blue-600"
                >
                  support@wecodethat.com
                </a>
                . We will inform you in writing of any action taken or not taken
                in response to the appeal, including a written explanation of
                the reasons for the decisions. If your appeal is denied, you may
                submit a complaint to your state attorney general.
              </p>

              <h4 className="text-xl font-semibold text-black">
                California 'Shine The Light' Law
              </h4>
              <p>
                California Civil Code Section 1798.83, also known as the 'Shine
                The Light' law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us by using
                the contact details provided in the section&nbsp;
                <a href="#contact-us" className="text-blue-600">
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
              </p>
            </div>

            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="updates-to-notice"
            >
              <h3 className="text-2xl font-semibold text-black">
                12. DO WE MAKE UPDATES TO THIS NOTICE?
              </h3>

              <p className="italic">
                <strong>In Short:</strong> Yes, we will update this notice as
                necessary to stay compliant with relevant laws.
              </p>
              <p>
                We may update this Privacy Notice from time to time. The updated
                version will be indicated by an updated 'Revised' date at the
                top of this Privacy Notice. If we make material changes to this
                Privacy Notice, we may notify you either by prominently posting
                a notice of such changes or by directly sending you a
                notification. We encourage you to review this Privacy Notice
                frequently to be informed of how we are protecting your
                information.
              </p>
            </div>
            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="contact-us"
            >
              <h3 className="text-2xl font-semibold text-black">
                13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </h3>

              <p>
                If you have questions or comments about this notice, you may
                email us at{" "}
                <a
                  href="mailto:support@wecodethat.com"
                  className="text-blue-600"
                >
                  support@wecodethat.com
                </a>{" "}
                or contact us by post at:
              </p>

              <address className="not-italic">
                <strong>WE CODE THAT</strong>
                <br />
                No.3, 5th Cross Street, MGR Nagar, Thirumullaivoyal, Chennai -
                600062
                <br />
                Chennai, Tamil Nadu 600062
                <br />
                India
              </address>
            </div>
            <div
              className="text-gray-600 mt-8 font-medium leading-relaxed space-y-6"
              id="review-update-delete"
            >
              <h3 className="text-2xl font-semibold text-black">
                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </h3>

              <p>
                Based on the applicable laws of your country or state of
                residence in the US, you may have the right to request access to
                the personal information we collect from you, details about how
                we have processed it, correct inaccuracies, or delete your
                personal information. You may also have the right to withdraw
                your consent to our processing of your personal information.
                These rights may be limited in some circumstances by applicable
                law.
              </p>

              <p>
                To request to review, update, or delete your personal
                information, please fill out and submit a &nbsp;
                <a
                  href="https://app.termly.io/notify/ddc1ccee-5f84-4439-8aef-0e87a30aacaf"
                  className="text-blue-600"
                >
                  data subject access request.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterBlock />
      <ScrollToTop percentage={scrollPercentage} />
    </div>
  );
};

export default page;
