import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      text: "A jewel in the city — every detail feels cared for.",
      number: "1",
    },
    {
      text: "The cake cabinet alone is worth the visit.",
      number: "2",
    },
    {
      text: "Warm service, exceptional coffee, and a beautiful room.",
      number: "3",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        {reviews.map((review) => (
          <div className="review-card" key={review.number}>
            <div className="quote-mark">“</div>

            <p className="review-text">
              “{review.text}”
            </p>

            <span className="review-label">
              GUEST REVIEW · {review.number}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;