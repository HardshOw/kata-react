interface ITodo {
  id: string,
  content: string,
  checked: boolean
}

interface ITodoState {
  todos: ITodoList
}

type TodoList = Array<ITodo>

type TodosProps = {
  todos: ITodo[];
}