import { useEffect, useRef, EffectCallback, DependencyList } from "react";

/** ====================================
   *          🔰Hook
        useEffectAfterMount
  ==================================== **/

const useEffectAfterMount = (cb: EffectCallback, deps: DependencyList) => {
  const componentJustMounted = useRef(true);

  useEffect(() => {
    if (!componentJustMounted.current) {
      return cb();
    }
    componentJustMounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useEffectAfterMount;
