import { Metadata } from "next";
import { AnimesService } from "../../../../services/PublicServices/AnimeService";
import { PageLayout } from "../components/Layout";
import { FallBack } from "../components/FallBack";
import { AnimeBlock } from "../../../../widgets/AnimeBlock";
import { GenreClient } from "./GenreClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return {
    title: name,
  } as Metadata;
}

export default async function Anime({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const items = await AnimesService.getAnimesByGenre(name, 1);
  if (!items) {
    return (
      <PageLayout>
        <FallBack />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <GenreClient initItems={items} genre={name} />
    </PageLayout>
  );
}
