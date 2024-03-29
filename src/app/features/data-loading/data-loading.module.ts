import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrewPunkModule } from '@shared/brew-punk';
import {
  RequestInComponentContainer,
  RequestInComponentWithPathParamsContainer,
  RequestInComponentWithPathParamsSnapshotContainer,
  RequestInComponentWithQueryContainer,
  RequestInComponentWithQuerySnapshotContainer,
  RequestInResolverContainer,
  RequestInResolverSnapshotContainer,
  RequestInResolverWithPathParamsContainer,
  RequestInResolverWithPathParamsSnapshotContainer,
  RequestInResolverWithQueryContainer,
  RequestWithPathAndQueryContainer,
} from './containers';

const CONTAINERS = [
  RequestInComponentContainer,
  RequestInComponentWithPathParamsContainer,
  RequestInComponentWithPathParamsSnapshotContainer,
  RequestInComponentWithQueryContainer,
  RequestInComponentWithQuerySnapshotContainer,
  RequestInResolverContainer,
  RequestInResolverSnapshotContainer,
  RequestInResolverWithPathParamsContainer,
  RequestInResolverWithPathParamsSnapshotContainer,
  RequestInResolverWithQueryContainer,
  RequestWithPathAndQueryContainer,
];

@NgModule({
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS],
  imports: [CommonModule, RouterModule, BrewPunkModule],
})
export class DataLoadingModule {}
