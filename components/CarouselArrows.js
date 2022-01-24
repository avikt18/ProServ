import Image from 'next/image'
import { motion } from "framer-motion"

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <motion.img  src='/arrow-left.svg' alt="prevArrow" {...props} />
);

export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <motion.img  src='/arrow-right.svg' alt="nextArrow" {...props} />
);