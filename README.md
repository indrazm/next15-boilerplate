# Nextjs Boilerplate by indrazm

### Setup Postgres

The database would use postgres. Here is how you can setup PostgreSQL with Docker

```bash
docker pull postgres
```

```bash
docker run --name next-postgres \
-p 5432:5432 \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=postgres \
-e POSTGRES_DB=postgres \
-d postgres
```
