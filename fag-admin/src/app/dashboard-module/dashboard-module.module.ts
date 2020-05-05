import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashMainComponent } from './dash-main/dash-main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DashMainComponent, SidebarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule
  ]
})
export class DashboardModuleModule { }
