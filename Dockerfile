FROM nginx:alpine

COPY . /usr/share/nginx/html/
RUN rm -Rf /usr/share/nginx/html/_conf
COPY _conf /etc/nginx/

WORKDIR /usr/share/nginx/html

# Expose the port nginx is reachable on
EXPOSE 80
