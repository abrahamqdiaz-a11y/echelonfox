import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  // The Studio's web address once deployed: https://echelonfox.sanity.studio
  studioHost: "echelonfox",
  deployment: { autoUpdates: true },
});
