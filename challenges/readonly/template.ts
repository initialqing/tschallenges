
//in 用于联合类型的取值  keyof T返回T的联合字面量类型，本例中就是title 等等。
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
}