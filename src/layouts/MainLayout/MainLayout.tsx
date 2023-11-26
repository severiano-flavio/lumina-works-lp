import { Header } from '@components';
import {ParentComponent} from "solid-js";

const MainLayout: ParentComponent = ({children}) => {

  return (
    <>
      <Header />
      <p class="read-the-docs">
        Hello Worlds
      </p>
      <div>
      { children }
      </div>
    </>
  )
}

export default MainLayout
