// type MyOmit<T, K> = any

// Solution
type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P]: T[P] }

// NOTE: Using key remapping instead of Exclude<T, K>, because Exclude with generics drop modifiers like `readonly`.
