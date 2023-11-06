import { FAQBox } from "../../components/FAQBox/FAQBox"
import { BoxContainer, Title } from "./FAQLayout.style"

export const FAQLayout = () => {
  return (
    <BoxContainer>
        <Title>Frequently Asked Questions</Title>
        <FAQBox
            question="How long does it take for the product to arrive?"
            answer="Usually the product would take around 2 - 5 working days to arrive. Frequently, it depends on the shipping company, but we make sure it takes as little as possible since we've got one of the best work flow in the industry. You couldn't expect less from a watch business."
        ></FAQBox>
        <FAQBox
            question="Can I get more detailed information about the materials used in the watches?"
            answer="Absolutely, understanding the materials in our watches is crucial. We use high-quality stainless steel, genuine leather, sapphire crystal, and occasionally, time-limited editions with precious metals. Each watch is crafted with precision and durability in mind, ensuring both elegance and long-term quality. Specific material details for each watch are available in the product descriptions on our website or feel free to contact our customer service for more information."
        ></FAQBox>
        <FAQBox
            question="What is your return policy for watches?"
            answer="We want you to be completely satisfied with your purchase. Our return policy allows you to return a watch within 30 days of the delivery date for a full refund or exchange. The watch must be unworn, in its original packaging, and accompanied by the proof of purchase. For detailed instructions on how to initiate a return, please refer to our Return Policy page on the website."
        ></FAQBox>
        <FAQBox
            question="What payment methods are accepted on your e-commerce platform?"
            answer="We accept a wide range of payment methods to make your shopping experience convenient and secure. These include major credit and debit cards such as Visa, Mastercard, American Express, and Discover. Additionally, we also accept PayPal for a seamless checkout process. Your security is our priority, and all transactions are encrypted to ensure your payment information is handled safely."
        ></FAQBox>
    </BoxContainer>
  )
}
