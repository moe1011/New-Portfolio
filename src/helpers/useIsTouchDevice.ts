import { useEffect, useState } from "react";

const useIsTouchdevice = (): boolean => {
  const [isTouchdevice, setIsTouchdevice] = useState<boolean>(false); // Default to `false`

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchdevice(window.matchMedia("(hover: none)").matches);
    }
  }, []);

  return isTouchdevice; // Always returns a boolean
};

export default useIsTouchdevice;
