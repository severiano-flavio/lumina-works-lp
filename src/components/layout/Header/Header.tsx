import {Component} from "solid-js";
import {LUMINA_LOGO} from "@assets";
import {headerLogo, headerRoot} from './header.css'
import {Navigator} from "@components";

const Header: Component  = () => {
return (
  <header class={headerRoot}>
    <img
      src={LUMINA_LOGO}
      class={headerLogo}
      title="Lumina Works"
    />

    <Navigator />

  </header>
)
}

export default Header;