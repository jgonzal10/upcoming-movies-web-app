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
  MatPaginatorModule
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
  MatPaginatorModule
]

@NgModule({
  declarations: [],
  imports: [
    Material
  ],
  exports:[Material]
})
export class MaterialmoduleModule { }
