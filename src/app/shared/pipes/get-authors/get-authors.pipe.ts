import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAuthors',
})
export class GetAuthorsPipe implements PipeTransform {
  transform(authors: string[] | null | undefined): string {
    return authors ? authors.join(', ') : 'unavailable';
  }
}
