import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancohorasComponent } from './bancohoras.component';

describe('BancohorasComponent', () => {
  let component: BancohorasComponent;
  let fixture: ComponentFixture<BancohorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancohorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancohorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
