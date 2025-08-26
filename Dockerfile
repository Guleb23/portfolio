ARG NODE_VERSION=22.14.0-alpine

FROM node:${NODE_VERSION} AS dev

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN --mount=type=cache,target=/root/.npm npm install

# Copy the rest of the source code
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]



