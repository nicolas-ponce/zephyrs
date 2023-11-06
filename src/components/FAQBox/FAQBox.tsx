import {useState} from 'react';

import { Answer, Box, PlusMinus, Question, QuestionLine } from './FAQBox.style';

type props = {
    question: string;
    answer: string;
}


export const FAQBox = ({question, answer}: props) => {
    const [showAnswer, setshowAnswer] = useState(false);

    const handleToggle = () => {
        setshowAnswer(!showAnswer);
    }
  return (
    <Box onClick={handleToggle}>
        <QuestionLine>
            <Question>{question}</Question>
            <PlusMinus>{showAnswer ? '-' : '+'}</PlusMinus>
        </QuestionLine>


        {showAnswer && (
            <Answer>{answer}</Answer>
        )}

    </Box>
  )
}
