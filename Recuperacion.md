# Ejercicio de Recuperación

El objetivo del ejercicio de recuperación es reescribir los mismos scripts realizados durante el curso, partiendo de una nueva versión de la aplicación de votaciones implementada en [.NET Core](https://dotnet.microsoft.com/download) en vez de la original implementada en Golang. También se usará nodejs en vez de python para implementar los tests de integración.

## Pipeline con Bash
Reescribe el pipeline de bash `./pipeline.sh` para la aplicación de votaciones, esta vez realizando la integración continua con la versión .NET Core `./src/votingapp-dotnet`

## Reescribe los tests de integración con Nodejs 
Reescribe los tests de integración realizados en python `./test/test.py` en otro lenguaje de scripting como por ejemplo [nodejs](https://nodejs.org/en/).

## Dockeriza la applicación de votaciones 
Reescribe el Dockerfile `./src/votingapp/Dockerfile`, esta vez para la applicación de votaciones implementada con .NET Core. `./src/votingapp-dotnet`

## Dockeriza los tests de integración
Dockeriza, reescribiendo el Dockerfile `./test/Dockerfile`, los tests de integración en nodejs realizados en puntos anteriores.

## Pipeline con docker compose 
Verifica que la aplicación funciona correctamente ejecutando el script docker pipeline `./docker-pipeline.sh`, se deben ejecutar los test de integración usando docker compose `./docker-compose.yml` y las imágenes de docker creadas en los puntos anteriores.  

### Entrega
Se entrega en repo privado de git (github, bitbucket, gitlab,...)
Fecha límite 9 enero 2019