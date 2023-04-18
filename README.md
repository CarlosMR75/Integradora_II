# GymCapyFit
Repositorio enfocado al desarrollo de un sistema para gestión de un gimnasio asignado por la empresa iTTiVA

## Contenido
<details>
  <summary>Contenido</summary>
  <ol>
      <a href="#Generalidades">Generalidades</a>
      <ul>
        <li><a href="#Descripción">Descripción</a></li>
        <li><a href="#Objetivo-del-Proyecto">Objetivo del Proyecto</a></li>
        <li><a href="#Objetivos-Específicos">Objetivo del Proyecto</a></li>
      </ul>
      <a href="#Análisis-de-Solución">Análisis y Diseño de la Solución</a>
      <ul>
        <li><a href="#Diagrama-de-Casos-de-Uso">Diagrama de Casos de Uso</a></li>
        <li><a href="#Diagramas-de-Actividades">Diagrama de Actividades</a></li>
        <li><a href="#Objetivos-Específicos">Objetivo del Proyecto</a></li>
        <li><a href="#Historias-de-Usuario">Historias de Usuario</a></li>
        <li><a href="#Modelo-Vista-Controlador">Modelo Vista Controlador</a></li>
        <li><a href="#Diagramas-de-Componentes">Diagramas de Componentes</a></li>
        <li><a href="#Modelo-de-Base-de-Datos">Modelo de Base de Datos</a></li>
        <li><a href="#Diagrama-de-Clases">Diagrama de Clases</a></li>
        <li><a href="#Diagrama-de-Gantt">Diagrama de Grantt</a></li>
      </ul>
      <a href="#Manuales">Manuales</a>
      <ul>
        <li><a href="#Manual-de-Instalación">Manual de Instalación</a></li>
        <li><a href="#Manual-de-Usuario">Manual de Usuario</a></li>
      </ul>
      <a href="#Codigo-Fuente">Codigo Fuente</a>
      <br>
      <a href="#Casos-de-Prueba">Casos de Prueba</a>
      <br>
      <a href="#organigrama-del-equipo">Organigrama del Equipo</a>
  </ol>
</details>

### Integrantes
- Juan Pablo Jimenez Jaime
- Carlos Eduardo Mata Rojas
- Marisol Nuñez Monasterio
- Maria Fernanda Palacios Rangel

## Generalidades

### Descripción

### Objetivo del Proyecto
Gestiónar las asistencias de los empleados en un gimnasio, generando un código QR que contendra los datos del empleado y mediante un escáner QR este permitira al empleado registrar su entrada y salida, ademas se podra consultar un registro de las asistencias, retardos y faltas de cada empleado por mes.

### Objetivos Específicos 
- Registrar entrada y salida de los empleados del gimnasio.
- Controlar la asistencia y puntualidad de los empleados.
- Facilitar el cálculo de las asistencias y retardos de los empleados.
- Generar información estadística sobre la asistencia y puntualidad de los empleados.

## Análisis de Solución

### Diagrama de Casos de Uso
![imagen](https://user-images.githubusercontent.com/106355475/232168653-8fde5cc3-9036-40a7-ade9-c7b9d532b96a.png)

### Diagramas de Actividades
Registro de Asistencia

![imagen](https://user-images.githubusercontent.com/106355475/232172149-e524fa39-57ad-42bf-ad2b-6d0057bbce85.png)

Control de Asistencias

![imagen](https://user-images.githubusercontent.com/106355475/232172160-911e5b39-6dcb-4eaf-8394-c394a1406e76.png)

### Historias de Usuario
![imagen](https://user-images.githubusercontent.com/106355475/232169775-2751f0f6-a4de-4fb1-aa09-571d4fa0411e.png)

### Modelo Vista Controlador
![imagen](https://user-images.githubusercontent.com/106355475/232680621-57576e21-4e6c-483d-be23-255c360a5571.png)

### Diagramas de Componentes
Diagrama de componentes checkIn

![imagen](https://user-images.githubusercontent.com/106355475/232858418-b9b6b0cf-75b2-4d42-ae0e-8319d97b0b67.png)

### Modelo de Base de Datos
Tabla checkIn

![imagen](https://user-images.githubusercontent.com/106355475/232687957-68ae0924-f83a-43b1-b5fc-ba468f8c1a59.png)

La tabla checkIn almacenara las entradas y salidas de los empleados, esta cuenta con las siguientes columnas:
- idEmpleado: Valor que servira como identificador para asignar el registro a un empleado (Valor Numerico). 
- fecha: Campo en el que se almacenara el dia, mes y año en el que se hizo el registro (Valor Tipo Cadena).
- hora: Campo en el que se almacenaran los minutos y la hora en que se hizo el registro (Valor Tipo Cadena).
- tipo: Valor que pemitira diferenciar cuando un registro es de *entrada* o *salida* (Valor Tipo Cadena).

Tabla usuarios

![imagen](https://user-images.githubusercontent.com/106355475/232687360-d339d538-80d8-4266-a2f8-fd3963499243.png)

La tabla usuarios almacenara los datos de los usuarios, estos son utilizados para generar el código QR que sera utlizado en el checkIn, esta cuenta con las siguientes columnas:
- id: Identificador único para cada usuario (Valor Numerico).
- nombreUsuario: Valor para almacenar un nombre a cada usuario dentro de la base de datos (Valor Tipo Cadena).
- foto: Valor donde se almacenara la ubicación de una foto para cada usuario (Valor Tipo Cadena).
- edad: Edad de cada usuario (Valor Numerico).
- sueldo: Sueldo que percibe cada usuario (Valor Numerico).
- turno: Identificador para diferenciar el horario de cada usuario (Valor Tipo Cadena).
- email: Correo electrónico de cada usuario en la base de datos (Valor Tipo Cadena).
- telefono: Número teléfonico de cada usuario en la base de datos (Valor Tipo Cadena).
- password: Contraseña de cada usuario con la que podra ingresar al sistema (Valor Tipo Cadena).
- roles: Arreglo donde se almacenaran los roles de cada usuario, esto permite tener mas de un rol a cada usuario (Arreglo de Tipo Cadena).

### Diagrama de Clases
![imagen](https://user-images.githubusercontent.com/106355475/232862691-a13a23b4-c55b-4f37-8f74-ec17c16c9192.png)

### Diagrama de Gantt
![imagen](https://user-images.githubusercontent.com/106355475/232641177-18fc520c-171b-4533-b06f-e1b9498cdc4d.png)

## Manuales

### Manual de Instalación
El manual contiene los pasos a seguir para realizar la instalación del proyecto en un entorno de desarrollo, se incluyen ejemplos visuales ademas de los requisitos del sistema.

[Manual de Instalación](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Proceso%20de%20instalaci%C3%B3n%20del%20proyecto.pdf)

### Manual de Usuario
El manual contiene ejemplos visuales de como realizar las operaciones en la aplicación, orientado a un usuario.

[Manual de Usuario](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Manual%20de%20usuario.pdf)

## Codigo Fuente
- [Front-End](https://github.com/CarlosMR75/Integradora_II/tree/main/GymCapyFit)
- [Back-End](https://github.com/CarlosMR75/Integradora_II/tree/main/BackEnd-GymCapyFit)

## Casos de Prueba
Este cuenta con las pruebas necesarias para probar la funcionalidad del CheckIn de la aplicación mediante el código QR de un empleado.

[Casos de Prueba CheckIn]()

## Organigrama del Equipo
![imagen](https://user-images.githubusercontent.com/106355475/232168585-a70f95e6-c174-4a45-b36e-84d3d172024c.png)
