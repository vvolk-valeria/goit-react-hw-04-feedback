import React from 'react';
import { Statistics } from './components/Statistics/Statistics';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Notification } from './components/Notification/Notification';
import { useState } from 'react';


export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keys = ['good', 'neutral', 'bad'];
  
  const handleChange = e => {
      
      switch (e) {
        case 'good':
          setGood(prevState=> prevState+1); 
          break;
        case 'neutral':
          setNeutral(prevState=> prevState+1); 
          break;
        case 'bad':
          setBad(prevState=> prevState+1); 
          break;
      
        default:
          return;
      } 
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
 
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={handleChange}
          />
        </Section>

        <Section title="Statistic">
           
          {!totalFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }

