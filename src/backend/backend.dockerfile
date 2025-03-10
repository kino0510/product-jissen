# ベースイメージの設定
FROM python:3.12-slim

# Pythonの標準出力のバッファリングを解除
ENV PYTHONUNBUFFERED=1

# 必要なシステムパッケージのインストール（PostgreSQL用）
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev gcc && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# 作業ディレクトリの設定
WORKDIR /code

# 依存関係のインストール (キャッシュ効率化)
COPY requirements.txt /code/
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# ソースコードをコピー
COPY . /code/

# ポートを公開
EXPOSE 8000

# デフォルトのコマンド
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]