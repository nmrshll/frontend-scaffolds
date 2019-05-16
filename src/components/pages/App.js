import React from "react";
import styled from "styled-components";
//
import { ListView } from "../atoms/ListView";
import IconList from "../../assets/icons/IconList";
//
import { TodosSection } from "../organisms/TodosSection";

const SelectableTodoStyled = styled.div`
  background-color: hsl(270, 80%, 94%);
`;
const SelectTodoList = () => (
  <ListView
    data={[{ title: "Team Todo-list" }]}
    renderItem={item => (
      <SelectableTodoStyled className="flex flex-row items-center rounded p-2">
        <IconList fill="hsl(270,40%,60%)" className="mr-2" />
        <div>{item.title}</div>
      </SelectableTodoStyled>
    )}
  />
);

const AsideStyled = styled.div`
  box-shadow: 1px 0 6px 1px rgba(0, 0, 0, 0.1);
`;
const App = () => (
  <div className="text-center">
    <div className="flex flex-row items-stretch rounded shadow-lg m-16 overflow-hidden">
      <AsideStyled className="flex flex-col p-6 bg-white relative">
        <div id="account" className="flex flex-row items-center h-16 mb-8">
          <img
            src="https://i.kym-cdn.com/profiles/icons/big/000/234/278/573.jpg"
            alt="profile"
            className="h-12 w-12 rounded-full"
          />
          <p className="ml-2 font-semibold">Guglielmo Dogeini</p>
        </div>
        <SelectTodoList />
      </AsideStyled>

      <TodosSection />
    </div>
  </div>
);

export default App;
