import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { InfrastructureComponent } from './modules/layout/views/infrastructure/infrastructure.component';
import { TorComponent } from './modules/layout/views/tor/tor.component';
import { AdvocacyComponent } from './modules/layout/views/advocacy/advocacy.component';
import { DefaultComponent } from './modules/layout/views/default/default.component';
import { ContactComponent } from './modules/layout/views/contact/contact.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '',
    component: DefaultComponent
  },{
    path: 'infrastructure',
    component: InfrastructureComponent
  },{
    path: 'tor',
    component: TorComponent
  },{
    path: 'advocacy',
    component: AdvocacyComponent
  },{
    path: 'contact',
    component: ContactComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }