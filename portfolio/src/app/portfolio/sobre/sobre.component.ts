import { Component, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';



@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreComponent {
  
[x: string]: any;

  options: AnimationOptions = {    
    path: '/assets/imagens/programando-2.json',
    autoplay: true,
    loop: true,
  }; 

  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }



    

}
