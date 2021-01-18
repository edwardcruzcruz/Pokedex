import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokecardComponent } from './pokecard.component';

describe('PokecardComponent', () => {
  let component: PokecardComponent;
  let fixture: ComponentFixture<PokecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokecardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
