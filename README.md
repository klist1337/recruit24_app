Recruit app is  a multiple-client recruitment platform, where companies post positions and candidates can apply for.

## Launch the Database

first of all clone the app .. 
```bash
$  git clone https://github.com/klist1337/recruit24_app.git
```
you have to push the dbfile in postgres, to do this u have to go in the backend file and
run the postgresql container.

```bash
$ cd backend
```
```bash
$ docker compose up -d
```
when the container is running, go inside the docker container: you can use docker desktop or do in the commande line

```bash
$ docker exec -it  localdb bash
```
inside the container restaure the db

```bash
$  su postgres
```
to change the user

```bash
$  pg_restore -U domi -d postgres -F t /tmp/backup.tar
```

## Launch the bac


