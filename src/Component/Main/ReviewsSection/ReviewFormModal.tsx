import React, { useEffect, useState } from 'react';
import { Review } from '../../../Utils/reviewsData';

interface ReviewFormModalProps {
  onClose: () => void;
  onAddReview: (review: Review) => void;
}

const ReviewFormModal: React.FC<ReviewFormModalProps> = ({ onClose, onAddReview }) => {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [fullReview, setFullReview] = useState('');
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  useEffect(() => {
   
    document.body.style.overflow = 'hidden';
    return () => {

      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: Date.now(),
      name,
      service,
      fullReview,
      images: imageFiles.map(file => URL.createObjectURL(file)),
    };
    onAddReview(newReview);
    setName('');
    setService('');
    setFullReview('');
    setImageFiles([]);
    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFiles([...imageFiles, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg z-50 overflow-y-auto">
      <div className="container mx-auto px-6 py-8 bg-black bg-opacity-45 backdrop-blur-md rounded-xl shadow-md w-full maw-w-[500px] md:max-w-[600px]">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 text-center text-white">Додати відгук</h2>
        <form onSubmit={handleSubmit} className="text-white">
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">Ім'я</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white/70 text-black/80 text-md lg:text-xl font-semibold rounded border border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="service">Послуга</label>
            <input
              type="text"
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white/70 text-black/80 text-md lg:text-xl font-semibold rounded border border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="fullReview">Повний відгук</label>
            <textarea
              id="fullReview"
              value={fullReview}
              onChange={(e) => setFullReview(e.target.value)}
              required
              className="w-full h-20 md:h-40 px-4 py-2 bg-white/70 text-black/80 text-md lg:text-xl font-semibold rounded border border-gray-300 focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="mt-2">
            <label className="block text-md md:text-lg mb-2">Завантажити зображення</label>
            <div className="flex items-center">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="upload-image-input"
              />
              <label
                htmlFor="upload-image-input"
                className="rounded border-2 border-white/50 bg-white bg-opacity-15 backdrop-blur-md px-4 py-2 text-sm md:text-md lg:text-lg font-light text-white shadow-sm duration-200 ease-out hover:bg-white/30 hover:text-white active:scale-95 cursor-pointer"
              >
                Вибрати файли
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="rounded border-2 border-white/50 bg-white bg-opacity-15 backdrop-blur-md px-4 py-2 text-lg lg:text-xl font-light text-white shadow-sm duration-200 ease-out hover:bg-white/30 hover:text-white active:scale-95 mr-4"
            >
              Додати
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded border-2 border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-lg lg:text-xl font-light text-white shadow-sm duration-200 ease-out hover:border-rose-500 active:scale-95"
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewFormModal;
