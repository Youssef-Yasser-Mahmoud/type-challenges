type DeepReadonly<T extends object> = T extends (...args: any[]) => any ? T : {
  readonly [P in keyof T]: T[P] extends Record<PropertyKey, any> ? DeepReadonly<T[P]> : T[P]
}

type R1 = DeepReadonly<X1>

type X1 = {
  a: (a: number) => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}
