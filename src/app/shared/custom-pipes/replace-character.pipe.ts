import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceCharacter'
})
export class ReplaceCharacterPipe implements PipeTransform{

    transform(input: string, sourceCharacter: string, targetCharacter: string): string{
        return input.replace(sourceCharacter, targetCharacter);
    }

}