import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

function Cursor() {
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  const handleMouseMouse = (e: MouseEvent) => {
    console.log(e.clientX, e.clientY);
    setMouseLocation({ x: e.clientX - 10, y: e.clientY - 10 });
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMouse);
    return () => {
      window.removeEventListener('mousemove', handleMouseMouse);
    };
  }, []);
  const variants: Variants = {
    default: { ...mouseLocation },
  };

  return (
    <motion.div variants={variants} className="cursor" animate="default" />
  );
}

export default Cursor;
