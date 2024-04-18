# HACKATRIP
## Descripción
“Hackatrip” se trata de una agencia de viajes online para gente que viaja sola y quiere conocer otros países en grupo (y conocer gente) o apuntarse un grupo de amigos al mismo viaje. Además en cada viaje hay una figura de coordinador que acompaña al grupo de viajeros y hace las vacaciones mas sencillas y con todo controlado.
## Como usar HACKATRIP
### Base de datos
Hackatrip utiliza MySQL como base de datos para almacenar información de viajes y usuarios. Asegúrese de seguir estos pasos para configurar la base de datos correctamente:

Instale MySQL: si no tiene MySQL instalado, puede descargarlo desde [@el sitio web oficial](https://www.mysql.com/downloads/) .

Cree una base de datos: cree una base de datos en MySQL que utilizará Hackatrip. El nombre de la base de datos debe coincidir con el especificado en el archivo de configuración .env. Puede utilizar una herramienta como MySQL Workbench o ejecutar comandos SQL para crearlo.

Configuración en el Archivo .env:

Asegúrese de que el archivo .env en la raíz de su proyecto contenga la configuración correcta para MySQL. Debería tener variables como DB_PORT y JWT SECRET (hay un archivo .env.example).

Cliente MySQL: Hackatrip utiliza un módulo llamado MySQLClient.js para administrar la conexión de la base de datos. Asegúrese de que este archivo esté configurado para usar las variables de entorno del archivo .env y los valores definidos en config.js:
address debe ser "localhost" o la dirección de su base de datos MySQL.
user debe ser "demo" o el usuario de su base de datos MySQL.
password debe obtenerse de Process.env.DB_PASSWORD o usar "contraseña" si no se proporciona en el archivo .env.
database debe ser "" o el nombre de su base de datos MySQL.

### Crear tablas de la base de datos

Abre la terminal y escribe:

```
npm run migrate
```
Este comando inicializa tablas en la base de datos usando Node.js. Cuando ejecuta este comando, se conecta a la base de datos y crea las tablas necesarias.Este comando debe ejecutarse solo una vez, antes de usar Hackatrip o si necesita reiniciar las tablas de la base de datos. Este comando ya crea la base de datos precargada con usuarios y envíos.

### Ejecutar
Para ejecutar, siga estos pasos:

Instalar dependencias: abra una terminal en la raíz de su proyecto y ejecute el siguiente comando para instalar dependencias:

```
npm i
```

Inicie: una vez instaladas las dependencias, puede iniciar con el siguiente comando:

```
npm start
```

Debería estar escuchando en un puerto específico. Puedes acceder a él a través de las rutas definidas en los controladores.

### Endpoints

### Tech stack

- Node.js: la plataforma en la que se construye la aplicación.

- Express.js: un marco web para Node.js, utilizado para construir.

- Cors: un middleware para Express utilizado para permitir el intercambio de recursos entre orígenes.

- Dotenv: un paquete para cargar variables de entorno desde un archivo .env.

- Joi: una biblioteca de validación de datos para Node.js, utilizada para la validación de datos en la aplicación.

- JsonWebToken (JWT): una biblioteca para crear y verificar tokens de autenticación JWT.

- Morgan: un middleware para Express utilizado para el registro de solicitudes HTTP.

- mysql2: un controlador MySQL para Node.js, utilizado para interactuar con la base de datos MySQL.

- mysql2-promise: una biblioteca que proporciona funciones de promesa para trabajar con mysql2.

- UUID: una biblioteca para generar identificadores únicos (UUID).

- Vitest: un marco de prueba para aplicaciones Vue 3. Se utiliza para pruebas de proyectos.

- Bcrypt: una biblioteca de hash especializada en seguridad de contraseñas para aplicaciones web.
