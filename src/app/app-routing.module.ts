import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule,
  MatTableModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
