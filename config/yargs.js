let opciones={
    archivo:{
        demand: true,
        alias: 'f',
        description: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },pais:{
        alias: 'c',
        default: 'ECU',
        description: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3'
    },anio:{
        alias: 'y',
        default: 1960,
        description: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3'
    }
}
const argv = require('yargs').command('crear','Crea un archivo con la tabla de multiplicar',opciones)
.command('listar','listar la tabla de multiplicar',opciones)
.help()
.argv;


module.exports={
    argv
};