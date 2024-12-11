import { createContext } from 'react'
export interface ITodo {
  id: number;
  task: string;
  completed: boolean;
  createdAt: Date;
}
export type TodosContext = {todos:ITodo[],
  handleAddTodo:(task:string)=>void // call signature
  handleCheckbox:(id:number, status:boolean)=>void
  handleDelete:(id:number)=>void // call signature
};



export const todoContext = createContext<TodosContext | null>(null);





