import { MatOption, MatTableModule, MatCardModule, MatInputModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatTableModule],
})
export class MaterialModule { }