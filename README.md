# しとちゃぶろぐ

[astro-notion-blog](https://github.com/otoyo/astro-notion-blog)をベースにした、NotionをCMSとして利用する静的ブログシステムです。

## 🌟 特徴

- 📝 Notionで記事を書ける
- ⚡ 静的生成による高速なページ表示
- 🔍 記事の全文検索機能
- 🏷️ タグによる記事の分類
- 📱 レスポンシブデザイン
- 🎨 カスタマイズ可能なデザイン

## 🚀 セットアップ

### 必要なもの

- [Notion](https://www.notion.so/)アカウント
- [Cloudflare Pages](https://pages.cloudflare.com/)アカウント
- Git

### セットアップ手順

1. [ブログテンプレート](https://otoyo.notion.site/e2c5fa2e8660452988d6137ba57fd974?v=abe305cd8b3d467285e91a2a85f4d8de)をNotionワークスペースに複製します
2. [Notion API](https://developers.notion.com/)でインテグレーションを作成し、シークレットキーを取得します
3. 複製したデータベースのIDを取得します
4. Cloudflare Pagesでデプロイを設定します：
   - `NODE_VERSION`: v18.16.0以上
   - `NOTION_API_SECRET`: NotionのAPIシークレット
   - `DATABASE_ID`: 複製したデータベースのID

### ローカル開発

```bash
# 環境変数の設定
export NOTION_API_SECRET=<YOUR_NOTION_API_SECRET>
export DATABASE_ID=<YOUR_DATABASE_ID>

# 依存関係のインストールと開発サーバーの起動
npm install
npm run dev
```

## 📝 記事の投稿方法

1. Notionのデータベースで新しいページを作成
2. タイトル、タグ、公開日、アイキャッチ画像などを設定
3. コンテンツを記述
4. Cloudflare Pagesで再デプロイ

## ⚖️ ライセンス

このプロジェクトは[MIT License](LICENSE)のもとで公開されています。

## 🙏 謝辞

このプロジェクトは[otoyo/astro-notion-blog](https://github.com/otoyo/astro-notion-blog)をベースに開発されています。素晴らしいプロジェクトを公開してくださった[@otoyo](https://github.com/otoyo)氏に感謝いたします。
