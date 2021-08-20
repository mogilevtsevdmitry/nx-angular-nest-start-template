import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBlockComponent } from './test-block/test-block.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule],
  declarations: [
    TestBlockComponent
  ],
  exports: [
    TestBlockComponent
  ]
})
export class UiComponentModule {}
