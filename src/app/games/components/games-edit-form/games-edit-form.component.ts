import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-games-edit-form',
  templateUrl: './games-edit-form.component.html',
  styleUrls: ['./games-edit-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesEditFormComponent implements OnInit {
  @Input() game: any;
  constructor() {}

  ngOnInit() {}
}
