import { AnchorsList, BlackBackground, BrownBackground, Container, IconsContainer, IconsImgs, InfoBox, LinksColumn, LinksContainer, Quote, QuoteContainer, Quoter } from "./FooterLayout.style"
import reactIcon from '../../assets/icons/react.png'
import typescriptIcon from '../../assets/icons/typescript.png'



export const FooterLayout = () => {
  return (
    <Container>
        <BlackBackground />
        <BrownBackground />

        <InfoBox>
            <QuoteContainer>
                <Quote>"EVERYONE HAS THEIR OWN TIME CLOCK IN THEIR LIFE. TRUST THE TIMINGS OF YOUR LIFE"</Quote>
                <Quoter>¬ Invajy</Quoter>
            </QuoteContainer>

            <LinksContainer>
                <LinksColumn>
                    <p>Quick clicks</p>
                    <AnchorsList>
                        <a href="#">Home</a>
                        <a href="#">Products</a>
                        <a href="#">FAQ</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                    </AnchorsList>
                </LinksColumn>
                <LinksColumn>
                    <p>Dev</p>
                    <AnchorsList>
                        <a href="https://nucba-landing-page-lemon.vercel.app/" target="_BLANK">Portfolio</a>
                        <a href="https://github.com/nicolas-ponce" target="_BLANK">GitHub</a>
                        <a href="https://www.instagram.com/nicolas_m_p_/" target="_BLANK">Instagram</a>
                    </AnchorsList>
                </LinksColumn>
            </LinksContainer>

            <IconsContainer>
                <IconsImgs>
                    <img src={reactIcon} alt="React Icon"></img>
                    <img src={typescriptIcon} alt="Typescript Icon"></img>
                </IconsImgs>
                <p>®All Rights Reserved. Nicolás Ponce.</p>
                <h3>U</h3>
            </IconsContainer>
        </InfoBox>

    </Container>

  )
}
