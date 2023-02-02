FROM node:19-alpine
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node website .
RUN yarn install
#RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
