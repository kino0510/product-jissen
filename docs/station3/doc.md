# 設計 1

## 1. 技術選定

### 基本技術

#### フロントエンド

<div style="display: flex; gap: 10px;">
<img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
<img src="https://img.shields.io/badge/-React-0088CC.svg?logo=React&style=for-the-badge">
<img src="https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=for-the-badge">
<img src="https://img.shields.io/badge/-Three.js-000000.svg?logo=Three.js&style=for-the-badge">
<img src="https://img.shields.io/badge/-Tailwind-007ACC.svg?logo=Tailwind%20CSS&style=for-the-badge">
</div>

#### バックエンド

<div style="display: flex; gap: 10px;">
<img src="https://img.shields.io/badge/-Django-092E20.svg?logo=django&style=for-the-badge">
<img src="https://img.shields.io/badge/-Firebase-D82C20.svg?logo=Firebase&style=for-the-badge">
<img src="https://img.shields.io/badge/-Celery-19910.svg?logo=Celery&style=for-the-badge">
<img src="https://img.shields.io/badge/-Redis-D82C20.svg?logo=redis&style=for-the-badge">
</div>

#### データベース

<div style="display: flex; gap: 10px;">
<img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=for-the-badge">
<img src="https://img.shields.io/badge/-Redis-D82C20.svg?logo=redis&style=for-the-badge"><!-- 調べる -->
</div>

#### インフラ

<div style="display: flex; gap: 10px;">
<img src="https://img.shields.io/badge/-Docker-1488C6.svg?logo=docker&style=for-the-badge">
<img src="https://img.shields.io/badge/-Github-181717.svg?logo=github&style=for-the-badge">
</div>

### 詳細(機能ごと)

- 非同期処理 | Celery + Redis
  (Celery は「非同期処理」をするための Python ライブラリ。Redis は「データを一時的に保存する」超高速なデータストア。)
- スクレイピング | Scrapy
- SNS ノイズ除去 | Django(キーワードフィルタ) + Celery(自動処理) + scikit-learn(技術情報のスコアリング) + TensorFlow(センチメント分析)
- 通知システム | SendGrid

## 2. アーキテクチャ選定

## 3. 画面設計図

https://www.figma.com/design/jebUmbbmmWhomnBWcHVQhJ/portfolio?node-id=0-1&t=R9gUt9kXrhTz3m3R-1

## 4. 画面遷移図

フリーボード共有

## 5. ユーザーフロー図

## 6. ER 図

## 7. API 仕様書

## 8.テーブル定義書
