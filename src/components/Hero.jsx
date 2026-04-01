import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
    <motion.div
        initial={{opacity:0 , y:50}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.6 , ease:'easeOut'}}
        viewport={{once:true}}
        id='home'
        className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900'
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                {/* left side contant */}
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Hi, I'm <span className='text-purple-400'>Himanshu Nagar</span>
                    </h1>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Front-end Developer</h2>
                    <p className='text-lg text-gray-300 mb-8'>
                        I create modern and responsive websites using the latest front-end technologies.
                    </p>
                    <div className='flex space-x-4'>
                        <a onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className='px-6 py-3 bg-purple-400 rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
                        <a onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className='px-6 py-3 border border-purple-400 rounded-lg font-medium hover:bg-purple-700 transition decoration-purple-300'>Contact Me</a>
                    </div>
                </div>

                {/* right side contant */}
                <div className='md:w-1/2 flex justify-center'>
                    <div className='relative w-64 md:w-80 md:h-80'>
                        <div className='absolute inset-0 rounded-full bg-pink-200 opacity-70'>
                            <motion.img 
                                animate={{y:[0,-20,0]}}
                                transition={{
                                duration:4,
                                repeat:Infinity,
                                repeatType:"loop",
                                ease:"easeInOut"
                            }}
                            className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover object-center z-10'
                            src={assets.profileImg} alt='profile'></motion.img>
                        </div>
                    </div>
                </div>
            </div>
    </motion.div>
  )
}

export default Hero
