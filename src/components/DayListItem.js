import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";


export default function DayListItem(props) {
const dayClasses = function () {
  console.log('props.selected', props.selected)
  console.log('props.spots', props.spots)

  if (
    props.selected === true
  ){
    return 'day-list__item--selected'
  }
  if (
    props.spots === 0
  ){
    return 'day-list__item--full'
  }

  return "day-list__item"
}
const dayClass = dayClasses()

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}