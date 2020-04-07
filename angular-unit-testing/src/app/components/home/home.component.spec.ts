import { async, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { QuoteTextComponent } from './../quote-text/quote-text.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, QuoteTextComponent]
    })
      .compileComponents();
  }));

  it(`should have as text 'home page'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.text).toEqual('home page');
  }));
});
