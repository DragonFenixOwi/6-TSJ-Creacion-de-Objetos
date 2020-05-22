/*
    Autor: Osvaldo Aquino
    nickname: owi
    Creacción de Objetos: Construcciones 
    ----------------------------------
*/

/*
    Funciones para  Impresion en la consola del navegador
*/

// llamada a los metodos del objeto
function metodo_del_objeto (construciones)
    {
        // Imprimiendo los metodos del objeto "casa" 
            console.log(` Los Metodos de casa son : \t `);
            casa.detalles();
        // Imprimiendo los metodos del objeto "Departamento" 
            console.log(` Los Metodos de Departamento son : \t `);
            departamento.detalles();
        // Imprimiendo los metodos del objeto "Hotel" 
            console.log(` Los Metodos de Hotel son : `);
            Hotel.detalles();
    }


/*
    Creando Objetos y Metodos
    -----------------
*/

// Creando Primer objeto "casa"
var casa =
    {
        //Propiedades del objeto
            zonas : 'Patio',    // primer valor del key o de la llave es "patio"
            estructura : 'Chimenea',  // segundo valor del key 
            Ubicacion : 'Barrio cerrado',
            propietario : 'Familia',

        // Creando metodos del objeto
            detalles : function ()
                {
                    console.log(`\t- ${this.zonas}  \n\t- ${this.estructura} \n \t- ${this.Ubicacion}: \n \t- ${this.propietario} \n`);
                }
    };


//Creando Segundo Objeto "Departamento" 
var departamento =
    {
        // 1er Key = primera palabra clave "zona" 
            zonas : 'Pisos',    // primer valor del key o de la llave es "pisos"
            estructura : 'Ascensor',  // segundo valor del key 
            Ubicacion : 'Centro',
            propietario : 'Condominio',

        // Creando metodos del objeto
            detalles : function ()
                {
                    console.log(`\t- ${this.zonas}  \n\t- ${this.estructura} \n \t- ${this.Ubicacion}: \n \t- ${this.propietario} \n`);
                }
    };


//Creando Tercer Objeto "Hotel" 
var Hotel =
    {
        // 
            zonas : 'Piscinas',    // primer valor del key o de la llave es "patio"
            estructura : 'Domotica',  // segundo valor del key 
            Ubicacion : 'Frente al mar',
            propietario : 'Sociedad Anonima',

        // Creando metodos del objeto
            detalles : function ()
                {
                    console.log(`\t- ${this.zonas}  \n\t- ${this.estructura} \n \t- ${this.Ubicacion}: \n \t- ${this.propietario} \n`);
                }
    };



// Llamada a la función "metodo_del_objeto" para imprimir en consola
metodo_del_objeto(true);
