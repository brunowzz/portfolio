import { client } from "@/sanity/lib/client";
import * as queries from "./sanityQueries";

export async function getActiveProjects() {
  const result = await client.fetch(
    queries.queryProjects,
    {},
    { cache: "no-cache" },
  );
  return result;
}

export async function getActivieProjectsById({ id }: { id: string }) {
  const result = await client.fetch(
    queries.queryProjectsById,
    { id },
    { cache: "no-cache" },
  );
  return result;
}
