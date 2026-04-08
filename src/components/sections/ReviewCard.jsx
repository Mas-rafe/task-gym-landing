const ReviewCard = ({ review }) => {
  return (
    <div className="bg-black rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-lg">

      {/* 🔹 Title */}
      <h3 className="text-white text-xl font-semibold mb-3">
        {review.title}
      </h3>

      {/* 🔹 Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {review.text}
      </p>

      {/* 🔹 Bottom Section */}
      <div className="flex items-center justify-between">

        {/* LEFT (Avatar + Info) */}
        <div className="flex items-center gap-3">
          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h4 className="text-white text-sm font-semibold">
              {review.name}
            </h4>
            <p className="text-gray-400 text-xs">
              {review.role}
            </p>
          </div>
        </div>

        {/* RIGHT (Rating) */}
        <div className="text-right">
          <div className="text-yellow-400 text-sm">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="text-gray-400 text-xs">(4.5)</p>
        </div>

      </div>
    </div>
  );
};

export default ReviewCard;