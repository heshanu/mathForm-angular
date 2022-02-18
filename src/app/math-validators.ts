import { AbstractControl } from "@angular/forms";
export class MathValidators {
    static addition(target:string,sourceOne:string,sourceTwo:string){
        return (form:AbstractControl)=>{
            //const {a,b,answer}=form.value;
            const sum=form.value[target];
            const firstNumber=form.value[sourceOne];
            const twoNumber=form.value[sourceOne];

            if(firstNumber+twoNumber==parseInt(sum)){
                return null;
            }
            return {addition:true};
        };
           
    }
 }

