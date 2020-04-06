import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectLevelComponent } from './components/select-level/select-level.component';
import { LetterGuessingComponent} from './components/letter-guessing/letter-guessing.component';


const routes: Routes = [
  { path: 'select-level', component: SelectLevelComponent },
  { path: 'letter-guessing', component: LetterGuessingComponent },
  {
    path: '',
    redirectTo: '/select-level',
    pathMatch: 'full'
  },
  { path: '**', component: SelectLevelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
