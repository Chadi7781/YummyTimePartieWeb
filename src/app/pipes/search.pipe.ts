import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {



  transform( args:any[],term): any {

      if (term==undefined){

        return args;
      }

    return args.filter(item=> item.nom.includes(term) || item.email.includes(term));
  }

}
