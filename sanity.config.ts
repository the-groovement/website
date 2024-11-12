import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./lib/sanity/schemas";
import { table } from "@sanity/table";
import { codeInput } from "@sanity/code-input";
import structure from "./lib/sanity/structure";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ["post"];

export default defineConfig({
  title: "the groovement",
  basePath: "/admin",
  projectId: "887gnfj7",
  dataset: "production",
  apiVersion: "2023-10-10",

  plugins: [deskTool({ structure }), visionTool(), table(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
