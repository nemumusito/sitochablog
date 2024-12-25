/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NOTION_API_SECRET: string;
  readonly DATABASE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
