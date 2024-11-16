#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 directory_name"
    exit 1
fi

DIR_NAME=$1

mkdir -p "$DIR_NAME"
cd "$DIR_NAME" || exit

for dir in adapters components hooks interceptors models services styled-components; do
    echo "creando directorio $dir"
    mkdir -p "$dir"
    echo "creando indice en $dir"
    touch "$dir/index.ts"
done

echo "Directory structure created successfully."
