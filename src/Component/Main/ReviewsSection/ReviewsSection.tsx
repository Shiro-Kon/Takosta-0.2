import React, { useState, useEffect } from 'react';
import reviews, { Review } from '../../../Utils/reviewsData';
import ReviewCard from './ReviewCard';
import FullReviewModal from './FullReviewModal';
import AnimatedElement from '../../AnimatedElement/AnimatedElement';
import ReviewFormModal from './ReviewFormModal';

const ReviewsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [reviewList, setReviewList] = useState(reviews);
  const [animateReviews, setAnimateReviews] = useState(false);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  useEffect(() => {
    setAnimateReviews(true);
    const timer = setTimeout(() => setAnimateReviews(false), 500);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleAddReview = (newReview: Review) => {
    setReviewList([...reviewList, newReview]);
    setIsReviewFormOpen(false); 
  };

  const getReviewsPerPage = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [reviewsPerPage, setReviewsPerPage] = useState(getReviewsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(getReviewsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageCount = Math.ceil(reviewList.length / reviewsPerPage);

  const displayedReviews = reviewList.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <AnimatedElement
      direction="visibility"
      delay={0.1}
      className="relative py-24"
    >
      <img
        src="./Images/Reviews/Reviews.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/15 backdrop-blur-xl z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <AnimatedElement
          direction="up"
          delay={0.2}
          className="text-3xl md:text-4xl lg:text-4xl xl:text-7xl xxl:text-8xl text-center text-white mb-16 font-pushkin"
        >
          Відгуки наших клієнтів
        </AnimatedElement>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 container mx-auto w-[80%] ${animateReviews ? "animate-fade-in" : ""}`}
        >
          {displayedReviews.map((review) => (
            <AnimatedElement
            direction="up"
            delay={0.2}
            className="flex justify-center space-x-4 mb-4"
          >
            <ReviewCard
              key={review.id}
              {...review}
              onClick={() => setSelectedReview(review)}
            />
            </AnimatedElement>
          ))}
        </div>
        <AnimatedElement
          direction="up"
          delay={0.2}
          className="flex justify-center space-x-4 mb-4"
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="rounded border-2 border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base disabled:bg-white/50"
          >
            Попередні
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))
            }
            disabled={currentPage === pageCount - 1}
            className="rounded border-2 border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base disabled:bg-white/50"
          >
            Наступні
          </button>
        </AnimatedElement>
        <div className="flex justify-center mt-8">
          <AnimatedElement
            direction="up"
            delay={0.2}
            className="flex justify-center space-x-4 mb-4"
          >
            <button
              onClick={() => setIsReviewFormOpen(true)}
              className="rounded border-2 border-white/40 bg-white bg-opacity-15 backdrop-blur-md px-20 py-2 text-sm md:text-md lg:text-lg xl:text-lg xxl:text-2xl font-light text-white shadow-sm duration-200 ease-out hover:bg-white/30 hover:text-white active:scale-95 mobile-landscape:text-base"
            >
              Оставить отзыв
            </button>
          </AnimatedElement>
        </div>
      </div>
      {selectedReview && (
        <FullReviewModal
          {...selectedReview}
          onClose={() => setSelectedReview(null)}
        />
      )}
      {isReviewFormOpen && (
        <ReviewFormModal
          onClose={() => setIsReviewFormOpen(false)}
          onAddReview={handleAddReview}
        />
      )}
    </AnimatedElement>
  );
};

export default ReviewsSection;
