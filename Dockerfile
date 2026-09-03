FROM node:22-bookworm-slim AS dependencies

WORKDIR /app

COPY src/frontend/package.json src/frontend/package-lock.json ./
RUN npm ci

FROM dependencies AS build

COPY src/frontend/ ./
RUN npm run build

FROM node:22-bookworm-slim AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY src/frontend/package.json src/frontend/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["npm", "run", "start"]
