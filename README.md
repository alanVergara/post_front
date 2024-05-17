# Post App Front

Este proyecto fue creado en Ubuntu 20.04, se presenta una aplicación con un listado de posts con nombre y descripción, con la opción de crear un nuevo Post, borrar uno existente o filtrar dentro de los existentes por su nombre

## Prerequisitos

  Es necesario contar con: 
  `node.js v20.12.2`
  `npm 10.5.0`

### Verificar host de la API en el siguiente archivo

  `src/services/posts.js` en linea 3, reemplazar en caso de ser necesario

### Instalar paquetes necesarios

  Dentro de la ruta raiz del proyecto ejecutar `npm install`

### Iniciar la aplicación 

  Se recomienda iniciar primero el proyecto contenedor del [API](https://github.com/alanVergara/post_api)
        
  Dentro de la ruta raiz del proyecto ejecutar `npm start`

### Consideraciones adicionales 

  Si el puerto ya se encuentra utilizado se realiza una consulta para abrir la aplicación en otro puerto, el lugar opcional donde se inicia la aplicación es http://localhost:3001
  
