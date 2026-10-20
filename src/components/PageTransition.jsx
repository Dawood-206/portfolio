import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // change content, then fade in fresh
      setDisplayLocation(location);
    }
  }, [location, displayLocation]);

  return (
    <div key={displayLocation.pathname} className="page-transition">
      {children}
    </div>
  );
}