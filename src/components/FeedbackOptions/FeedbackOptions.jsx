import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  FeedbackWrapp,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrapp>
      {options.map(btn => (
        <Button
          key={btn}
          value={btn}
          variant={btn}
          type="button"
          onClick={btn => onLeaveFeedback(btn)}
        >
          {btn}
        </Button>
      ))}
    </FeedbackWrapp>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
