export type Product={
    id:number
    name:string
}

export async function getProducts(): Promise<Product[]>{
    return[
        {id:1,name:"shoes"},
        {id:2,name:"laptop"},
        {id:3,name:"mobile"},
        {id:4,name:"watch"},
    ]
}

