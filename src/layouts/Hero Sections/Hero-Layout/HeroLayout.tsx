import watchGuy from '../../../assets/watch-guy.svg';
import { H1, Section, TitleDiv, SubtitleP, InfoDiv, H2, Text } from './HeroLayout.style'

export const HeroLayout = () => {
  return (
    <Section>
        <TitleDiv>
            <H1>ZEPHIRS</H1>
            <SubtitleP>Be the person you should.</SubtitleP>
        </TitleDiv>
        <InfoDiv>
            <H2>Watches only for a few</H2>
            <Text>Stop using your phone. Let it down.</Text>
            <Text>Raise your wrist and show the world who you are</Text>
        </InfoDiv>
        <img src={watchGuy} alt="" />
    </Section>
  )
}
 