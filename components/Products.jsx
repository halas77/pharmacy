import React from "react";
function IndexPage() {
  return (
    <>
      <div className="px-4 xl:px-0 ">
        <div className="mx-auto container">
          <div className="mt-12 lg:mt-24">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div>
                <img className="w-full" src="/pic.png" alt="Image" />
                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                  <p className="text-sm text-white font-semibold tracking-wide">
                    Medicine&apos;s Name
                  </p>
                  <p className="text-sm text-white font-semibold tracking-wide">
                    1st Jan, 2023
                  </p>
                </div>
                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                  <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">
                    About the medicine
                  </h1>
                  <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem itaque distinctio asperiores mollitia pariatur
                    incidunt. Earum quis facere sunt similique odit molestias
                    architecto praesentium dolorem eum, minus iste aliquid
                    aspernatur pariatur voluptas quidem rem nam optio temporibus
                    officiis maxime ipsum.
                  </p>
                  <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                    <p className="text-base tracking-wide text-indigo-500">
                      See more products
                    </p>
                    <svg
                      className="ml-3 lg:ml-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={18}
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                        stroke="#4338ca"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 8.53662H19"
                        stroke="#4338ca"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="h-5 w-2" />
                </div>
              </div>
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div>
                    <img className="w-full" src="img2.jpg" alt="games" />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Medicine&apos;s Name
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                        Medicine&apos;s Name
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Minus iste aliquid aspernatur pariatur voluptas quidem
                        rem nam optio temporibus officiis maxime ipsum.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img className="w-full" src="img2.jpg" alt="notes" />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Medicine&apos;s Name
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                      Medicine&apos;s Name
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Minus iste aliquid aspernatur pariatur voluptas quidem
                        rem nam optio temporibus officiis maxime ipsum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div>
                    <img className="w-full" src="img2.jpg" alt="laptop" />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                      Medicine&apos;s Name
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                      Medicine&apos;s Name
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Minus iste aliquid aspernatur pariatur voluptas quidem
                        rem nam optio temporibus officiis maxime ipsum.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img className="w-full" src="img2.jpg" alt="worker" />
                    <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                      Medicine&apos;s Name
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                      Medicine&apos;s Name
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                        Minus iste aliquid aspernatur pariatur voluptas quidem
                        rem nam optio temporibus officiis maxime ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
