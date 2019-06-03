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
  MatDialogModule
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
  MatGridListModule,
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    Material
  ],
  exports:[Material]
})
export class MaterialmoduleModule { }
