
import { useMenu } from '../../context/MenuContext';
import { H3, Hamburger, HamburguerLine, LinkList, NavBar, StyledNavLink } from './NavBar.style'

export const NavBarLayout = () => {
  const menuCtx = useMenu();
  
  const screenWidth = window.innerWidth;


  const handleClick = () => {

    if(screenWidth < 768) {
      menuCtx.toggleMenu;
    }
  }

  return (
    <NavBar>
        <H3>ZEPHYRS</H3>
        <LinkList style={{display: menuCtx.isMenuOpen || screenWidth > 768 ? 'flex' : 'none'}}>
            <StyledNavLink style={({ isActive }) => {return {color: isActive ? "var(--brown)" : ""}}} onClick={handleClick} to='/'>Home</StyledNavLink>
            <StyledNavLink style={({ isActive }) => {return {color: isActive ? "var(--brown)" : ""}}} onClick={handleClick} to='/products'>Products</StyledNavLink>
            <StyledNavLink onClick={handleClick} to='/'>FAQ</StyledNavLink>
            <StyledNavLink style={({ isActive }) => {return {color: isActive ? "var(--brown)" : ""}}} onClick={handleClick} to='/about-us'>About Us</StyledNavLink>
            <StyledNavLink style={({ isActive }) => {return {color: isActive ? "var(--brown)" : ""}}} onClick={handleClick} to='/contact'>Contact</StyledNavLink>
        </LinkList>
        <Hamburger onClick={menuCtx.toggleMenu}>
          <HamburguerLine />
          <HamburguerLine />
          <HamburguerLine />
        </Hamburger>

    </NavBar>
  )
}
