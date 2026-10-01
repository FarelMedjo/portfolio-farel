import Portfolio from "@/components/Portfolio";
import { audiences, type Audience } from "@/data/site";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ profil?: string }>;
}) {
  const { profil } = await searchParams;
  const initial: Audience =
    profil && profil in audiences ? (profil as Audience) : "recruteur";

  return <Portfolio initial={initial} />;
}
