import Header from "@/components/header";
import TableContent from "@/components/table-content";

export default async function Home() {
  <Header />;
  const data = await fetch("http://localhost:8080/api/v1/devices");
  const post = await data.json();
  return (
    <>
      <TableContent post={post} />
    </>
  );
}
