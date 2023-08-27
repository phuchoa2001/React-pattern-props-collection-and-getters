import { useState, useCallback, MutableRefObject } from "react";

/** ====================================
   *          🔰Hook
            useDOMRef
  ==================================== **/

interface DOMRefs {
  [key: string]: HTMLElement;
}

const useDOMRef = (): [DOMRefs, (node: HTMLElement | null) => void] => {
  const [DOMRef, setDOMRef] = useState<DOMRefs>({});
  
  const setRef = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setDOMRef(prevDOMRefs => ({
        ...prevDOMRefs,
        [node.dataset.refkey || ""]: node
      }));
    }
  }, []);

  return [DOMRef, setRef];
};

export default useDOMRef;
