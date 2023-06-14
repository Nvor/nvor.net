import { Component, OnInit } from '@angular/core';
import { MessageUiService } from 'src/app/core/services/message-ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private readonly interactMsg: string = "You clicked on the face button!";
  private readonly tagsMsg: string = "You clicked on the tags";

  constructor(private messageUiService: MessageUiService) { }

  ngOnInit() {
  }

  onInteract() {
    this.messageUiService.pushMessage(this.interactMsg);
  }

  onTagClick() {
    this.messageUiService.pushMessage(this.tagsMsg);
  }

}
