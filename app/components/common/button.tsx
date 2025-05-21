import { Children } from "react";
import { Link } from "react-router";

type buttonProps = {
  style?: string;
  link: string;
  text: string;
};

const Button = ({ style, link, text }: buttonProps) => {
  return (
    <Link to={link} className={`button ${style}`}>
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
