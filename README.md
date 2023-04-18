# GymCapyFit
Repositorio enfocado al desarrollo de un sistema para gestión de un gimnasio asignado por la empresa iTTiVA

## Contenido
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="##Generalidades">Generalidades</a>
      <ul>
        <li><a href="###descripción">Descripción</a></li>
        <li><a href="###Objetivo-del-Proyecto">Objetivo del Proyecto</a></li>
        <li><a href="###Objetivos-Específicos">Objetivo del Proyecto</a></li>
      </ul>
      <a href="##Análisis-de-Solución">Análisis y Diseño de la Solución</a>
      <ul>
        <li><a href="###Diagrama-de-Casos-de-Uso">Diagrama de Casos de Uso</a></li>
        <li><a href="###Diagramas-de-Actividades">Diagrama de Actividades</a></li>
        <li><a href="###Objetivos-Específicos">Objetivo del Proyecto</a></li>
        <li><a href="###Historias-de-Usuario">Historias de Usuario</a></li>
        <li><a href="###Modelo-Vista-Controlador">Modelo Vista Controlador</a></li>
        <li><a href="###Diagramas-de-Componentes">Diagramas de Componentes</a></li>
        <li><a href="###Modelo-de-Base-de-Datos">Modelo de Base de Datos</a></li>
        <li><a href="###Diagrama-de-Grantt">Diagrama de Grantt</a></li>
      </ul>
      <a href="##Manuales">Manuales</a>
      <ul>
        <li><a href="###Manual-de-Instalación">Manual de Instalación</a></li>
        <li><a href="###Manual-de-Usuario">Manual de Usuario</a></li>
      </ul>
      <a href="##Codigo-Fuente">Codigo Fuente</a>
      <a href="##Casos-de-Prueba">Casos de Prueba</a>
      <a href="##organigrama-del-equipo">Organigrama del Equipo</a>
    </li>
    <li>
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
![imagen](https://user-images.githubusercontent.com/106355475/232170385-4176e838-11de-4278-a086-f859e03ae2c2.png)

### Diagramas de Componentes
![imagen](https://user-images.githubusercontent.com/106355475/232632802-510de471-30c7-43f0-990c-c9aaf4937710.png)

<!-- Modelo de la Base de Datos -->
### Modelo de Base de Datos
![imagen](https://user-images.githubusercontent.com/106355475/232638263-e5aa9295-b88f-40e7-9583-c7b7597b98c0.png)

La tabla CheckIn servira para almacenar las entradas y salidas de los empleados, esta cuenta con las siguientes columnas:
- IdEmpleado: Valor que servira como identificador para asignar el registro a un empleado (Valor Numerico). 
- Fecha: Campo en el que se almacenara el dia, mes y año en el que se hizo el registro (Valor Tipo Cadena).
- Hora: Campo en el que se almacenaran los minutos y la hora en que se hizo el registro (Valor Tipo Cadena).
- Tipo: Valor que pemitira diferenciar cuando un registro es de *entrada* o *salida* (Valor Tipo Cadena).

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
