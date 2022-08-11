Aplicación búsqueda de países:

Páginas:

1-. por país.
2-. por capital.
3-. por region.
4-. ver pais de manera individual.

Componentes:

1-. componente input.
2-. componente tabla.

shared:

1-. sidebar

Lo que se vio y se hizo

-. A través del componente de input (solo una caja de texto) se hace un llamado al servicio,
el cual tiene diferentes métodos para ver la data por país, por capital, por región y por país de manera individual.

-. El componente de input y de tabla son reutilizados a lo largo de toda la aplicación. Excepto en la parte de regiones
y ver país de manera individual.

A modo general se vio básicamente:
-. Rutas con RouterModule.

-.RouterLink.

-.Servicio sus métodos para recoger la información según sea (por país, capital, etc).

-.Tipado de la petición.

-.Muestra de los datos consumiendo el servicio.

-.Reutilización de componentes (input y tabla).

-.Debounce time en input para sacar el error de búsqueda del usuario y para mostrar sugerencias.

-.Cambio de placeholder de manera dinámica.

-.Acceder a la información cuando son objetos aninados.

-.ngClass, class y [class].
