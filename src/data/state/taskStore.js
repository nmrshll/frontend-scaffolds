import React, { useState } from "react";
import PropTypes from "prop-types";
import { createContainer } from "unstated-next";
// import { kea } from "kea";
import { indexBy, mapObjIndexed, values, compose } from "ramda";
//
import { randomString } from "../../utils";

const indexById = indexBy(o => o.id);
const indexedToArray = compose(
  values,
  mapObjIndexed((item, id) => ({ id, ...item }))
);

// export const taskStore = kea({
//   path: () => ['kea', 'taskStore'],
//   actions: () => ({
//     addTask: title => ({ title }),
//     deleteTask: id => ({ id }),
//     toggleTaskCompleted: id => ({ id }),
//   }),
//   reducers: ({ actions }) => ({
//     indexedTasks: [
//       {
//         '67dhjksdf78': { title: 'Multi task list' },
//         '7fgbe89jfdu': { title: 'Connect with backend' },
//         '6chbn40g81s': { title: 'sub tasks' },
//         '0vgbrth9q0f': { title: 'login' },
//         '667hd9vdjs9': { title: 'rename a todo' },
//         '8f7ydughsjb': { title: 'drag and drop' },
//       },
//       PropTypes.object,
//       {
//         [actions.addTask]: (state, { title }) => {
//           const localID = randomString();
//           return { ...state, [localID]: { localID, title } };
//         },
//         [actions.deleteTask]: (state, { id }) => {
//           const { [id]: _dispose_, ...rest } = state;
//           return rest;
//         },
//         [actions.toggleTaskCompleted]: (state, { id }) => {
//           const { [id]: task, ...stateRest } = state;
//           task.completed = !task.completed;
//           return { ...stateRest, [id]: task };
//         },
//       },
//     ],
//   }),
//   selectors: ({ selectors }) => ({
//     tasks: [
//       () => [selectors.indexedTasks],
//       indexedTasks => indexedToArray(indexedTasks),
//       PropTypes.array,
//     ],
//   }),
// });

function useIndexedTasks(
  initialState = {
    "67dhjksdf78": { title: "Multi task list" },
    "7fgbe89jfdu": { title: "Connect with backend" },
    "6chbn40g81s": { title: "sub tasks" },
    "0vgbrth9q0f": { title: "login" },
    "667hd9vdjs9": { title: "rename a todo" },
    "8f7ydughsjb": { title: "drag and drop" }
  }
) {
  const [indexedTasks, setIndexedTasks] = useState(initialState);

  const reducers = {
    createTask: title => {
      const localID = randomString();
      setIndexedTasks({ ...indexedTasks, [localID]: { localID, title } });
    },
    deleteTask: id => {
      const { [id]: _dispose_, ...rest } = indexedTasks;
      setIndexedTasks(rest);
    },
    toggleTaskCompleted: id => {
      const { [id]: task, ...rest } = indexedTasks;
      task.completed = !task.completed;
      setIndexedTasks({ ...rest, [id]: task });
    }
  };

  const reselectors = {
    tasks: indexedToArray(indexedTasks)
  };

  return { indexedTasks, setIndexedTasks, ...reducers, ...reselectors };
}
export const TasksStore = createContainer(useIndexedTasks);

// export function useTasks(initialState = []) {
//   const indexedTasks = IndexedTasksStore.useContainer();
//   // const [count, setCount] = useState(initialState);
//   // const decrement = () => setCount(count - 1);
//   // const increment = () => setCount(count + 1);
//   const tasks = indexedToArray(indexedTasks);
//   return { tasks };
// }

// export const TaskStore = createContainer(useTasks);
