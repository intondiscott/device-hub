import BodyContent from "@/components/body-content";

export default async function Home() {
  const data = await fetch("http://localhost:8080/api/v1/devices");
  const post = await data.json();
  return (
    <>
      <BodyContent post={post} />
    </>
  );
}
