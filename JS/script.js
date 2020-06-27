'use strict';

let jsonData = require('../dados_gravados.json');

//executa se tiver apenas uma entrada no json
if(jsonData.length==undefined){
    console.log("Curso: "+ jsonData.curso);
    console.log("Professor: "+ jsonData.professor);
    console.log("Alunos: "+ jsonData.nomes[0]+" e "+ jsonData.nomes[1]);
    console.log("");
}else{
    //executa esse laço se tiver mais de uma entrada no json
    for(let i=0; i<jsonData.length ; i++){
        console.log("Curso: "+ jsonData[i].curso);
        console.log("Professor: "+ jsonData[i].professor);
        console.log("Alunos: "+ jsonData[i].nomes[0]+" e "+ jsonData[i].nomes[1]);
        console.log("");
    }
}

