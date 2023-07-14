import { FormGroup, ValidatorFn } from '@angular/forms';


export function matchPasswordGroup(control1: string, control2: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const password = group.get(control1);
        const rePassword = group.get(control2);
        return password?.value === rePassword?.value ? null : { passwordMismatch: true };
    }
}