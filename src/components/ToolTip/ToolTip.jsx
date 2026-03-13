import { useState } from 'react';
const ToolTip = ({ children, text, position = "bottom" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <span className={`tooltip-text tooltip-${position}`}>
          {text}
        </span>
      )}
    </div>
  );
};
export default ToolTip;