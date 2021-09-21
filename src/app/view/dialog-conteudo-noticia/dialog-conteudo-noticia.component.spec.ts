import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConteudoNoticiaComponent } from './dialog-conteudo-noticia.component';

describe('DialogConteudoNoticiaComponent', () => {
  let component: DialogConteudoNoticiaComponent;
  let fixture: ComponentFixture<DialogConteudoNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConteudoNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConteudoNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
