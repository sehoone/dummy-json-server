
<h1>dummy json server</h1>

## Introduction
- json-server

## Project spec
- node 16.14.0

## Requirements
- node 16.14.0
- Git

## Develop tool
- Visual Studio Code 1.73.1
- plugins: Git History

## Install(for local)
- Installation dependencies
```sh
npm install
```
- run json server
```sh
npm run json-server
```

## Install(for docker)
- Get the project code

- docker image build
```sh
docker build . -t dummy-json-server -f docker/Dockerfile
```
- docker run
```sh
docker run -d -p 4290:3000 --rm --name dummy-json-server dummy-json-server
```
