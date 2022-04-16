import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [AppComponent, ItemComponent, AboutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbDatepickerModule,
    AppRoutingModule,
    RouterModule,
    MatButtonToggleModule,
  ],
  providers: [
    MatSnackBar,
    Overlay,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
