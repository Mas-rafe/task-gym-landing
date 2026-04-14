const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 sm:px-10 md:px-16 py-16">

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

        {/*  About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <p className="text-sm leading-relaxed mb-4 max-w-sm mx-auto sm:mx-0">
            At MuscleForge, we believe in the power of dedication and hard work.
            Our mission is to provide you with the tools, resources, and community
            you need to build the body of your dreams.
          </p>

          <p className="text-sm flex justify-center sm:justify-start gap-3">
            <span className="font-medium">Social Media:</span>
            <span>Fb</span>
            <span>In</span>
            <span>Tw</span>
          </p>
        </div>

        {/*  Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Our gym location</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/*  Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Service</h3>
          <ul className="space-y-2 text-sm">
            <li>Indoor gym</li>
            <li>Outdoor gym</li>
            <li>On ground gym</li>
            <li>Yoga class</li>
          </ul>
        </div>

        {/*  Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm break-words">
            <li>Mail: info@example.com</li>
            <li>Call: +91 9876543210</li>
            <li>Location: New York, 235 Lane, 10001</li>
            <li>Time: Workout Hours: 5AM - 8PM</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-xs sm:text-sm">
        websitename.com © 2024 all rights reserved
      </div>

    </footer>
  );
};

export default Footer;