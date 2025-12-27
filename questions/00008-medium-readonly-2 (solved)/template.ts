type MyReadonly2<T, K extends keyof T = keyof T> =
  Readonly<Pick<T, K>> & Omit<T, K>

// another implementation
type MyReadonly3<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}

type R = MyReadonly2<Todo1, 'title' | 'description'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
