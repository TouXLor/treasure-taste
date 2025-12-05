import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#FFFBF0] py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column – Photos & Names */}
        <div className="flex flex-col items-center space-y-10">
          {/* Person 1 */}
          <div
            className="flex flex-col items-center"
            style={{ marginRight: "10rem" }}
          >
            <div className="w-48 h-60 rounded-full bg-amber-300 overflow-hidden flex items-center justify-center shadow-md">
              <img
                src="https://thumbs.dreamstime.com/b/confident-male-owner-standing-grocery-store-portrait-senior-hands-folded-smiling-37103659.jpg" // <-- replace with your actual file
                alt="Sheyou"
                className="h-full object-cover"
              />
            </div>
            <p className="mt-4 font-[cursive] text-3xl text-gray-800">Sheyou</p>
          </div>

          {/* Person 2 */}
          <div
            className="flex flex-col items-center"
            style={{ marginLeft: "10rem" }}
          >
            <div className="w-48 h-60 rounded-full bg-amber-300 overflow-hidden flex items-center justify-center shadow-md">
              <img
                src="https://thumbs.dreamstime.com/b/elderly-store-manager-stands-smiling-her-arms-crossed-supermarket-189644840.jpg" // <-- replace with your actual file
                alt="Mailee"
                className="h-full object-cover"
              />
            </div>
            <p className="mt-4 font-[cursive] text-3xl text-gray-800">Mailee</p>
          </div>
        </div>

        {/* Right Column – Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            About Us
          </h1>

          <p className="text-lg leading-relaxed text-gray-800">
            At TT, we believe in blending creativity and function to create
            experiences that stand out. Our journey started with a small team of
            curious minds who wanted to make everyday things more meaningful,
            whether through design, technology, or community. We’re not afraid
            to experiment, learn, and grow along the way.
            <br />
            <br />
            What drives us is simple: people. Every idea, every project, and
            every solution begins with understanding what matters most to the
            people we serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
