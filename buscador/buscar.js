const fs = require('fs');
var datos_archivo
//se crea una promesa
let crearArchivo = (archivo,pais,anio)=>{
    return new Promise((resolve,reject)=>{
        
        if (!fs.existsSync(archivo)){
            reject('el archivo no existe')
            return;
        }else{
            if (!Number(anio)){
                reject('el anio no es un numero')
                return;
            }else{
                console.log('entraaaaa')
                fs.readFile(archivo, 'utf8', function (err, data) {
                    var dataArray = data.split(/\r?\n/);
                    var a =dataArray[4].split(',')
                    var an
                    for (let i=0;i<a.length;i++){
                        if(a[i]==anio){
                            an=a[i]
                        }
                    }  
                    for (let i=0;i<dataArray.length;i++){
                        newArray= dataArray[i].split(',');
                        console.log('if'+pais+'+'+newArray[1])
                        if(newArray[1]==pais){
                            console.log('entraaaa')
                            datos_archivo=`Datos:	${newArray[2]}\nPaís:	${newArray[0]}\nAño:	${anio}\nValor:	${newArray[anio]}`
                            console.log(datos_archivo)
                        }
                    }
                    resolve(datos_archivo)
                });
        }}
    });
}

let listar=(base,limite)=>{
    
    let data = '';
    for (let i=1;i<=limite;i++){
        console.log(`${base} * ${i} = ${base * i}\n`);
    }

}



//si el nombre de la propiedad es igual al valor crearArchivo : crearArchivo solo se puede poner el nommbre, se crea un objeto
module.exports = {
    crearArchivo,
    listar
};