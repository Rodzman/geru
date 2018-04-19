import {Routes} from '@angular/router'
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-list/users-detail/users-detail.component';
import { ContentComponent } from './content/content.component';

export const ROUTES: Routes = [
    {path: '', component: ContentComponent},
    {path: 'users', component: UsersListComponent},
    {path: 'users/:id', component: UsersDetailComponent}
]