import React from 'react';

export default (props) => {
  if (props.date < 1 || props.date > props.totalDays) {
    return <div className="day" />;
  }
  return (
    <div className="day">
      <span className="numDate">{props.date}</span>
    </div>
  );
}