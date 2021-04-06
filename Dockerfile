FROM strapi/base

WORKDIR /khaaba-strapi

COPY ./package.json ./
COPY ./yarn.lock ./
RUN rm -rf node_modules
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 1337

CMD ["yarn", "develop"]
