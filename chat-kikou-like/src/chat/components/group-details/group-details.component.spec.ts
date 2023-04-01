import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupDetailsComponent, Profile } from './group-details.component';

describe('GroupDetailsComponent', () => {
  let component: GroupDetailsComponent;
  let fixture: ComponentFixture<GroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 profiles', () => {
    expect(component.profiles.length).toEqual(5);
  });

  it('should execute onOptionClick and call the corresponding function', () => {
    const profile: Profile = {
      id: 1,
      imageUrl: 'https://example.com/image.png',
      name: 'Test Profile',
      showMenu: false,
    };

    spyOn(component, 'whisper');
    spyOn(component, 'invite');
    spyOn(component, 'block');

    component.onOptionClick(profile, 'whisper');
    expect(component.whisper).toHaveBeenCalledWith(profile);

    component.onOptionClick(profile, 'invite');
    expect(component.invite).toHaveBeenCalledWith(profile);

    component.onOptionClick(profile, 'block');
    expect(component.block).toHaveBeenCalledWith(profile);
  });
});
