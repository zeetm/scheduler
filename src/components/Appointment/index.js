import React from "react";
import "./styles.scss"
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import useVisualMode from "components/hooks/useVisualMode";
import Form from "./Form"
import Status from "./Status"
import Confirm from "components/Appointment/Confirm"


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETING";
  const EDIT = "EDITING";

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

  function confirmation() {
    transition(CONFIRM);
  }

  function cancel() {
    transition(DELETING);

    props.cancelInterview(props.id)
    .then(response => {
      transition(EMPTY);
    })
  }

  return (
    <article className="appointment">
      <Header time={props.time}/>
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onDelete={confirmation} onEdit={() => transition(EDIT)}/>}
        {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back()} onSave={save} />}
        {mode === EDIT && <Form name={props.interview.student} interviewer={props.interview.interviewer.id} interviewers={props.interviewers} onCancel={() => transition(SHOW)} onSave={save} />}
        {mode === SAVING && <Status message= 'Saving'/>}
        {mode === DELETING && <Status message= 'Deleting'/>}
        {mode === CONFIRM && <Confirm message= 'Are you sure you would like to delete?' onCancel={() => back()} onConfirm={cancel} />}
    </article>
  );
};