import { siteSettings } from "./siteSettings";
import { service } from "./service";
import { proofPoint } from "./proofPoint";

export const schemaTypes = [siteSettings, service, proofPoint];

export const SINGLETONS = new Set(["siteSettings"]);
