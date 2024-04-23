import { Link } from "react-router-dom"
import {BiHome,BiSearchAlt2} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav id ="navbar">
    <h2>
      <Link to="/"><BiHome/>Catalogo</Link>
    </h2>
    <form>
        <input type="text" placeholder="Pesquise o produto"/>
        <button type="submit">
            <BiSearchAlt2/>
        </button>
    </form>
  </nav>
  )
}

export default Navbar