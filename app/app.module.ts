import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatTabsModule} from '@angular/material/tabs';
import { TabsModule } from 'ngx-tabs';
import {  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
  RecaptchaLoaderService,
  RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { SerComponent } from './ser/ser.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component'
import { ProjectsComponent } from './projects/projects.component'
import { MainPageComponent } from './main-page/main-page.component';
import { routing } from './app.routes'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SerComponent,
    AboutComponent,
    ContactComponent,
    TeamComponent,
    ProjectsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    Ng2CarouselamosModule,
    routing,
    RecaptchaModule,
    MatGridListModule,
    MatTabsModule,
    NgbModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    TabsModule 
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
