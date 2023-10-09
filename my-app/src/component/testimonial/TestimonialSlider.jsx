// TestimonialSlider.js
import React, { useState,useEffect } from 'react';
import styles from './TestimonialSlider.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/system';
const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    comment: 'I recently worked with DreamViewer Infotech Company and was blown away by their level of expertise and professionalism. Their team was incredibly responsive and attentive, and they truly cared about delivering exceptional results. I would highly recommend them to anyone looking for top-notch service and support.',
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'CEO',
    comment: 'I recently worked with DreamViewer Infotech Company and was blown away by their level of expertise and professionalism. Their team was incredibly responsive and attentive, and they truly cared about delivering exceptional results. I would highly recommend them to anyone looking for top-notch service and support..',
  },
  {
    id: 3,
    name: 'John Doe',
    position: 'CA',
    comment: 'I recently worked with DreamViewer Infotech Company and was blown away by their level of expertise and professionalism. Their team was incredibly responsive and attentive, and they truly cared about delivering exceptional results. I would highly recommend them to anyone looking for top-notch service and support.',
  },
  {
    id: 4,
    name: 'John Doe',
    position: 'CTO',
    comment: 'I recently worked with DreamViewer Infotech Company and was blown away by their level of expertise and professionalism. Their team was incredibly responsive and attentive, and they truly cared about delivering exceptional results. I would highly recommend them to anyone looking for top-notch service and support..',
  },
 
  // Add more testimonials
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <Box sx={{mt:6, mb:8,
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}
    >
      <div className={styles.testimonialSlider}
      style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
      >
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
          >
            <h2 className={styles.name} style={{color:'red'}}>{testimonial.name}</h2>
            <p className={styles.position}>{testimonial.position}</p>
            <p className={styles.comment}
            style={{
              fontFamily: "'Candara', sans-serif",
            }}
            >{testimonial.comment}</p>
          </div>
        ))}
        <button className={styles.prevButton} onClick={prevSlide}>
          &#8249;
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </Box>
  );
};

export default TestimonialSlider;
