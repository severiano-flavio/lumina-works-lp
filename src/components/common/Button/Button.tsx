import {Component} from "solid-js";
import {buttonRoot} from './button.css'
import {ButtonTypes} from "./button.types";

const Button: Component<ButtonTypes>  = ({ label, color }) => {

  return (
    <button class={buttonRoot({color, variant: 'outlined'})}>
      { label }
    </button>
  )
}

export default Button;