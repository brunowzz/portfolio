import { client } from "@/sanity/lib/client";
import * as queries from "./sanityQueries";
import { TypeActiveProject } from "@/@types/type-active-project";

export async function getActiveProjects() {
  const result = await client.fetch(
    queries.queryProjects,
    { cache: "force-cache" },
    { next: { tags: ["blogPost"] } },
  );
  return result;
}

export async function getActivieProjectsById({
  _id,
}: {
  _id: TypeActiveProject;
}) {
  const result = await client.fetch(
    queries.queryProjectsById,
    { _id },
    { cache: "force-cache", next: { tags: ["blogPost"] } },
  );
  return result;
}
