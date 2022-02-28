import React from "react";
import DayListItem from "./DayListItem";

function DayList (props) {

  return (
    <ul>
      {props.days.map(day => 
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={props.day === day.name}
          setDay={props.setDay}
        />)}
    </ul>
  )
}

export default DayList;