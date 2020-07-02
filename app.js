 const argv = require('./Confing/Yargs').argv;
 const colors = require('colors/safe');

 
 
 const {crearArchivo,listarTabla} = require('./Multiplicar/multiplicar');

let comando = argv._[0];
switch( comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
                .then(archivo=>console.log(`Archivo creado:`, colors.green(archivo)))
               .catch(e=>console.log(e));
        
    break;

    default:
        console.log('Comando no reconocido');

}
//  let  base = '75';

 
 console.log(argv);

//  let parametro =argv[2];
//  let base =parametro.split('=')[1];

 //console.log(base);

//console.log(process.argv);

//



