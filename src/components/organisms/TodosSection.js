import React from "react";
import styled from "styled-components";
//
import { TasksStore } from "../../data/state/taskStore";
import { ListView } from "../atoms/ListView";
import { TextInput } from "../atoms/TextInput";
//
import { TodoItem } from "../molecules/TodoItem";

const AddTaskInput = () => {
  let { createTask } = TasksStore.useContainer();
  return (
    <TextInput
      className="py-2 px-6 pl-12 outline-none"
      placeholder="Add a task"
      onSubmit={text => {
        createTask(text);
      }}
      clearAfterSubmit
    />
  );
};

const ListTodos = ({ filterBy: { completed: completedFilter } }) => {
  let { tasks } = TasksStore.useContainer();
  return (
    <ListView
      className="flex flex-col items-stretch bg-white py-2"
      data={tasks.filter(
        t => completedFilter === null || !t.completed !== !completedFilter
      )}
      renderItem={item => <TodoItem task={item} />}
    />
  );
};

const TodosSectionHeaderStyled = styled.header`
  background: url("https://res.cloudinary.com/dksqvuexr/image/upload/q_auto,f_auto/e_grayscale/e_tint:100:1c0099:0p:7c3fff:100p/v1557236895/the-wave-arizona_pph5la.jpg")
    no-repeat top center;
  background-size: cover;
  min-height: 9rem;
`;
const TodosSectionStyled = styled.div`
  height: 80vh;
`;
export const TodosSection = () => {
  return (
    <TodosSectionStyled className="flex flex-col flex-grow">
      <TodosSectionHeaderStyled className="flex flex-col-reverse text-white text-left px-6 py-4">
        <p className="opacity-75">Mon 12 December</p>
        <p className="text-3xl">Team Todo-list</p>
      </TodosSectionHeaderStyled>
      <div className="overflow-scroll flex flex-col">
        <TasksStore.Provider>
          <ListTodos filterBy={{ completed: true }} />
          <AddTaskInput />
          <ListTodos filterBy={{ completed: false }} />
        </TasksStore.Provider>
      </div>
    </TodosSectionStyled>
  );
};
