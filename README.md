# 💬 Hackatrip

“Hackatrip” se trata de una agencia de viajes online para gente que viaja sola y quiere conocer otros países en grupo (y conocer gente) o apuntarse un grupo de amigos al mismo viaje. Además en cada viaje hay una figura de coordinador que acompaña al grupo de viajeros y hace las vacaciones mas sencillas y con todo controlado.

<div align="center">
  <img src="./images/hackatrip.png" alt="hackatrip_home">
</div>

## 👩‍💻 Authors

- [@BraisBernardez](https://github.com/braissgz)
- [@CristinaUfenast](https://github.com/cristinaufenast)
- [@RubenMuñoz](https://github.com/rumupadev)
- [@EnekoCelestino](https://github.com/Enekobass)
- [@SaraGonzalez](https://github.com/SaraRamrez)
- [@FranciscoJimenez](https://github.com/FranJimenezCriado)

## 💻 Tech Stack

<p align="center">
    <img src="https://skillicons.dev/icons?i=figma,ps,js,html,css,mysql,nodejs,postman,react,github,git,vscode&theme=light" />
</p>

## 📋 Funcionalidades

### USUARIO NO REGISTRADO

- Visualizar la landing con el listado de viajes.
- Búsqueda / filtro por:
  - palabra (destino, título, descripción)
  - rango de fechas.
- Ordenación experiencias (fecha, precio, número inscriptos, …).
- Registro (con envío e-mail de validación)
  - e-mail
  - username
  - contraseña
  - tipo de usuario (viajero o coordinador).
- Login con enlace de recuperación contraseña.

### USUARIO VIAJERO

- Visualizar la landing con el listado de viajes.
- Búsqueda, filtro y ordenación como un usuario no registrado.
- Acceder a la ficha de un viaje con todos los detalles.
- Gestión del perfil (edición de datos)
  - e-mail
  - username
  - contraseña
  - nombre y apellidos
  - avatar.
- Reservar un viaje.
- Listado de los viajes reservados.
- Cancelar una reserva hasta un límite mínimo.
- Rating del coordinador del viaje después de disfrutarlo (1-5).
- Listado de coordinadores con rating.
- Añadir fotos del viaje después de disfrutarlo.
- Dar like y comentar una foto de otro viajero.

### USUARIO COORDINADOR

- Visualizar la landing con el listado de viajes.
- Búsqueda, filtro y ordenación como un usuario no registrado.
- Acceder a la ficha de un viaje con todos los detalles.
- Gestión del perfil (edición de datos)
  - e-mail
  - username
  - contraseña
  - nombre y apellidos
  - biografía
  - avatar
  - valoración (automática, no modificable).
- Apuntarse / desapuntarse como coordinador a un viaje.
- Listado de viajes donde aparece como coordinador.
- Listado de coordinadores con rating.
- Dar like y comentar una foto de un viajero.
### USUARIO ADMINISTRADOR

- Visualizar la landing con el listado de viajes.
- Búsqueda, filtro y ordenación como un usuario no registrado.
- Acceder a la ficha de un viaje con todos los detalles.
- Gestión del perfil (edición de datos)
  - contraseña
  - avatar.
- Crear y modificar un viaje:
  - título
  - descripción
  - destino
  - imagen
  - fecha
  - precio
  - número mínimo de plazas para realizar un viaje
  - número de plazas totales
  - ruta
  - …
- Confirmar uno o más coordinadores, según el número de viajeros, al viaje con envío
email.
- Desactivar (ejemplo: no se llega al número mínimo de inscriptos, mal tiempo, …),
reactivar, confirmar un viaje con envío email a los inscriptos.

## ⚙ Inicialización

Para inicializar la aplicación, siga los pasos descritos en el archivo Readme en las carpetas Backend y Frontend.
