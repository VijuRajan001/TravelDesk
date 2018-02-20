import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { UserService }  from '../../shared/services/user.service';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule} from '../../app.material.module';
import { routing }  from './account.routing';

@NgModule({
  imports: [
    CommonModule,FormsModule,routing,AppMaterialModule
  ],
  declarations: [LoginComponent],
  providers:    [ UserService ],
  exports:[LoginComponent]
})
export class AccountModule { }