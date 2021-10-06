import React, { useState } from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { v4 as uuidv4 } from "uuid";
const Index = (props) => {
  const [state, setstate] = useState({});
  const [tasks, settasks] = useState([]);
  const [search, setsearch] = useState(false);
  const [show, setIsShow] = useState(false);

  const HandleSubmit = () => {
    settasks((prev) => [...prev, state]);
    setIsShow(false);
  };

  const HandleOnChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
      id: uuidv4(),
      IsPinned: false,
    });
  };

  const PinTask = (i) => {
    let task = [...tasks];
    let selectTask = task.find((n) => n.id === i);
    selectTask.IsPinned = !selectTask.IsPinned;
    settasks(task);
  };

  const filterColor = (i) => {
    if (i.target.value) {
      let task = [...tasks];
      const selectedtask = task.filter((n) => n.color === i.target.value);
      if (selectedtask) {
        return setsearch(selectedtask);
      }
    }
    return setsearch(false);
  };

  const DoneTask = (i) => {
    let task = [...tasks];
    let selectTask = task.find((n) => n.id === i);
    selectTask.status = "done";
    settasks(task);
  };

  console.log(search);
  return (
    <Layout>
      <Modal Show={show}>
        <h2> Create Now Task !!!</h2>
        <div className="TaskContainer">
          <lable>Task:</lable>
          <input
            name="task"
            type="text"
            placeholder="Type Your Task ..."
            onChange={HandleOnChange}
          />
          <lable>priority: </lable>
          <select name="priority" onChange={HandleOnChange}>
            <option disabled selected>
              Select priority
            </option>
            <option value="3">high</option>
            <option value="2">Middle</option>
            <option value="1">low</option>
          </select>
          <lable>status: </lable>
          <select name="status" onChange={HandleOnChange}>
            <option disabled selected>
              Select Status
            </option>
            <option value="inprogress">inprogress</option>
            <option value="done">done</option>
          </select>
          <lable>color: </lable>
          <select name="color" onChange={HandleOnChange}>
            <option disabled selected>
              Select color
            </option>
            <option value="red">red</option>
            <option value="green">green</option>
          </select>
          <Button OnClick={HandleSubmit}>Create</Button>
          <Button OnClick={() => setIsShow(false)}>Cancel</Button>
        </div>
      </Modal>
      <Button
        OnClick={() => {
          setIsShow(true);
        }}
      >
        Create Task
      </Button>
      <lable>filter color: </lable>
      <select name="color" onChange={filterColor}>
        <option value={0} selected>
          all color
        </option>
        <option value="red">red</option>
        <option value="green">green</option>
      </select>

      <Table
        data={search?.length > 0 && search ? search : tasks}
        PinTask={PinTask}
        DoneTask={DoneTask}
      />
    </Layout>
  );
};

export default Index;
