import {getProducts} from "@/lib/getProducts"

export default async function CartPage() {
    const cart=await getProducts()
    return (
        <div>
            <h1>Cart Details</h1>
            <p>Items in your cart:</p>
            {cart.map((prod)=>(
                <p key={prod.id}>{prod.name}</p>
            ))}
        </div>
    );
}