import { useState } from 'react';  // хук стейту
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container, Title } from "./styled";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
  const onLeaveFeedback = (selectedOption) => { // good/neutral/bad
    switch(selectedOption) {
      case 'good':
        setGood(state => state + 1); // 0 + 1
        break;     
      
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      
      case 'bad':
        setBad(state => state + 1);
        break;
      
      default:
        return;
    }
  };  

  const countTotalFeedback = () => {
    return good + neutral + bad;
    }
  
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if(totalFeedback === 0) {
      return 'There is no feedback';
    } else {
      return Math.round((good * 100) / totalFeedback) + '%';
    }    
  }

    return (
        <Container> 
          <Title>Expresso Caffee</Title>
          <Section title="Please leave a feedback"> 
            <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} /> 
          </Section> 

          <Container>
            <Section title="Statistics">
              {countTotalFeedback() === 0 ? (
                <Notification message='There is no feedback'/>
              ) : (
                <Statistics options={{good, neutral, bad}} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
              )}
            </Section>
          </Container>
        </Container>
    );
};