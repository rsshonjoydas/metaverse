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

export const TitleText = () => <h2>Title Text</h2>;
