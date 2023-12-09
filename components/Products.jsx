import React from "react";

const solution = {
  title: {
    title1: "Lorem ipsum dolor sit.",
    title2: "Lorem ipsum dolor sit.",
    title3: "Lorem ipsum dolor sit.",
    title4: "Lorem ipsum dolor sit.",
    title5: "Lorem ipsum dolor sit.",
  },

  desc: {
    desc1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti vel doloribus dicta ut non quia voluptatum aperiam nulla natus. ",
    desc2:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime. ",
    desc3:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime. ",
    desc4:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime. ",
    desc5:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime. ",
  },

  images: {
    img1: "/pic3.png",
    img2: "/img2.jpg",
    img3: "/img1.png",
    img4: "/pic5.jpg",
    img5: "/pic4.jpg",
  },
};

function Products() {
  return (
    <>
      <div className="px-4 py-5">
        <div className="mx-auto container">
          <div className="mx-6 md:mx:18 lg:mx-32 py-8">
            <h1 className="uppercase font font-extrabold text-xl lg:text-3xl font-sans mb-3 flex justify-center mx-auto">
              Our Products
            </h1>
            <p className="text-slate-700 max-w-2xl pb-5 flex justify-center mx-auto text-center text-sm lg:text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae ducimus molestias distinctio quis voluptatem enim,
              dolores, iusto impedit esse ipsum officiis aperiam obcaecati ad
              magni dolor nostrum pariatur laborum iure architecto aliquid
              vitae, odio sequi. Minus deserunt hic quisquam assumenda?
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div className="">
              <img className="w-full" src={solution.images.img1} alt="Image" />
              <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p className="text-sm text-white font-semibold tracking-wide">
                  {solution.title.title1}
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                  1st Jan, 2023
                </p>
              </div>
              <div className="bg-gray-100 px-10 py-6 rounded-b-lg">
                <p className="text-gray-700 text-base lg:text-lg   tracking-wide mt-6 w-11/12">
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
                  <img
                    className="w-full"
                    src={solution.images.img2}
                    alt="games"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">
                      {solution.title.title2}
                    </p>
                    <p className="text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-gray-100 px-3  lg:px-6 py-4 rounded-b-lg">
                    <p className="text-gray-700 text-sm  lg:text-base   pr-4 tracking-wide mt-2">
                      {solution.desc.desc2}
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="w-full"
                    src={solution.images.img3}
                    alt="notes"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">
                      {solution.title.title3}
                    </p>
                    <p className="text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-gray-100 px-3  lg:px-6 py-4 rounded-b-lg">
                    <p className="text-gray-700 text-sm  lg:text-base   pr-4 tracking-wide mt-2">
                      {solution.desc.desc3}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div>
                  <img
                    className="w-full"
                    src={solution.images.img4}
                    alt="laptop"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">
                      {solution.title.title4}
                    </p>
                    <p className="text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-gray-100 px-3  lg:px-6 py-4 rounded-b-lg">
                    <p className="text-gray-700 text-sm  lg:text-base   pr-4 tracking-wide mt-2">
                      {solution.desc.desc4}
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="w-full"
                    src={solution.images.img5}
                    alt="worker"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">
                      {solution.title.title5}
                    </p>
                    <p className="text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-gray-100 px-3  lg:px-6 py-4 rounded-b-lg">
                    <p className="text-gray-700 text-sm  lg:text-base   pr-4 tracking-wide mt-2">
                      {solution.desc.desc5}
                    </p>
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

export default Products;
