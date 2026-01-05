import { JSX } from "react";
type lisprops<T>={
    items:T[];
    render:(item:T)=>JSX.Element;
}

export default function List<T>({items,render}:lisprops<T>) {
    return (
        <div>{items.map(render)}</div>
    );
}