import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ className, herf, onClick, children, px, white }) => {
  const classes = `button relative infline-flex items-center jusrify-center h-11 transition-colors hover:text-color-1 ${
    px || "pex-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClass='relative z-10';
  const renderButton = () => (
    <button className={classes}>
      <span className={spanClass}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );


  const renderLink = () => (
    <a href={herf} className={classes}>
      <span className={spanClass}>{children}</span>
      {ButtonSvg(white)}
      </a>
  )
  return herf ? renderLink() : renderButton();
};

export default Button;
