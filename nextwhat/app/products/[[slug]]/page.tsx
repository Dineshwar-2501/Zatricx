// app/products/[id]/page.js
export default async function ProductPage({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  return (
    <div>
      <div>ProductId: {slug[0] ?? "notdefined"}</div>
      <div>ProductId: {slug[1]}</div>
      <div>ProductId: {slug[2]}</div>
      <div>ProductId: {slug[3] ?? "undefined"}</div>

    </div>
  )
}

