import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAndroid, isIOS } from 'react-device-detect';
import logo from '../assets/logo.png';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert('Please give a rating before submitting.');
    } else if (rating <= 3) {
      setTimeout(() => {
        navigate('/feedback'); 
      }, 500); 
    } else if (rating > 3) {
      if (isAndroid) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.collapsesurvivorapp&hl=en_IN';
      } else if (isIOS) {
        window.location.href = 'https://apps.apple.com/us/app/collapse-survivor/id6477384438';
      } else {
        alert('Unsupported device. Please rate our app on your respective store.');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <nav className="bg-white flex items-center justify-between p-4 shadow-lg">
        <img className="h-16 w-16 sm:h-20 sm:w-20" src={logo} alt="logo" />
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 flex-grow text-center">How would you rate Collapse Survivor App?</h1>
        <div className="h-8 w-8"></div>
      </nav>
      <div className="flex-grow flex flex-col justify-center items-center px-4">
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-6xl cursor-pointer transition-colors duration-300 ${
                rating >= star ? 'text-yellow-500' : 'text-gray-300'
              }`}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <footer className="bg-gray-900 text-white py-4 shadow-lg mt-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <p className="mb-2 font-bold text-lg">Contact Us</p>
            <p className="text-sm">
              For partnerships, media queries, or if you have some great preparedness/survival/resilience how-to document or videos you recommend, please e-mail them to
              <a href="mailto:contact@collapsesurvivor.com" className="text-red-600 hover:underline"> contact@collapsesurvivor.com</a> and we will review.
            </p>
          </div>
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <p className="mb-2 font-bold text-lg">Follow Us</p>
            <div className="flex space-x-4">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/twitterx.png" className="h-8 w-8" alt="Twitter" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook.png" className="h-8 w-8" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new.png" className="h-8 w-8" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rating;
