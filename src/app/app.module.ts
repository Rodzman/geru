import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgxMaskModule} from 'ngx-mask'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { GeruService } from './geru.service';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContentComponent } from './content/content.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-list/users-detail/users-detail.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    BreadcrumbComponent,
    ContentComponent,
    UsersListComponent,
    UsersDetailComponent,
    FormComponent,
    FooterComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    NgxMaskModule.forRoot()
  ],
  providers: [GeruService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
