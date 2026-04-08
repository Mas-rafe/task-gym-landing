import ReviewCard from "./ReviewCard";

const ReviewSection = () => {

  const reviews = [
    {
      title: "The Best Training Program!",
      text: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best.",
      name: "Stive meloni",
      role: "CEO Of Miko",
      image: "/review1.jpg",
    },
    {
      title: "Highly Recommended!",
      text: "Amazing environment and professional trainers. I improved a lot in a short time.",
      name: "Rahim Ahmed",
      role: "Athlete",
      image: "/review2.jpg",
    },
    {
      title: "Great Experience!",
      text: "Loved every session. The energy here is unmatched.",
      name: "Sadia Khan",
      role: "Fitness Enthusiast",
      image: "/review3.jpg",
    },
    {
      title: "The Best Training Program!",
      text: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best.",
      name: "Stive meloni",
      role: "CEO Of Miko",
      image: "/review1.jpg",
    },
    {
      title: "Highly Recommended!",
      text: "Amazing environment and professional trainers. I improved a lot in a short time.",
      name: "Rahim Ahmed",
      role: "Athlete",
      image: "/review2.jpg",
    },
    {
      title: "Great Experience!",
      text: "Loved every session. The energy here is unmatched.",
      name: "Sadia Khan",
      role: "Fitness Enthusiast",
      image: "/review3.jpg",
    },
  ];

  return (
    <section className="px-10 py-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-black text-4xl md:text-5xl font-bold">
          Client Reviews
        </h2>
        <p className="text-gray-400 mt-3">
          What our members say
        </p>
      </div>

      {/* Grid SAME as product */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

    </section>
  );
};

export default ReviewSection;