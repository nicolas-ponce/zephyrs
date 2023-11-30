import { H3, Hamburger, HamburguerLine, LinkList, NavBar, StyledNavLink } from './NavBar.style'

export const NavBarLayout = () => {
  return (
    <NavBar>
        <H3>ZEPHYRS</H3>
        <LinkList>
            <StyledNavLink to='/'>Home</StyledNavLink>
            <StyledNavLink to='/products'>Products</StyledNavLink>
            <StyledNavLink to='/'>FAQ</StyledNavLink>
            <StyledNavLink to='/about-us'>About Us</StyledNavLink>
            <StyledNavLink to='/contact'>Contact</StyledNavLink>
        </LinkList>
        <Hamburger>
          <HamburguerLine />
          <HamburguerLine />
          <HamburguerLine />
        </Hamburger>

    </NavBar>
  )
}
