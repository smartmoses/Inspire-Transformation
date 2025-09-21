import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { animate } from 'framer-motion';

export default function ImpactCounter({ to, from = 0, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(from, to, {
        duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(0);
          }
        },
      });
    }
  }, [inView, from, to, duration]);

  return <span ref={ref} />;
}
