import React from 'react';
import CalendarDay from './CalendarDay';

export default (props) => {
  let days = [], startDate = props.startDate;
  for (let i = 0; i < 7; i++) {
    days.push(i + props.startDate);
  }
  return (
    <tr>
      {days.map(val => <td key={val}><CalendarDay isToday={true} totalDays={props.totalDays} date={val} /></td>)}
    </tr>
  );
};