import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { SampleWorldComponent } from './sample-world/sample-world.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HeadingComponent } from './heading/heading.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RemainingAngularComponent } from './remaining-angular/remaining-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    HeadingComponent,
    TemplateDrivenFormComponent,
    RemainingAngularComponent
    // HelloWorldComponent,
    // SampleWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
