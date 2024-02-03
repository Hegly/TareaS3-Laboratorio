-- Active: 1705534014031@@localhost@5432@api_jardin@public

create table tbl_zonas_jardin
(
    id serial primary key , 
    nombre varchar(200),
    creado TIMESTAMP DEFAULT current_timestamp
)

create table tbl_planta
(
    id serial primary key , 
    nombre varchar(500),
    tipo varchar(500),
    id_zona int REFERENCES tbl_zonas_jardin(id),
    creado TIMESTAMP DEFAULT current_timestamp
);

create table tbl_riego
(
    id serial primary key , 
    tipo varchar(500),
    fecha_riego TIMESTAMP,
    tiempo_riego TIME
);

insert into tbl_planta
(nombre, tipo)
VALUES
('Margaritas', 'Ornamental'),
('Mango', 'Frutal'),
('Zacate de Limón', 'Medicinal');

select a.id,
        a.nombre as nombre_planta,
        a.tipo,
        b.nombre as nombre_zona
from tbl_planta a
inner join tbl_zonas_jardin b
on a.id_zona = b.id