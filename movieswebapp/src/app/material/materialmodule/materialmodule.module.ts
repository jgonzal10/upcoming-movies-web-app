import { NgModule } from '@angular/core';
import {  
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatGridListModule,
} from '@angular/material'
const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    Material
  ],
  exports:[Material]
})
export class MaterialmoduleModule { }
