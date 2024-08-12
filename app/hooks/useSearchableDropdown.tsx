import { useRef, useState, useEffect } from "react";

const useSearchableDropdown = () => {
  const ref = useRef(null);

  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);

  useEffect(() => {
    document.addEventListener("click", toggleDropdown);
    return () => document.removeEventListener("click", toggleDropdown);
  }, []);

  const toggleDropdown = e => {
    setIsDropdownOpen(e && e.target === ref.current);
  };

  return {
    ref,
    isDropdownOpen,
    toggleDropdown
  };
};

export default useSearchableDropdown;
