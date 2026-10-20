import type { StructureResolver } from "sanity/structure";

/** Sidebar: Site settings opens the one document directly; the rest are lists. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings").title("Site settings")),
      S.divider(),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("proofPoint").title("Proof points"),
    ]);
