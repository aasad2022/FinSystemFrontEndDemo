import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {CardModule, GridModule, NavModule, UtilitiesModule, TabsModule, TableDirective} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent, ThemeColorComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import {UsersComponent} from "./users.component";
import {ValidationComponent} from "../forms/validation/validation.component";
import {DataTablesModule} from "angular-datatables";

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    TableDirective,
    DataTablesModule
  ],
  declarations: [
    UsersComponent,
    ColorsComponent,
    ThemeColorComponent,
    TypographyComponent,
  ]
})
export class ThemeModule {
}
