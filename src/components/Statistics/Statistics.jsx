import PropTypes from 'prop-types';
import { OptionsList, Item, ItemValue, Grade } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <OptionsList>
    <Item>
      <Grade> Good: </Grade>
      <ItemValue>{good}</ItemValue>
    </Item>
    <Item>
      <Grade> Neutral:</Grade>
      <ItemValue>{neutral}</ItemValue>
    </Item>
    <Item>
      <Grade> Bad:</Grade>
      <ItemValue>{bad}</ItemValue>
    </Item>
    <Item>
      <Grade> Total:</Grade>
      <ItemValue>{total}</ItemValue>
    </Item>
    <Item>
      <Grade> Positive feedback:</Grade>
      <ItemValue>{positiveFeedbackPercentage}%</ItemValue>
    </Item>
  </OptionsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
