import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class AlertService {

    public success(alertText: string): void {
        Swal.fire({
            title: 'Success!',
            text: alertText,
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Ok',
        });

        window.scroll(0, 0);
    }

    public warning(alertText: string): void {
        Swal.fire({
            title: 'Warning!',
            text: alertText,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Ok',
        });

        window.scroll(0, 0);
    }

    public error(alertText: string): void {
        Swal.fire({
            title: 'Error!',
            text: alertText,
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Ok',
        });

        window.scroll(0, 0);
    }

}
