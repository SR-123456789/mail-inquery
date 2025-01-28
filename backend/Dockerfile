# ベースイメージを指定（軽量な Node.js を使用）
FROM node:18-alpine

# 作業ディレクトリを指定
WORKDIR /backend

# package.json と package-lock.json をコピー（キャッシュ利用）
COPY package*.json ./

# 依存関係をインストール（devDependencies も含める）
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Nest CLI をグローバルではなくローカルで使用するように変更
RUN npx nest build

# ポート番号を指定（NestJS のデフォルトポートは 3000）
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "run", "start:prod"]
