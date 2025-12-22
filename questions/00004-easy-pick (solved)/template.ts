type MyPick<T extends Record<PropertyKey, any>, K extends keyof T> = { [P in K]: T[P] }

// here i used 'extends Record<PropertyKey, any>' to handle more test cases

type X = MyPick<Todo, 'title' | 'completed'>
interface Todo {
  title: number
  description: string
  completed: boolean
}
