import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { UserComponent } from './Components/user/user.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { CategoriesComponent } from './Components/categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TasksComponent,
    FormulaireComponent,
    AddUserComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
