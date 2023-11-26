import {Component} from "solid-js";
import {FACEBOOK_LOGO, INSTAGRAM_LOGO} from "@assets";
import {navItems} from "@constants";
import {navIcons, navWrapper} from './navigator.css'
import Button from "@components/common/Button/Button";
import { NavigatorList } from "@components";

const Navigator: Component  = () => {
  const socialIcons = [
    {
      src: FACEBOOK_LOGO,
      title: 'facebook icon',
      url: '#'
    },
    {
      src: INSTAGRAM_LOGO,
      title: 'instagram icon',
      url: '#'
    }
  ]

  return (
      <nav class={navWrapper}>
          <NavigatorList list={navItems} />
        <Button label="Faça o seu orçamento" />
        <div class={navIcons}>
          {
            socialIcons.map((item) => (
              <a href={item.url}>
                <img
                  src={item.src}
                  alt={item.title}
                  height={30}
                  width={30}
                />
              </a>
            ))
          }
        </div>
      </nav>
  )
}

export default Navigator;