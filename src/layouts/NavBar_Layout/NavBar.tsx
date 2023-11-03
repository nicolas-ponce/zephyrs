import { Anchor, H3, LinkList, NavBar } from './NavBar.style'

export const NavBarLayout = () => {
  return (
    <NavBar>
        <H3>ZEPHYRS</H3>
        <LinkList>
            <Anchor href='#'>Home</Anchor>
            <Anchor href='#'>Products</Anchor>
            <Anchor href='#'>About Us</Anchor>
            <Anchor href='#'>Contact</Anchor>
        </LinkList>
    </NavBar>
  )
}
