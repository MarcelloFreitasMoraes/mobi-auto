// "use server";
import { fetchData } from "@/service/get-fipe";
import { baseUrl } from "@/service/https";

export const fetchFipe = async () => {
  console.log("Fetching FIPE data...");
  
  const url = `${baseUrl}/carros/marcas`;
  return fetchData(url);
};

export const fetchFipeMark = async ({ mark }: { mark: string }) => {
  const url = `${baseUrl}/carros/marcas/${mark}/modelos`;
  return fetchData(url);
};

export const fetchFipeModel = async ({
  mark,
  model,
}: {
  mark: string;
  model: string;
}) => {
  const url = `${baseUrl}/carros/marcas/${mark}/modelos/${model}/anos`;
  return fetchData(url);
};

export const fetchFipeYear = async ({
  mark,
  model,
  year,
}: {
  mark: string;
  model: string;
  year: string;
}) => {
  const url = `${baseUrl}/carros/marcas/${mark}/modelos/${model}/anos/${year}`;
  return fetchData(url);
};
