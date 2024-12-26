/** abstract class type */
export type AbsCtr<T> = Function & { prototype: T; };
/** non-abstract class type */

export interface Ctr<T> {
    new(): T;
}

export interface ComponentCtr<T> {
    new(tag:string, children: Array<HTMLElement> | HTMLElement): T;
}
