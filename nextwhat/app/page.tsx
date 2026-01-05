import List from "@/components/List";
export default async function RootPage() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <div>
      <List 
      items={[1,2,300]}
      render={(u)=><div>{u*2}</div>}
      />
    </div>
  );
}