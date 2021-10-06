import React from "react";
import { Button } from "../Button/style";
import { TableContainer } from "./style";

const Index = ({ data, PinTask, DoneTask }) => {
  const priority = {
    3: "high",
    2: "middle",
    1: "low",
  };
  console.log(data, "dataaaaaaaa");
  return (
    <TableContainer>
      <tr>
        <th>Task</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Color</th>
        <th>actions</th>
      </tr>

      {data.length > 0 ? (
        data
          .sort((a, b) => b.IsPinned - a.IsPinned || b.priority - a.priority)
          .map((i, index) => (
            <tr key={`task${index}`}>
              <td>{i.task}</td>
              <td>{priority[i.priority]}</td>
              <td>{i.status}</td>
              <td>{i.color}</td>
              <td>
                <Button onClick={() => PinTask(i.id)}>
                  {i?.IsPinned ? "pinned" : "pin"}
                </Button>
                {i?.status == "inprogress" && (
                  <Button onClick={() => DoneTask(i.id)}>Done !</Button>
                )}
              </td>
            </tr>
          ))
      ) : (
        <td>Could Find Your desire color</td>
      )}
    </TableContainer>
  );
};

export default Index;
