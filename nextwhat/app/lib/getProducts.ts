export type Product={
    id:number
    name:string
}

export async function getProducts(): Promise<Product[]>{
    return[
        {id:1,name:"shoes"},
        {id:2,name:"laptop"},
    ]
}

