# Build stage
FROM node:current-alpine AS build

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app/

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies (including devDependencies for build)
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM node:current-alpine

# Install pnpm for runtime
RUN npm install -g pnpm

WORKDIR /app/

# Copy package files for runtime dependencies
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built application and server from build stage
COPY --from=build /app/build ./build
COPY --from=build /app/server.js ./

# Expose port
EXPOSE 8080

# Start server
CMD [ "node", "server.js" ]
