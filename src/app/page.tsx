"use client";

import TodoForm from "@/components/todo_form";
import TodoItem from "@/components/todo_item";
import TodosFilter from "@/components/todos_filter";
import { useTodoContext } from "@/hooks/use_todo_context";
import { TodoProvider } from "context/todo_context";
import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
};

export default App;

const Home: React.FC = () => {
  const { todos, setTodos } = useTodoContext();

  useEffect(() => {
    const storeTodos = localStorage.getItem("todos");
    if (storeTodos) {
      setTodos(JSON.parse(storeTodos) as string[]);
    }
  }, []);

  return (
    <main className="flex min-h-screen bg-gradient-to-t from-blue-500 bg-green-500 flex-col items-center justify-center p-24">
      <div className="z-10 w-[40rem] flex flex-col  p-6 h-[35rem] rounded-2xl bg-white shadow-sm min-w-96 items-center justify-center font-mono">
        <h2 className=" w-full text-center text-xl font-bold">
          Make your Todos here!
        </h2>
        <TodoForm />

        <div className="w-[28rem] ">
          <TodosFilter />
          <hr />
          <div className="h-[20rem] px-2 overflow-y-auto">
            {todos.length > 0 &&
              todos.map((value, index) => (
                <TodoItem todoText={value} key={index} index={index} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};
