import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TorComponent } from './views/tor/tor.component';
import { InfrastructureComponent } from './views/infrastructure/infrastructure.component';
import { AdvocacyComponent } from './views/advocacy/advocacy.component';
import { DefaultComponent } from './views/default/default.component';
import { ContactComponent } from './views/contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    TorComponent,
    InfrastructureComponent,
    AdvocacyComponent,
    DefaultComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ContactService
  ]
})
export class LayoutModule { }
