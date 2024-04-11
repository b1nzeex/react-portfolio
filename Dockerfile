FROM node:18-alpine as builder
WORKDIR /usr/react

COPY src src
COPY public public
COPY package.json package-lock.json tsconfig.json ./

FROM node:18-alpine
WORKDIR /usr/react
COPY --from=builder /usr/react/src /usr/react/src
COPY --from=builder /usr/react/public /usr/react/public
COPY --from=builder /usr/react/package.json ./
COPY --from=builder /usr/react/package-lock.json ./
COPY --from=builder /usr/react/tsconfig.json ./

RUN npm i -g npm
RUN npm i
CMD ["npm", "start"]