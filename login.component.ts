import { Component } from '@angular/core';
			@Component({
			  selector: 'app-component',
			  templateUrl: 'app.component.html',
			  styleUrls: ['./app.component.css'],
			
			})
			export class RootComponent {
			  
			
			  ngOnInit() {
			   function=if (typeof(Storage) !== "undefined") {
		    
		    localStorage.setItem("lastname", "Smith");
		
		    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
		} else {
		    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		
		}
