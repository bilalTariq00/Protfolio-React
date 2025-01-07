import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import profilePic from '../assets/ppimg.jpeg'; // Update the path to your profile image

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-center gap-10`}>
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Profile"
            className="w-60 h-auto mt-16 mr-16 rounded-full object-cover border-4 border-secondary shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-secondary`}>
            Hi, I'm <span className="text-customOrangeDark">Bilal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-secondary`}>
            I develop Next.js, user interfaces, <br className="sm:block hidden" />
            and web applications.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
