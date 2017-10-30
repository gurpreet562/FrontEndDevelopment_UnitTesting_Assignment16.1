import { Injectable } from '@angular/core';
		import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
		import { ContactsService } from './contacts.service';
		
		@Injectable()
		export class ContactResolve implements Resolve<Contact> {
		
		  constructor(private contactsService: ContactsService) {}
		
		  resolve(route: ActivatedRouteSnapshot) {
		    return this.contactsService.getContact(route.paramMap.get('id'));
		  }
		}
