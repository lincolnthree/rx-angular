import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PushModule, UnpatchEventsModule } from '@rx-angular/template';

import { ROUTES } from './coalescing.routes';
import { CoalescingComponent } from './coalescing/coalescing.component';
import { MatButtonModule } from '@angular/material/button';
import { VisualizerModule } from '../../../shared/debug-helper/visualizer';
import { StrategySelectModule } from '../../../shared/debug-helper/strategy-select';

const DECLARATIONS = [
  CoalescingComponent
];

@NgModule({
  declarations: [DECLARATIONS],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    VisualizerModule,
    StrategySelectModule,
    UnpatchEventsModule,
    MatButtonModule,
    PushModule
  ],
  providers: [],
  exports: [DECLARATIONS]
})
export class CoalescingModule {
}
