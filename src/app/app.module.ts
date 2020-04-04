import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './modules/ng-material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { SelectLevelComponent } from './components/select-level/select-level.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
