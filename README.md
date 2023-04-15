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

![imagen](https://user-images.githubusercontent.com/106355475/232172149-e524fa39-57ad-42bf-ad2b-6d0057bbce85.png)

Control de Asistencias

![imagen](https://user-images.githubusercontent.com/106355475/232172160-911e5b39-6dcb-4eaf-8394-c394a1406e76.png)


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
