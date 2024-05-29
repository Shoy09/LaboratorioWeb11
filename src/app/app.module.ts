import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { FullComponent } from "./components/layouts/full/full.component";
import { MaterialModule } from './material-module';
import { AppRoutingModule } from "./app-routing.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { ComponentsModule } from "./components/core/core.module";
import { provideHttpClient } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    MaterialModule,
    FormsModule,
    DashboardModule, ComponentsModule,
    ToastrModule.forRoot() // Asegúrate de tener esto en tus imports

  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
