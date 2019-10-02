import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'filter' 
})

export class FilterPipe implements PipeTransform {

    transform(value: any, titulo: string, descrip: string, num: string): any{

        var rtitulo = [];
        var rdescrip = [];
        var rnum = [];
        var result = [];

        if(titulo.length>0 || descrip.length>0 || num.length>0 ){

            for (const texto of value) {

                if (titulo.length>0 && 
                    texto.titulo.toLowerCase().indexOf(titulo.toLowerCase()) > -1) {
                    
                    result.push(texto);

                }else if (descrip.length>0 && 
                    texto.descrip.toLowerCase().indexOf(descrip.toLowerCase()) > -1) {
                    
                    result.push(texto);

                }else if (num != '' && 
                    texto.num.toLowerCase().indexOf(num.toLowerCase()) > -1) {
                        
                    result.push(texto);
                
                }

            }

        }else{
            console.log("hola");
            result = value;
        }


        return result;
    }

}