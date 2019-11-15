var fs = require('fs');
var dir = './resultados';
const {crearArchivo}=require('./buscador/buscar');
const {listar}=require('./buscador/buscar');


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let {argv}=require('./config/yargs')
let comando = argv._[0]

switch(comando){
    case 'mostrar':
        console.log("crear...");
        crearArchivo(argv.archivo,argv.pais,argv.anio)
        .then(archivo => console.log(`Arachivo creado: ${archivo}`.green))
        .catch(e=>console.log(e.red));
        break;
    case 'guardar':
        console.log(listar(argv.base,argv.limite))
        break;
    default:
        console.log("comando no valido!")
}

