import { fetchFipe, fetchFipeMark, fetchFipeModel } from "@/hooks/useFipeData";
import Forms from "./forms/forms";
import { HomeProps } from "@/@types/page";

export default async function Home({ searchParams }: HomeProps) {
  const { mark, model } = await searchParams;
  const data = await fetchFipe();

  let markData = null;
  let modelData = null;

  if (mark) {
    markData = await fetchFipeMark({ mark });
  }

  if (model) {
    modelData = await fetchFipeModel({ mark, model });
  }

  return (
    <div>
      <Forms data={data} mark={markData} model={modelData} />
    </div>

  );
}
