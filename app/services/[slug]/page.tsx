import { capabilities, getCapability } from "@/lib/capabilities";
import { pageMetadata } from "@/lib/metadata";
import CapabilityPage from "@/components/site/CapabilityPage";
type Params = { slug: string };
export const dynamicParams = false;
export function generateStaticParams() {
  return capabilities
    .filter((c) => c.slug !== "ai-automation")
    .map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const c = getCapability(slug);
  return c
    ? pageMetadata(c.metaTitle, c.metaDescription, `/services/${c.slug}`)
    : {};
}
export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return <CapabilityPage slug={slug} />;
}
