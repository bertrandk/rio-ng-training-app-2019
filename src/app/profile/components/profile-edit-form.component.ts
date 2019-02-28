import {
  Component,
  OnInit,
  Directive,
  forwardRef,
  AfterViewInit,
  DoCheck,
  ElementRef,
  Renderer2,
  HostListener,
  SkipSelf,
  Self,
  Host,
  ViewChild,
  Optional,
  Inject
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  Validator,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

export const CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CurrencyMaskDirective),
  multi: true
};

@Directive({
  selector: '[appCurrencyMask]',
  providers: [CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR, { provide: NG_VALIDATORS, useExisting: CurrencyMaskDirective, multi: true }],
  // tslint:disable-next-line: use-host-property-decorator
  host: {
    '(change)': 'onChange($event.target.value)',
    '(input)': 'onChange($event.target.value)',
    '(blur)': 'onTouched()'
  }
})
export class CurrencyMaskDirective implements AfterViewInit, ControlValueAccessor, DoCheck, OnInit, Validator {
  @ViewChild('input') myInput;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cp: CurrencyPipe) {}
  private rawValue: number;
  private displayValue: string;
  onChange = (_: any) => {};
  onTouched = () => {};
  writeValue(value: any): void {
    // value that gets written to the DOM / display
    this.displayValue = value == null ? '' : this.cp.transform(value);
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', this.displayValue);
  }
  registerOnChange(fn: any): void {
    this.onChange = value => {
      this.rawValue = value == '' ? null : parseFloat(value.replace(/[^0-9\.-]+/g, ''));
      // value that gets written to the model
      fn(this.rawValue);
    };
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = () => {
      this.writeValue(this.rawValue);
      fn();
    };
  }

  setDisabledState?(isDisabled: boolean): void {}
  ngDoCheck(): void {}
  ngOnInit(): void {}
  validate(control: AbstractControl): ValidationErrors {
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {}
  ngAfterViewInit(): void {
    console.log(this.myInput);
  }
}

function confirmFields(fieldA: string, fieldB: string) {
  return function compare(formGroup: FormGroup): Validators {
    const a = formGroup.get(fieldA).value;
    const b = formGroup.get(fieldB).value;
    return a === b
      ? null
      : {
          confirmFields: {
            message: `Expected fields ${fieldA} and ${fieldB} to match`,
            [fieldA]: a,
            [fieldB]: b
          }
        };
  };
}
@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group(
      {
        id: [],
        image: [],
        languageId: [],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        averageNumberOfHoursPerDay: [''],
        email: [],
        confirmEmail: []
      },
      {
        validators: confirmFields('email', 'confirmEmail')
      }
    );
    this.form.patchValue({ averageNumberOfHoursPerDay: 10000 });
    this.form.valueChanges.subscribe(n => {
      console.log('n is', n);
    });
  }
  public onSubmit() {
    console.log('proper');
  }
}
