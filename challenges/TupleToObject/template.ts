
// 明确一个输入的类型再进行操作
type TupleToObject<T extends readonly (string | number)[]> = {
    [P in T[number]]: P
}