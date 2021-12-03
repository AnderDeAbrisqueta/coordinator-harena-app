import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdultosMayoresPagePage } from './adultos-mayores-page.page';

describe('AdultosMayoresPagePage', () => {
  let component: AdultosMayoresPagePage;
  let fixture: ComponentFixture<AdultosMayoresPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultosMayoresPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdultosMayoresPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
