import {Component} from "solid-js";
import {NavItemsTypes} from "@models";
import {navLink, navList} from './navigatorList.css'
import {NavigatorListTypes} from "./navigatorList.types";

const NavigatorList: Component<NavigatorListTypes>  = ({list}) => {
  const generateNavItems = (item: NavItemsTypes) =>
    (
      <li role="menuitem">
        <a href="#" class={navLink}>
          <span>

        {item.label}
          </span>
        </a>
      </li>
    )

  return (
    <ul
      role="menu"
      class={navList}
    >
      {
        list.map(generateNavItems)
      }
    </ul>
  )
}

export default NavigatorList;