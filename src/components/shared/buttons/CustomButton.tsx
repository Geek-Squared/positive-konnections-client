import React from "react";
import "./styles.scss";

interface CustomButtonProps {
  buttonText?: string;
  additionalClass?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText,
  additionalClass,
  onClick,
}) => {
  return (
    <button className={additionalClass} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
