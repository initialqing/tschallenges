
// K为联合类信号union

// keyof 可以取出联合类型中的各种类型
// K extends  表示约束，K一定是T的一个子集
type MyPick<T, K extends keyof T> = {
    [P in K]:T[P]
}