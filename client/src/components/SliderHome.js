import {React, useState, useEffect} from 'react'
import SkinProblemsCause from '../images/skinProblemsCause.jpg';
import Nutrition from '../images/Nutrition.jpg';
import Metabolism from '../images/Metabolism.jpg';
import Hormones from '../images/hormones.jpg';
import Stress from '../images/stress.jpg';
import Environment from '../images/Environment.jpg';

const SliderHome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if it's a mobile device
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    // Handle window resize to adjust isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const carouselItems = [
    {
      image: Nutrition,
      title: 'Nutrition',
      description: 'Nutrient deficiencies result from poor diet or a compromised gut microbiome.',
    },
    {
      image: Metabolism,
      title: 'Metabolism',
      description: 'Influenced by inflammation, high-glycemic diet and thyroid issues.',
    },
    {
      image: Hormones,
      title: 'Hormones',
      description: 'DHT sensitivity can be caused by genetics, stress, meds, poor diet and toxins.',
    },
    {
      image: Stress,
      title: 'Stress',
      description: 'Short term or chronic, physical or emotional stress like a surgery or demanding job.',
    },
    {
      image: Environment,
      title: 'Environment',
      description: 'Refers to your surroundings, the product you use and the foods that you eat.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  return (
    <>
        {/* <!-------------------------------------------- Section-2 -----------------------------------------> */}
        <div>
          {isMobile ? (
            <div id="default-carousel" class="relative md:hidden mt-10" data-carousel="slide">
              <div class="relative h-64 overflow-hidden rounded-lg">
                    <div className="flex flex-col items-center">
                      <img
                        src={carouselItems[currentIndex].image}
                        className="absolute block h-32 w-32 top-24 -translate-x-1/2 -translate-y-1/2 left-1/2"
                        alt="..."
                      />
                      {/* console.log({item[index]}); */}
                      <h1 className="absolute text-xl font-bold">{carouselItems[currentIndex].title}</h1>
                      <p className="absolute top-40 text-center font-semibold">{carouselItems[currentIndex].description}</p>
                    </div>
              </div>
              
              {/* Slider indicators */}
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                    aria-current={index === currentIndex ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                  ></button>
                ))}
              </div>

              {/* Slider controls */}
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={handlePrev}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 19l-7-7 7-7"></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={handleNext}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          ) : (
            <div className="hidden md:block w-full mt-10">
              <h1 className="font-extrabold text-center md:text-3xl">Skin Diseases has Multiple Causes</h1>
              <img src={SkinProblemsCause} alt="skin Problems Cause" />
            </div>
          )}
        </div>
    </>
  )
}

export default SliderHome