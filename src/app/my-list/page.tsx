import { PageLayout } from "./components/Layout/ui/Layout";
import { Metadata } from "next";
import { FavoritePageContent } from "./components/PageContent";

export const metadata: Metadata = {
  title: "Избранное",
  description:
    "Страница избранного аниме на сайте AniFirst. Favorite page of anime on web site AniFirst.",
};

export default function MyListPage() {
  return (
    <PageLayout>
      <FavoritePageContent />
    </PageLayout>
  );
}
