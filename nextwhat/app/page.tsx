import List from "@/components/List";
export default async function RootPage() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <div>
      <h1>Welcome to NextWhat Page</h1>
      <p>This is the main page of the Nexat application.</p>
      <List 
      items={[1,2,300]}
      render={(u)=><div>{u*2}</div>}
      />
    </div>
  );
}