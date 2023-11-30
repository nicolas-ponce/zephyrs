import { ContactContainer, ContactData, DataItem, DataItemAnchor, DataItemText, Form, ImgAndDataContainer, ImgDiv, Input, InputBox, Label, LetterImg, MainContainer, SendButton, Textarea, Title } from './ContactLayout.style'
import letterImg from '/src/assets/images/letter-writting.webp'

export const ContactLayout = () => {
  return (
    <MainContainer>
        <Title>Contact Us</Title>
        <ImgAndDataContainer>
            <ImgDiv>
                <LetterImg src={letterImg}></LetterImg>
            </ImgDiv>
            <ContactContainer>
                <Form>
                    <InputBox>
                        <Label htmlFor='name'>Name</Label>
                        <Input type='text' id='name' placeholder='John'></Input>
                    </InputBox>
                    <InputBox>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input type='text' id='lastName' placeholder='Doe'></Input>
                    </InputBox>
                    <InputBox>
                        <Label htmlFor='email'>Email</Label>
                        <Input type='email' id='email' placeholder='example@example.com'></Input>
                    </InputBox>
                    <InputBox>
                        <Label htmlFor='message'>Message</Label>
                        <Textarea id='message' placeholder='Write your message here...'></Textarea>
                    </InputBox>
                    <SendButton type='submit' onClick={(e) => {e.preventDefault()}}>Send</SendButton>
                </Form>
                <ContactData>
                    <DataItem>
                        <DataItemText>Address</DataItemText>
                        <DataItemAnchor href='https://maps.app.goo.gl/cbhYfdsepLs2BN6v6' target='_BLANK'>46 Edgbaston Park Rd, Birmingham B15 2RT</DataItemAnchor>
                    </DataItem>
                    <DataItem>
                        <DataItemText>Email</DataItemText>
                        <DataItemAnchor href='mailto:nvr-gonna-giiive-u-up'>zephyrsadmin@zephyrs.com</DataItemAnchor>
                    </DataItem>
                    <DataItem>
                        <DataItemText>Phone</DataItemText>
                        <DataItemAnchor href='tel:12345678'>+44 9 1234-5678</DataItemAnchor>
                    </DataItem>
                </ContactData>
            </ContactContainer>
        </ImgAndDataContainer>

    </MainContainer>
  )
}
