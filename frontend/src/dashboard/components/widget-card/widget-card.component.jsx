import React from 'react';

import {WidgetCard} from './widget-card.styles';

const WidgetCard = ({ title, amount }) => {
  return (
    <WidgetCard>
      <h3>{title}:</h3>
      <span>{amount}</span>
    </WidgetCard>
  );
};

export default WidgetCard;
