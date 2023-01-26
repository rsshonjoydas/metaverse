/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */

'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { textContainer, textVariant2 } from '../utils/motion';

interface Props {
  title: string;
  textStyle: string;
}

export const TypingText: React.FC<Props> = ({ title, textStyle }) => (
  <motion.p
    variants={textContainer}
    className={`${textStyle} font-normal text-[14px] text-secondary-100 `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

interface TitleTextProps {
  title: JSX.Element;
  textStyle: string;
}

export const TitleText: React.FC<TitleTextProps> = ({ title, textStyle }) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyle}`}
  >
    {title}
  </motion.h2>
);
