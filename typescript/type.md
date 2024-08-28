# typescript中的类型特点

1. any类型，声明了any类型的会污染全局
```ts
let a: any

a = true

let b: string

b = a
console.log(b); // true
```
-   声明了any类型的，可以任意访问属性而不报错
```ts
let a: any
a = "hello"
a.name
```

2. unknown和any类似但是比any安全些，声明为unknown类型的不能访问任何属性