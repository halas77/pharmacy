import React from "react";

const Services = () => {
  return (
    <section className="bg-gray-100 py-4 lg:py-16">
      <div className="container flex flex-col px-4 mx-auto space-y-6 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-6 md:w-1/2">
          <h2 className=" text-4xl font-bold md:text-left">
            About our company
          </h2>
          <p className="md:max-w-xl text-gray-700 md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            reiciendis facilis. Dolor laborum voluptatum quasi autem reiciendis
            temporibus. Expedita dolorem atque nostrum dicta officia eaque
            perspiciatis eum magni animi, totam saepe qui ducimus iure
            laudantium quod quis asperiores eius corrupti molestias veritatis
            consectetur quidem. Debitis itaque quisquam assumenda omnis iste.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-indigo-100 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-indigo-700">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p className="text-gray-700">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-indigo-100 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-indigo-700">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p className="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-indigo-100 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-indigo-700">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p className="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;