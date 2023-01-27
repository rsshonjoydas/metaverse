'use client';

import { motion } from 'framer-motion';

import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| People on the World' textStyle='text-center' />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyle='text-center'
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <motion.img src='/map.png' alt='map' className='object-cover w-full h-full' />

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <motion.img src='people-01.png' alt='people' className='w-full h-full' />
        </div>

        <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <motion.img src='/people-02.png' alt='people' className='w-full h-full' />
        </div>

        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <motion.img src='people-03.png' alt='people' className='w-full h-full' />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
