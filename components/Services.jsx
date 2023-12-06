import React from "react";

function index() {
  return (
    <div style={{ fontFamily: '"Lato", sans-serif' }}>
      {/* Code block starts */}
        <section className="mx-auto container pt-8 bg-gray-100 rounded-3xl">
          <div>
            <div className="flex items-center flex-col px-4">
              <p className="uppercase text-sm font-semibold text-center text-slate-900">
                Healthcare Beyond Borders
              </p>
            </div>
            <div className="focus:outline-none mt-16 flex flex-wrap justify-center gap-10 px-4">
              <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
                      alt="drawer"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 className="focus:outline-none text-lg font-bold leading-tight text-gray-800">
                    Global Sourcing
                  </h2>
                  <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                    Access a global repository of top-grade medicines and
                    advanced medical tools, sourced worldwide for unparalleled
                    quality and effectiveness, ensuring optimal healthcare
                    solutions for your needs.
                  </p>
                </div>
              </div>
              <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                      alt="check"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
                    Expert Consultation
                  </h2>
                  <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                    Receive personalized guidance and expert consultations from
                    qualified professionals, ensuring informed decisions and
                    tailored healthcare solutions catered to your specific
                    requirements.
                  </p>
                </div>
              </div>
              <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                      alt="html tag"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
                    Efficient Delivery
                  </h2>
                  <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                    Experience prompt and reliable delivery services, ensuring
                    swift access to vital medications and medical equipment,
                    prioritizing your health and convenience at every step of
                    the process.
                  </p>
                </div>
              </div>
              <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
                      alt="monitor"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">
                    Quality Assurance
                  </h2>
                  <p className="focus:outline-none text-sm text-gray-600 leading-normal pt-2">
                    Rest assured with our stringent quality checks and adherence
                    to international standards, guaranteeing only the finest,
                    approved products, and medications for your health and
                    well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Code block ends */}
    </div>
  );
}

export default index;
