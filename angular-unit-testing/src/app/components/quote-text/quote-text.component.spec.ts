import { async, TestBed } from '@angular/core/testing';

import { QuoteTextComponent } from './quote-text.component';

describe('QuoteTextComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteTextComponent]
    })
      .compileComponents();
  }));

  it(`should render @input`, async(() => {
    const fixture = TestBed.createComponent(QuoteTextComponent);
    const app = fixture.debugElement.componentInstance;
    app.text = 'test quote';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('q').innerText).toEqual('test quote');
  }));
});
