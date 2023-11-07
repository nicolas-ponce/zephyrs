import { Anchor, H3, Hamburger, HamburguerLine, LinkList, NavBar } from './NavBar.style'

export const NavBarLayout = () => {
  return (
    <NavBar>
        <H3>ZEPHYRS</H3>
        <LinkList>
            <Anchor href='#'>Home</Anchor>
            <Anchor href='#'>Products</Anchor>
            <Anchor href='#'>FAQ</Anchor>
            <Anchor href='#'>About Us</Anchor>
            <Anchor href='#'>Contact</Anchor>
        </LinkList>
        <Hamburger>
          <HamburguerLine />
          <HamburguerLine />
          <HamburguerLine />
        </Hamburger>

    </NavBar>
  )
}
