import { defineConfig } from 'astro/config';
import { CUSTOM_DOMAIN, BASE_PATH } from './src/server-constants';

// 新しいドメインにリダイレクトするための設定
const site = CUSTOM_DOMAIN
  ? `https://${CUSTOM_DOMAIN}`
  : 'http://localhost:4321';

export default defineConfig({
  site,
  base: BASE_PATH,
  integrations: [], // Notion関連の統合機能を無効化
});
