import { OverlayTitle, Container, InfoBox, WatchmakerImg, TextBox, TextLine } from "./AboutUsLayout.style"
import watchmaker from "../../assets/images/watchmaker.jpg"



export const AboutUsLayout = () => {
  return (
    <Container>
        <OverlayTitle>About Us</OverlayTitle>

        <InfoBox>
            <WatchmakerImg src={watchmaker} alt="Watchmaker image"></WatchmakerImg>

            <TextBox>
                <TextLine>At ZEPHYRS, we craft timepieces that transcend trends. From the timeless elegance of "Native" to the industrial strength of "Worker" and the powerful allure of "Amplifier," each watch is a fusion of heritage, innovation, and enduring sophistication.</TextLine>
                <TextLine>We're dedicated to creating more than mere accessories; our watches are a reflection of timeless beauty, precision, and craftsmanship. Join us on a journey through elegance and time, where every watch is a masterpiece amplifying the essence of style and distinction.</TextLine>
            </TextBox>

        </InfoBox>
    </Container>
  )
}
