import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PokecardComponent } from './pokecard.component';
describe('PokecardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokecardComponent],
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
//# sourceMappingURL=pokecard.component.spec.js.map