import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { HomeViewComponent } from './core/home-view/home-view.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [{ path: '', component: HomeViewComponent },
{ path: 'user-list', component: UserListComponent },
{ path: 'todo-list', component: TodoListComponent },
{ path: 'error-page', component: ErrorPageComponent},
{ path: '**', redirectTo: 'error-page' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
