import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './modules/ng-material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { SelectLevelComponent } from './components/select-level/select-level.component';
import { LetterGuessingComponent} from './components/letter-guessing/letter-guessing.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectLevelComponent,
    LetterGuessingComponent,
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
