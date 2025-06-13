import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleWorldComponent } from './sample-world/sample-world.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HeadingComponent } from './heading/heading.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RemainingAngularComponent } from './remaining-angular/remaining-angular.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    HeadingComponent,
    TemplateDrivenFormComponent,
    RemainingAngularComponent,
    ReactiveFormComponent
    // HelloWorldComponent,
    // SampleWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
