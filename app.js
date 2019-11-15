var fs = require('fs');
var dir = './resultados';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log('carpeta creada')
}

let {argv}=require('./config/yargs')
let comando = argv._[0]

switch(comando){
    case 'mostrar':
        console.log("crear...");
        crearArchivo(argv.base,argv.limite)
        .then(archivo => console.log(`Arachivo creado: ${archivo}`.green))
        .catch(e=>console.log(e.red));
        break;
    case 'guardar':
        console.log(listar(argv.base,argv.limite))
        break;
    default:
        console.log("comando no valido!")
}

