/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NewCmpComponent } from './new-cmp.component';

describe('Component: NewCmp', () => {
  it('should create an instance', () => {
    let component = new NewCmpComponent();
    expect(component).toBeTruthy();
  });
});
