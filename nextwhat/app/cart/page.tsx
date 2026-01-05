import {getProducts} from "@/lib/getProducts"

export default async function CartPage() {
    const cart=await getProducts()
    return (
        <div>
            {cart.map((prod)=>(
                <p key={prod.id}>{prod.name}</p>
            ))}
        </div>
    );
}