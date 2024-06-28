import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    navigation: 0,
    simulation: 0,
    notifications: 0,
    performance: 0,
    content: 0,
    suggestions: '',
    supportExperience: '',
  });

  const handleSliderChange = (event) => {
    const { name, value } = event.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleTextareaChange = (event) => {
    const { name, value } = event.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(feedback); // Replace with actual submission logic
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <nav className="bg-white flex items-center justify-between p-4 shadow-lg">
        <img className="h-16 w-16 sm:h-20 sm:w-20" src={logo} alt="logo" />
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 flex-grow text-center">Feedback Form</h1>
        <div className="h-8 w-8"></div>
      </nav>
      <div className="flex-grow flex flex-col justify-center items-center py-8 px-4">
        <h2 className="text-lg sm:text-2xl mb-4">We value your feedback</h2>
        <div className="w-full max-w-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm sm:text-base">1. How intuitive do you find the app's navigation and layout?</label>
              <input
                type="range"
                name="navigation"
                min="0"
                max="100"
                value={feedback.navigation}
                onChange={handleSliderChange}
                className="w-full"
              />
              <span className="block text-center">{feedback.navigation}%</span>
            </div>
            <hr className="border-t-2" />
            <div>
              <label className="block mb-2 text-sm sm:text-base">2. How would you rate Simulation in the app?</label>
              <input
                type="range"
                name="simulation"
                min="0"
                max="100"
                value={feedback.simulation}
                onChange={handleSliderChange}
                className="w-full"
              />
              <span className="block text-center">{feedback.simulation}%</span>
            </div>
            <div>
              <label className="block mb-2 text-sm sm:text-base">3. How effective are the notifications and alerts in keeping you informed?</label>
              <input
                type="range"
                name="notifications"
                min="0"
                max="100"
                value={feedback.notifications}
                onChange={handleSliderChange}
                className="w-full"
              />
              <span className="block text-center">{feedback.notifications}%</span>
            </div>
            <div>
              <label className="block mb-2 text-sm sm:text-base">4. How would you rate the app's performance in terms of speed and reliability?</label>
              <input
                type="range"
                name="performance"
                min="0"
                max="100"
                value={feedback.performance}
                onChange={handleSliderChange}
                className="w-full"
              />
              <span className="block text-center">{feedback.performance}%</span>
            </div>
            <div>
              <label className="block mb-2 text-sm sm:text-base">5. How useful do you find the content provided in the app (tips, guides, emergency information, Preparedness news)?</label>
              <input
                type="range"
                name="content"
                min="0"
                max="100"
                value={feedback.content}
                onChange={handleSliderChange}
                className="w-full"
              />
              <span className="block text-center">{feedback.content}%</span>
            </div>
            <div>
              <label className="block mb-2 text-sm sm:text-base">6. Do you have any suggestions for improving the app?</label>
              <textarea
                name="suggestions"
                value={feedback.suggestions}
                onChange={handleTextareaChange}
                className="w-full border rounded p-2"
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 text-sm sm:text-base">7. Have you needed to use customer support? If so, how was your experience?</label>
              <textarea
                name="supportExperience"
                value={feedback.supportExperience}
                onChange={handleTextareaChange}
                className="w-full border rounded p-2"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
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

export default Feedback;
