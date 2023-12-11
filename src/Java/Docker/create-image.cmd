docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proka-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proka-java/app ../../..
