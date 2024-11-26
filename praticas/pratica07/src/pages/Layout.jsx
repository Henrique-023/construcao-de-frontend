import Cabecalho from "../componentes/Cabecalho"
import Conteudo from "../componentes/Conteudo"
import Menu from "../componentes/Menu"
import { Outlet } from "react-router-dom";
function Layout() {
    return (
     <>
       <Cabecalho />
       <Conteudo>
            <Menu />
            <Outlet />
       </Conteudo>
     </>
    );
  }
  

export default Layout;