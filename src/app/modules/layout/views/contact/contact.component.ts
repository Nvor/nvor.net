import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  sendResponse: string;
  showResponse: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [0, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }

  onSend(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log(form.value.name)
    console.log(form.value.email)
    console.log(form.value.message)
    
    this.sendResponse = 'I told you, I disabled this form!'
    this.showResponse = true;
    this.timeResponseRemoval();

    // this.contactService.PostEmail(form.value)
    //   .subscribe(response => {
    //     console.log(response)
    //   }, error => {
    //     console.warn(error.responseText),
    //     console.log({ error })
    //   })
  }

  timeResponseRemoval() {
    setTimeout(
      () => {
        this.showResponse = false;
      }, 2000
    )
  }

  clearForm() {
    this.contactForm.reset();
  }


}
