import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPokemonPage } from './view-pokemon.page';

describe('ViewPokemonPage', () => {
  let component: ViewPokemonPage;
  let fixture: ComponentFixture<ViewPokemonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPokemonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
