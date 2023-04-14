# GymCapyFit
Repositorio enfocado al desarrollo de un sistema para gestión de un gimnasio asignado por la empresa iTTiVA

## Integrantes
- Juan Pablo Jimenez Jaime
- Carlos Eduardo Mata Rojas
- Marisol Nuñez Monasterio
- Maria Fernanda Palacios Rangel

## Objetivo del Proyecto
Gestiónar las asistencias de los empleados en un gimnasio, generando un código QR que contendra los datos del empleado y mediante un escáner QR este permitira al empleado registrar su entrada y salida, ademas se podra consultar un registro de las asistencias, retardos y faltas de cada empleado por mes.

## Objetivos Específicos 
- Registrar entrada y salida de los empleados del gimnasio.
- Controlar la asistencia y puntualidad de los empleados.
- Facilitar el cálculo de las asistencias y retardos de los empleados.
- Generar información estadística sobre la asistencia y puntualidad de los empleados.

## Diagrama de Casos de Uso
![imagen](https://user-images.githubusercontent.com/106355475/232168653-8fde5cc3-9036-40a7-ade9-c7b9d532b96a.png)

## Diagramas de Actividades
Registro de Asistencia
![imagen](https://user-images.githubusercontent.com/106355475/232172054-f274de30-e054-48c3-bf8f-84acda3071ca.png)

Control de Asistencias
![imagen](https://user-images.githubusercontent.com/106355475/232172068-0de383bf-598e-427b-9305-69330dbb114a.png)


## Modelo de Base de Datos
### Tabla CheckIn
![imagen](https://user-images.githubusercontent.com/106355475/232168859-a0956208-e7ed-4372-a4ff-7aaf66800a7f.png)

La tabla CheckIn servira para almacenar las entradas y salidas de los empleados, esta cuenta con las siguientes columnas:
- IdEmpleado: Valor que servira como identificador para asignar el registro a un empleado (Valor Numerico). 
- Fecha: Campo en el que se almacenara el dia, mes y año en el que se hizo el registro (Valor Tipo Cadena).
- Hora: Campo en el que se almacenaran los minutos y la hora en que se hizo el registro (Valor Tipo Cadena).
- Tipo: Valor que pemitira diferenciar cuando un registro es de **entrada** o **salida** (Valor Tipo Cadena).

## Historia de Usuario
![imagen](https://user-images.githubusercontent.com/106355475/232169775-2751f0f6-a4de-4fb1-aa09-571d4fa0411e.png)

## Modelo Vista - Controlador
![imagen](https://user-images.githubusercontent.com/106355475/232170385-4176e838-11de-4278-a086-f859e03ae2c2.png)

## Organigrama del Equipo
![imagen](https://user-images.githubusercontent.com/106355475/232168585-a70f95e6-c174-4a45-b36e-84d3d172024c.png)

## Archivo Propuesta de Solución
### [Propuesta](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Reporte%20Propuesta%20de%20Soluci%C3%B3n.pdf).

## Archivo Generalidades del Proyecto
### [Generalidades](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Generalidades%20de%20la%20propuesta%20de%20solucion.pdf).

## Base de Datos Refinada
### [Modelo](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Diagrama%20de%20Clases%20o%20modelo%20de%20la%20base%20de%20datos%20refinada.pdf).

## Arquitectura MVC y Diagrama de Componentes
### [Archivo](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Arquitectura%20MVC%20y%20diagrama%20de%20componentes.pdf).

## Manual de Instalación del Proyecto
### [Manual](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Proceso%20de%20instalaci%C3%B3n%20del%20proyecto.pdf).

## Manual de Usuario
### [Manual](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Manual%20de%20usuario.pdf).

## Pruebas de Caja Negra
### [Pruebas](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Casos%20de%20prueba.xlsx).

## Plan de Iteraciones
### [Iteraciones](https://github.com/CarlosMR75/Integradora_II/blob/main/Documentaci%C3%B3n/Plan%20de%20iteraciones.xlsx).

## Carpeta Back-End
### [Back-End](https://github.com/CarlosMR75/Integradora_II/tree/main/BackEnd-GymCapyFit).

## Carpeta Front-End
### [Front-End](https://github.com/CarlosMR75/Integradora_II/tree/main/GymCapyFit).
