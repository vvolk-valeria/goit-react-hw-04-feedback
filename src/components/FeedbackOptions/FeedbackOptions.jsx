import PropTypes from 'prop-types';
import { OptionsList, Option, Item } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <OptionsList>
    {options.map(option => {
      return (
        <Item key={option}>
          <Option type="button" onClick={() => onLeaveFeedback(option)}>
            {option.toUpperCase()}
          </Option>
        </Item>
      );
    })}
  </OptionsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
