import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MessageComponentModule } from '../message/message.module';
import { PokecardComponentModule } from '../pokecard/pokecard.module';
import { HomePage } from './home.page';
describe('HomePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [IonicModule.forRoot(), MessageComponentModule, PokecardComponentModule, RouterModule.forRoot([])]
        }).compileComponents();
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=home.page.spec.js.map