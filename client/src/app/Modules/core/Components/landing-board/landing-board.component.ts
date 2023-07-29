import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-landing-board',
  templateUrl: './landing-board.component.html',
  styleUrls: ['./landing-board.component.css'],
})
export class LandingBoardComponent {
  @ViewChild('board') board!: ElementRef;
  @Input() data!: ILandingBoard;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.board.nativeElement,
      'background',
      this.data.background_color
    );
  }

  isReversed(data: boolean, class1: string, class2: string) {
    return data ? class2 : class1;
  }
}

export interface ILandingBoard {
  title: string;
  info_one: string;
  info_two: string;
  link: string;
  image: string;
  board_reversed: boolean;
  background_color: string;
}
