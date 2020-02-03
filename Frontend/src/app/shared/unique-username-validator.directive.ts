import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { DbServicesService } from './../db-services.service';
import { map } from 'rxjs/operators';
import { User } from '../Models/user';
// import { uniqueUsernameValidator } from './unique-username-validator.directive';

export function uniqueUsernameValidator( userService: DbServicesService): AsyncValidatorFn{
  return (c: AbstractControl): Promise<ValidationErrors| null> | Observable<ValidationErrors|null> =>{
    return userService.getUserByUsername(c.value).pipe(
      map(users => {
          return users && User.length > 0 ? { 'uniqueUsername':true} : null;
      })

    );
  };

}



@Directive({
  selector: '[uniqueUsername]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective,multi:true}]
})
export class UniqueUsernameValidatorDirective  implements AsyncValidator{

  constructor( private userService: DbServicesService) { }

  validate(c: AbstractControl): Promise<ValidationErrors| null> | Observable<ValidationErrors|null>{
      // return this.userService.getUserByUsername(c.value).pipe(
      //   map(users => {
      //       return user && user.length > 0 ? {'uniqueUsername':true} : null;
      //   })

      // );
      return uniqueUsernameValidator(this.userService)(c)
  }
}
