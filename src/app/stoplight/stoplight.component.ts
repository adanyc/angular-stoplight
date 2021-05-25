import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: 'app-stoplight',
  templateUrl: 'stoplight.component.html',
  styleUrls: ['stoplight.component.scss']
})
export class StoplightComponent {
  @ViewChild('redLight') redLight: ElementRef<HTMLDivElement>;
  @ViewChild('orangeLight') orangeLight: ElementRef<HTMLDivElement>;
  @ViewChild('greenLight') greenLight: ElementRef<HTMLDivElement>;

  start() {
    let state = 0;

    setInterval(() => {
      switch (state) {
        case 0: {
          state = 1;
          this.greenLight.nativeElement.classList.remove('on');
          this.redLight.nativeElement.classList.add('on');
          break;
        }
        case 1: {
          state = 2;
          this.redLight.nativeElement.classList.remove('on');
          this.orangeLight.nativeElement.classList.add('on');
          break;
        }
        default: {
          state = 0;
          this.redLight.nativeElement.classList.remove('on');
          this.orangeLight.nativeElement.classList.remove('on');
          this.greenLight.nativeElement.classList.add('on');
        }
      }
    }, 2000);
  }
}
