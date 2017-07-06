import React from 'react';
import CalendarRow from './CalendarRow';

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currDate = new Date();
const firstOfMonth = new Date(currDate.getFullYear(), currDate.getMonth(), 1);

function getStartDate() {
  let currMonth = currDate.getMonth();
  let currDayOfMonth = currDate.getDate();
  return firstOfMonth.getDay();
  // get the current month and current date
  // use the current month to get the day of the week of the first of the month
};

export default (props) => {
  let startDate = getStartDate();
  let totalDays = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0).getDate();
  let numRows = Math.ceil((totalDays + startDate) / 7);
  startDate = 1 - startDate;

  return (
    <div>
      <h2>Schedule</h2>
      <table className="table table-bordered" style= {{"tableLayout": "fixed", "width": "100%"}}>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(numRows)].map((val, i) => {
            let calRow = <CalendarRow key={startDate} totalDays={totalDays} startDate={startDate} />
            startDate += 7;
            return calRow;
          }, this)}
        </tbody>
      </table>
    </div>
  );
};
