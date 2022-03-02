import React from "react";
import "./styles.scss"
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import useVisualMode from "components/hooks/useVisualMode";
import Form from "./Form"
import Status from "./Status"


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };

    props.bookInterview(props.id, interview)
    .then(response => {
      transition(SHOW);
    })

  };

  return (
  <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && (<Empty onAdd={() => transition(CREATE)}/>)}    
    {mode === SHOW && (<Show student={props.interview.student} interviewer={props.interview.interviewer}/>)}
    {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back()} onSave={save} />}
    {mode === SAVING && <Status/>}
    </article>
  );
}