import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { CertificateComponent } from './certificate/certificate.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard]
     ,  children:[
        {
         	path : 'certificate',
         	component: CertificateComponent
        },
        {
             path : 'certificate/:certificate_id',
             component: CertificateComponent
        },
        {
            path : '',
            component: HomeComponent
        },
        {
         	path : 'teachers',
         	component: UserComponent
        },
        {
            path : 'students',
            component: StudentComponent
        },
        {
            path : 'students/add',
            component: AddstudentComponent
        },
        {
            path : 'students/edit/:student_id',
            component: AddstudentComponent
        },
        {
            path : 'students/delete/:student_del_id',
            component: StudentComponent
        }]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);