FROM php:8.2-fpm
WORKDIR /var/www

RUN apt-get update && apt-get install -y zip unzip curl git libpng-dev libonig-dev libxml2-dev && \
    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

COPY . .
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
RUN composer install
