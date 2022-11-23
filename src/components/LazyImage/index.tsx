import { useEffect, useRef, useState } from 'react';

const LazyImage = (props: { src: string; name: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const loadImage = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    if (imgRef) {
      const observer = new IntersectionObserver(loadImage);
      imgRef.current && observer.observe(imgRef.current);
    }
  }, [imgRef, isVisible, props.src]);

  return <img ref={imgRef} src={isVisible ? props.src : ''} alt={props.name} />;
};

export default LazyImage;
