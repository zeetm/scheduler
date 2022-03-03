import React, { Fragment } from "react";
import InterviewerListItem from "components/InterviewerListItem"
import "components/InterviewerList.scss"
import "components/InterviewerListItem.scss";
import PropTypes from 'prop-types'; 

	

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map( interviewer => {
    return (
      <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.value}
      setInterviewer={event => props.onChange(interviewer.id)}
      />
    )
  });

  return (
    <React.Fragment>
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">
          {interviewers}
        </ul>
      </section>  
    </React.Fragment>
  )
};


InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};