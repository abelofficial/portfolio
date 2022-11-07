import { MutableRefObject, useEffect, useRef, useState } from "react";

type OnScreenType = [MutableRefObject<HTMLHeadingElement | null>, boolean];

const useOnScreen = (options: IntersectionObserverInit): OnScreenType => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);

    const { current } = ref;

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, options]);

  return [ref, visible];
};

export default useOnScreen;
