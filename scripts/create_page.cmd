@REM mkdir adapters components hooks interceptors models services styled-components
@REM copy /b NUL index.ts

@echo off
setlocal enabledelayedexpansion

if "%~1"=="" (
    echo Usage: %0 directory_name
    exit /b 1
)

set DIR_NAME=%~1

mkdir %DIR_NAME%
cd %DIR_NAME%

for %%d in (adapters components hooks interceptors models services styled-components) do (
    
    echo creando directorio %%d
    mkdir %%d
    echo creando indice en %%d
    copy /b NUL %%d\index.ts
)
copy /b NUL index.ts
echo Directory structure created successfully.
