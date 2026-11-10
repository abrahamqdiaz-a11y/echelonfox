import CapabilityPage from "@/components/site/CapabilityPage";
import { getCapability } from "@/lib/capabilities";
import { pageMetadata } from "@/lib/metadata";
const c = getCapability("ai-automation")!;
export const metadata = pageMetadata(
  c.metaTitle,
  c.metaDescription,
  "/services/ai-automation",
);
export default function Page() {
  return <CapabilityPage slug="ai-automation" />;
}
