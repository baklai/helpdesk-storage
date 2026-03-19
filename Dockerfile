FROM nginx:alpine

RUN mkdir -p /usr/share/nginx/html/files/.theme

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY header.html /usr/share/nginx/html/files/.theme/
COPY footer.html /usr/share/nginx/html/files/.theme/

EXPOSE 80