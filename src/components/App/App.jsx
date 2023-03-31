import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { StatisticsWrapp, StatisticsTitle } from './App.styled';

import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = state;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = e => {
    const currentBtnValue = e.target.value;

    setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const btnNames = Object.keys(state);

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions options={btnNames} onLeaveFeedback={onLeaveFeedback} />
      <StatisticsWrapp>
        <StatisticsTitle>Statistics</StatisticsTitle>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </StatisticsWrapp>
    </Section>
  );
};

 
