import { Component } from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeFormComponent,
    HeaderComponent,
    RouterModule,
    MatButton,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
