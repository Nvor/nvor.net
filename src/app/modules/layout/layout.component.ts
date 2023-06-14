import { Component, OnInit } from '@angular/core';
import { MessageUiService } from 'src/app/core/services/message-ui.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  message: string;
  timeoutId: any;

  constructor(private messageUiService: MessageUiService) { }

  ngOnInit() {
    this.subscribeToAlerts();
  }

  subscribeToAlerts() {
    this.messageUiService.getMessage().subscribe(msg => {
      clearTimeout(this.timeoutId);
      
      this.message = msg;
      this.timeoutId = setTimeout(() => {
        this.message = "";
      }, 2000)
    })
  }
}
