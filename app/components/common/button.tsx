import { Children } from "react";
import { Link } from "react-router";

type buttonProps = {
  style?: string;
  link: string;
  text: string;
};

const Button = ({ style, link, text }: buttonProps) => {
  return (
    <Link
      to={link}
      className={`button bg-gradient-to-r hover:bg-gradient-to-tr  hover:from-[#001d3d] hover:to-[#ed5b2fd6] ease-in-out duration-500 from-[#ed5b2fd6] to-[#001d3d] ${style}`}
    >
      {text}
    </Link>
  );
};

export default Button;

// import React from 'react'

// type Props = {}

// const button = (props: Props) => {
//   return (
//     <div>button</div>
//   )
// }

// export default button
