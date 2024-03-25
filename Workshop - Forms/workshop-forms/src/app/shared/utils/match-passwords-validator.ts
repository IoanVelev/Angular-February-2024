import { ValidatorFn } from "@angular/forms";

export function matchPasswords(passwordControlName: string, rePasswordControlName: string): ValidatorFn {
    
    return (control) => {

        const passControl = control.get(passwordControlName);
        const repassControl = control.get(rePasswordControlName);

        const isMatch = passControl?.value === repassControl?.value;
        return isMatch ? null : { matchPasswordsValidator: true };
}
}