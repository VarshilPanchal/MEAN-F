import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './module/shared/footer/footer.component';
import { HeaderComponent } from './module/shared/header/header.component';
import { EmployeeFormComponent } from './module/shared/employee-form/employee-form.component';
import { HomeComponent } from './module/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMaterialModule } from './mat-material/mat-material.module';
import { CustomHttpService } from './services/custom-http-service/custom-http.service';
import { NotificationService } from './services/notification-service/notification.service';
import { LocalstorageService } from './services/localstorage-service/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    EmployeeFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomHttpService, NotificationService, LocalstorageService,

    // AuthGuard, { provide: LocationStrategy, useClass: HashLocationStrategy },
    // AuthGuardAdmin, NavigationService, ProjectJobSelectionService, {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: httpInterceptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
