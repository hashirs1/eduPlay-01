import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const bounceAnimation = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const sparkleAnimation = {
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Floating bubbles animation
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

  // Flying birds animation
  const birds = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    y: Math.random() * 100
  }));

  return (
    <section className="py-16 bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Bubbles */}
        {bubbles.map(bubble => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-white/20"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`
            }}
            initial={{ y: '100vh' }}
            animate={{
              y: [null, '-100vh'],
              x: [0, Math.sin(bubble.id) * 100]
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear"
            }}
          />
        ))}

        {/* Flying Birds */}
        {birds.map(bird => (
          <motion.div
            key={bird.id}
            className="absolute"
            style={{ top: `${bird.y}px` }}
            initial={{ x: '-10%' }}
            animate={{ x: '110%' }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: bird.delay,
              ease: "linear"
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🦋
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Rainbow arc */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-40 opacity-20"
        style={{
          background: 'linear-gradient(180deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)',
          borderRadius: '100% 100% 0 0'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-70"
        animate={floatingAnimation}
      />
      <motion.div 
        className="absolute bottom-10 right-20 w-16 h-16 bg-green-300 rounded-full opacity-70"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 }
        }}
      />
      <motion.div 
        className="absolute top-40 right-40 w-12 h-12 bg-red-300 rounded-full opacity-70"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2 }
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Make Learning{' '}
              <motion.span 
                className="text-yellow-300"
                animate={bounceAnimation}
              >
                Fun
              </motion.span>{' '}
              and{' '}
              <motion.span 
                className="text-green-300"
                animate={{
                  ...bounceAnimation,
                  transition: { ...bounceAnimation.transition, delay: 0.5 }
                }}
              >
                Exciting!
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Interactive games and activities designed to help children learn and grow while having a blast!
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/games">
                <motion.button 
                  className="relative bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Start Playing</span>
                  {/* Sparkle effects on hover */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 * i}%`,
                        top: "50%"
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={sparkleAnimation}
                      transition={{ delay: i * 0.1 }}
                    />
                  ))}
                </motion.button>
              </Link>
              <Link to="/activities">
                <motion.button 
                  className="bg-white hover:bg-gray-100 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Activities
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <motion.img 
                src="https://images.pexels.com/photos/8535236/pexels-photo-8535236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Children learning with joy" 
                className="rounded-xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating achievement badges */}
              <motion.div
                className="absolute -top-5 -left-5 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity
                    }}
                  />
                  <p className="font-medium">6+ Fun Games</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  <p className="font-medium">Learn & Play!</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;