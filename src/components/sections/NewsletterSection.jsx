const NewsletterSection = () => {
  return (
    <section className="px-6 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-black text-white rounded-[40px] px-6 md:px-12 py-16 text-center">

        {/* 🔹 Small Heading */}
        <p className="text-gray-400 text-sm sm:text-base md:text-base mb-3">
          Join to our community
        </p>

        {/* 🔹 Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>

        {/* 🔹 Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Stay updated with our latest fitness programs, exclusive offers,
          and expert tips to boost your performance.
        </p>

        {/* 🔹 Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <div className="flex items-center w-full sm:w-[500px] border border-gray-600 rounded-full px-2 py-2 bg-black">
            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none px-4 py-2 text-sm sm:text-base text-white placeholder-gray-400"
            />

            {/* Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;