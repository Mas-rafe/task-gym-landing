// components/TrainingSection.jsx
export default function TrainingSection() {
  return (
    <section className="py-20 bg-gray-100 px-6">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Train Like a Champion
        </h2>
        <p className="mt-3 text-lg lg:text-xl text-gray-700">
          Unleash Your Power with Expert Boxing Training
        </p>
      </div>

      {/* Content Block */}
      <div className="w-full  mx-auto bg-black text-white rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Image */}
        <div className="lg:w-[32%] relative">
          <img
            src="/man.jpg"
            alt="Trainer"
            className="w-full h-full p-6 rounded-4xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-[58%] px-8 lg:px-10 py-10 flex flex-col justify-start">
          
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 lg:text-3xl ">
            
            {/* Left Column */}
            <div >
              <h3 className="font-bold text-lg lg:text-3xl mb-5">
                Training Focus Areas:
              </h3> <br />
              <ul className="space-y-5 text-gray-300">
                <li>
                  <p className="font-semibold">Strength & Conditioning</p>
                  <p className="text-lg">
                    Develop knockout power with a mix of strength training and explosive movements.
                  </p>
                </li> <br />
                <li>
                  <p className="font-semibold">Speed & Agility</p>
                  <p className="text-lg">
                    Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Endurance Training</p>
                  <p className="text-lg">
                    Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="font-bold text-lg lg:text-xl mb-5">
                Why Train With Us:
              </h3>
              <ul className="space-y-5 text-gray-300 mb-6">
                <li>
                  <p className="font-semibold">Expert Coaches</p>
                  <p className="text-sm">
                    Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Flexible Programs</p>
                  <p className="text-sm">
                    Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs.
                  </p>
                </li>
              </ul>

              {/* Button + Play */}
              <div className="flex items-center gap-4">
                <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-semibold">
                  Punch Now
                </button>

                <button className="border border-green-500 rounded-full p-3 hover:bg-green-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.24v7.52a1 1 0 001.234.97l6.518-1.885a1 1 0 00.748-.97v-2.752a1 1 0 00-.748-.970z"
                    />
                  </svg>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}