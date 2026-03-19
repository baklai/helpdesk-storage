FROM nginx:alpine

RUN mkdir -p /etc/nginx/theme

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY theme/ /etc/nginx/theme/

EXPOSE 80