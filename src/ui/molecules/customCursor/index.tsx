import React, { MouseEvent, useEffect, useState } from 'react';
import { CustomCusorWrapper } from './style';
import { motion, Variants } from 'framer-motion';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (ev: any) => {
    setMousePosition({
      x: ev.clientX,
      y: ev.clientY,
    });
    //alert();
  };
  const [mouseAchor, setmouseAchor] = useState(false);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    // return () => {
    //   window.removeEventListener('mousemove', handleMouseMove);
    // };
  }, []);

  useEffect(() => {
    const anchor = document.querySelectorAll('a');
    anchor.forEach((a) => {
      a.addEventListener('mouseover', () => {
        setmouseAchor(true);
      });
      a.addEventListener('mouseleave', () => {
        setmouseAchor(false);
      });
    });
  });

  const variants: Variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'yellow',
      mixBlendMode: 'difference',
    },
  };

  return (
    <CustomCusorWrapper overLink={mouseAchor}>
      <motion.div className="cursor" variants={variants} animate="default" />
      <motion.div
        className="link-cursor"
        variants={variants}
        animate="default"
      ></motion.div>
    </CustomCusorWrapper>
  );
}

export default CustomCursor;
