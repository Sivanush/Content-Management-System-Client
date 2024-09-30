
import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';
import { firstValueFrom, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }

  loadingToaster<T>(observable: Observable<T>, successMessage: string): Promise<T> {
    const promise = firstValueFrom(observable);
  
    toast.promise(promise, {
      loading: 'Loading...',
      success: successMessage,
      error: (error:unknown) => {
        // Check if error.message exists and handle string or array
        const errorMessage = (error as { error?: { message?: string | string[] } })?.error?.message;
        
        if (Array.isArray(errorMessage) && errorMessage.length) {
          // If it's an array, join the messages  
          return errorMessage.join(', ');
        } else if (typeof errorMessage === 'string') {
          // If it's a single string, return it
          return errorMessage;
        }
        
        // Fallback message if no messages are available
        return 'An unexpected error occurred.';
      },
    });
  
    // Return the promise so that we can handle the result in the calling function
    return promise;
  }
  





  showSuccess(message: string) {
    toast.success(message, {
      duration: 3000,
    });
  }

  showError(message: string) {
    toast.error(message, {
      duration: 3000,
    });
  }

  showInfo(message: string) {
    toast.info(message, {
      duration: 3000,
    });
  }

  showWarn(message: string) {
    toast.warning(message, {
      duration: 3000,
    });
  }
}
