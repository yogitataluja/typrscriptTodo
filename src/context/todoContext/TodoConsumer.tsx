import { useContext } from "react";
import { todoContext } from "./TodoContext";

export const useTodo = () => {
  const todoConsumer = useContext(todoContext);
  if (!todoConsumer) {
    throw new Error("useTodo must be used within a Todoprovider");
  }
  return todoConsumer;
};