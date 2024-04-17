Recruit24/7 app is  a multiple-client recruitment platform, where companies post positions and candidates can apply for.

## Clone the repo

```bash
$  git clone https://github.com/klist1337/recruit24_app.git
```
## Launch the Database

You have to push the dbfile in postgres, to do this, go in the backend file and
run the postgresql container.
```bash
$ cd recruit24_app
$ cd backend
```
```bash
$ docker compose up -d
```
Copy the database file inside the postgres container 
```bash
$ docker cp ../backup.tar localdb:/tmp/backup/tar
````
Go inside the docker container: you can use docker desktop or you can do it the commande line
```bash
$ docker exec -it  localdb bash
```
Inside the container the change the user to postgres

```bash
$  su postgres
```
Push the database file inside the database 
```bash
$  pg_restore -U domi -d postgres -F t /tmp/backup.tar
```

## Launch the Server

Install all dependencies

```bash
$ npm install
```
Create a prisma model based on table already created in the db to deal with database,

```bash
$ npx prisma db pull
$ npx prisma generate
```
Finally launch the server 

```bash
$ npm run build
$ npm run start 
```


## Launch app

```bash
$ cd frontend
$ ng build
$ ng serve -c production
```
See the app at localhost:4200 in your browser

