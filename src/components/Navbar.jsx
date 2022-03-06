import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
  
`


const Navbar = () => {

  const [menu, setMenu] = useState(true)
  const show = (menu) ? "" : "show" ;

  return (
    <Container className=''>
      <nav className="navbar navbar-expand-lg px-5 navbar-light bg-light">
  <Link className="navbar-brand" to='/'>logo</Link>
  <button className="navbar-toggler" onClick={()=> setMenu(!menu)} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
  <div className={"collapse navbar-collapse " + show} id="navbarNav">

    <div className="navbar-nav justify-content-center gap-4 w-100">
    <Link className="nav-item nav-link" to='/'>Home</Link>
    <Link className="nav-item nav-link" to='/aboutrpa'>About RPA</Link>
      <Link  className="nav-item nav-link" to='/products'>Products</Link>
      <Link className="nav-item nav-link" to='/resouces'>Resouces</Link>
      <Link className="nav-item nav-link" to='/solutions'>Solutions</Link>
      <Link className="nav-item nav-link" to='/aboutus'>About us</Link>
      <Link className="nav-item nav-link" to='/contactus'>Contact us</Link>
    </div>
    
  </div>
</nav>
      
    </Container>
  )
}

export default Navbar