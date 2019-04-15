import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DialogComponent} from './dialog/dialog.component';
import {RegisteredGuard} from './registered.guard';
import {DialogListComponent} from './dialog-list/dialog-list.component';

const appRoutes: Routes = [
  { path: '', children: [
      { path: 'dialog/:id', component: DialogComponent, canActivate: [RegisteredGuard] },
      { path: 'dialogs', component: DialogListComponent, canActivate: [RegisteredGuard] },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
    providers: [RegisteredGuard]
})
export class MessageRoutingModule { }
