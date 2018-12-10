# Ejercicio de Recuperación

El objetivo del ejercicio de recuperación es reescribir los mismos scripts realizados durante el curso partiendo de una nueva versión de la aplicación de votaciones implementado en [.NET Core](https://dotnet.microsoft.com/download) en vez del original implementado en Golang. También se usará nodejs en vez de python para implementar los tests de integración.

## Pipeline con Bash
Reescribe el pipeline de bash `pipeline.sh` para la aplicación de votaciones, versión .NET Core `./src/votingapp-dotnet`

## Reescribe los tests de integración con Nodejs 
Reescribe los tests de integración realizados en python `./test/test.py` en otro lenguaje de scripting como por ejemplo [nodejs](https://nodejs.org/en/).

## Dockeriza la applicación de votaciones 
Reescribe el Dockerfile `./src/votingapp/Dockerfile`, esta vez para la applicación de votaciones implementada con .NET Core

## Dockeriza los tests de integración
Dockeriza, reescribiendo el anterior Dockerfile `./test/Dockerfile`, los tests realizados en nodejs en el punto anterior

## Pipeline con docker compose 
Verifica que la aplicación funciona correctamente pasando los test de integración usando docker compose y las imágenes de docker creadas en los puntos anteriores.

### Entrega
Se entrega en repo privado de git (github, bitbucket, gitlab,...)