import React from "react";

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <div className="bg-white text-base px-6 pt-20 text-start">
      <main className="relative mx-auto md:max-w-screen-md">
        {/* <div className="top-20 -left-56 mb-10 w-full max-w-xs rounded-md border bg-white px-6 py-6 shadow-md lg:absolute lg:w-56">
          <div className="pb-2 text-xl font-medium text-orange-600">
            Table of Contents
          </div>
          <hr className="h-1 w-10 bg-orange-600" />
          <div className="mt-4">
            <div className="mb-3">
              <a
                className="mb-1 text-sm font-medium text-orange-600 hover:text-orange-600"
                href="/#section-one"
              >
                Section One
              </a>
            </div>
            <div className="mb-3">
              <a
                className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                href="#section-two"
              >
                Section Two
              </a>
            </div>
            <div className="mb-3">
              <a
                className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                href="#"
              >
                How to get Stuff Done
              </a>
            </div>
            <div className="mb-3">
              <a
                className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                href="#"
              >
                Lorem ipsum dolor
              </a>
            </div>
            <div className="mb-3">
              <a
                className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                href="#"
              >
                Are Aliens tiny?
              </a>
            </div>
            <div className="mb-3">
              <a
                className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                href="#"
              >
                Ipsum Dolor
              </a>
            </div>
          </div>
        </div> */}
        <div>{children}</div>
      </main>
    </div>
  );
}
