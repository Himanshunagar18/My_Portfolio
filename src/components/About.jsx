import React from 'react'
import {motion} from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
const About = () => {
  return (
    <motion.div
        initial={{opacity:0 , y:50}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.6 , ease:'easeOut'}}
        viewport={{once:true}}
        id='about'
        className='py-20 bg-dark-200'
        >
        <div className='container mx-0 px-6'>
            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>About
              <span className='text-purple-400'>Me</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my bachground and passion</p>

            {/* image + my journey */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
                {/* image */}
                <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                    <motion.img
                    initial={{opacity:0 , y:50}}
                    whileInView={{opacity:1 , y:0}}
                    transition={{duration:0.9 , ease:'easeOut'}}
                    viewport={{once:false,amount:0.2}}
                    className='w-full h-full object-cover'
                    src={assets.profileImg} alt='profile'></motion.img>
                </div>
                  {/* text contant */}
                <motion.div
                    initial={{opacity:0 , y:50}}
                    whileInView={{opacity:1 , y:0}}
                    transition={{duration:0.9 , ease:'easeOut'}}
                    viewport={{once:false,amount:0.2}}
                    className='md:w-1/2'>
                    <div className='rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6'>My journey</h3>
                        <p className='text-gray-300 mb-6'>I am a Frontend Developer with a strong passion for building websites and web applications. I have a solid foundation in HTML, CSS, and JavaScript, and I enjoy using these technologies to create responsive and interactive web experiences. I am always eager to learn new technologies and improve my skills.</p>
                        <p className='text-gray-300 mb-12' >My interest goes beyond just writing code; I also focus on user experience and design. I believe in writing clean, maintainable, and efficient code. My goal is to work on projects that are useful for people and provide them with an exceptional digital experience.</p>

                        {/* cards  */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                              aboutInfo.map((data,index)=>(
                                    <div key={index} className='bg-dark-300 rounded-2xl pd-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer p-4'>
                                        <div className='text-purple-400 text-4xl mb-4'>
                                          <data.icon />
                                        </div>
                                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                        <p className='text-gray-400 p-2'>{data.description}</p>
                                    </div>
                              ))
                            }
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    </motion.div>
  )
}

export default About
