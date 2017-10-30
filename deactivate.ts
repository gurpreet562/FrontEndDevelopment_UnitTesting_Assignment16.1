import { CanDeactivate } from '@angular/router';
		import { CanDeactivateComponent } from './app/can-deactivate';
		
		export class ConfirmDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
		
		  canDeactivate(target: CanDeactivateComponent) {
		    if(target.hasChanges()){
		        return window.confirm('Are You Sure you dont want to save the data?');
		    }
		    return true;
		  }
		}
