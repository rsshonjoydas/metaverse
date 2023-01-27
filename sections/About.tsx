'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='z-0 gradient-02' />
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Metaversus' textStyle='text-center' />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-400'
      >
        <span className='font-extrabold text-gray-200'>Metaverse</span> is a new thing in the
        future, where you can enjoy the virtual world by feeling like it&apos;s really real, you can
        feel what you feel in this metaverse world, because this is really the{' '}
        <span className='font-extrabold text-gray-200'>madness of the metaverse</span> of today,
        using only <span className='font-extrabold text-gray-200'>VR</span> devices you can easily
        explore the metaverse world you want, turn your dreams into reality. Lets{' '}
        <span className='font-extrabold text-gray-200'>explore</span> the madness of the metaverse
        by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
