export type ReturnWithStatus<T> = {
    ok: false
} | {
    data: T,
    ok: true
}