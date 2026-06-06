# CFS EC Supply 本番公開メモ

## 公開対象

- `index.html`
- `appliance-set.html`
- `furniture-set.html`
- `styles.css`
- `script.js`
- `assets/`
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`

## 現在の問い合わせ方式

フォーム送信時に、入力内容を入れたメール作成画面を開きます。
送信先は `info@cfsjp.com` です。

## 管理機能について

GitHub Pagesは静的ホスティングのため、安全な管理者ログイン、商品登録、画像アップロードの永続保存はできません。
本番の管理機能を作る場合は、Tencent Cloudなどにバックエンド、DB、認証、画像ストレージを用意してください。

## ドメイン設定

GitHub Pagesで `ec.cfsjp.com` を使う場合は、GitHub Pages側にカスタムドメインを設定し、DNSでCNAMEをGitHub Pagesのホストへ向けます。
