import React from "react";

export default function page() {
  return (
    <div>
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptates culpa tenetur voluptatem quas non itaque iure inventore labore a vitae, consequatur enim, laboriosam cum.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">85+</h3>
            <p className="text-gray-700">Specialists</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">25+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}
