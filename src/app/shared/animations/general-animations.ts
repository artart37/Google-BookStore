import { animate, style, transition, trigger } from '@angular/animations';

export const smoothappearance = trigger('smoothappearance', [
  transition(':enter', [style({ opacity: 0 }), animate('0.2s')]),
]);
