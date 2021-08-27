import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuestComponent } from './guest/guest.component';
import { AccountComponent } from './account/account.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PostComponent } from './post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: GuestComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
    { path: 'post', component: PostComponent, canActivate: [AuthGuard]},
    { path: 'update/:id', component: UpdatePostComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'feedback/:id', component: FeedbackComponent, canActivate: [AuthGuard]},
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
