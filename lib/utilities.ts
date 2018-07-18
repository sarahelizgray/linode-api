export const ifElse = (cond, ifFn, elseFn) => (data: any) => cond(data) ? ifFn(data) : elseFn(data);
