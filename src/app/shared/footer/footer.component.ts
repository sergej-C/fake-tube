import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() clickCustom:EventEmitter<any> = new EventEmitter();
  isChangedTitle:boolean = false;
  label = ''

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.setTitle();
    this.clickCustom.emit({label_emit: this.label});
  }

  private setTitle(){
    this.isChangedTitle = !this.isChangedTitle;
    this.label = this.isChangedTitle ? 'title from footer to navbar' : 'gpitube';

  }

}
