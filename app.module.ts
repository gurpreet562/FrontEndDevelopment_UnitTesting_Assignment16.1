import { BrowserModule } from '@angular/platform-browser';
			import { NgModule } from '@angular/core';
			import { FormsModule } from '@angular/forms';
			import { HttpModule } from '@angular/http';
			
			import { RootComponent } from './app.component';
			import { DropDownService } from './drop-down.service';
			import { CapitalizePipe } from './capitalize.pipe';
			import {SearchFilterPipe} from './search.pipe';
			// this module is provided by the cli
			@NgModule({
			  declarations: [
			    RootComponent,
			    CapitalizePipe,
			    SearchFilterPipe
			
			  ],
			  imports: [
			    BrowserModule,
			    FormsModule,
			    HttpModule
			  ],
			  providers: [DropDownService],
			  bootstrap: [RootComponent]
			})
			export class AppModule { }
