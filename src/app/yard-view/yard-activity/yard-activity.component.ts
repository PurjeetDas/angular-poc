import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms'
import {SelectItem} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-yard-activity',
  templateUrl: './yard-activity.component.html',
  styleUrls: ['./yard-activity.component.css']
})
export class YardActivityComponent implements OnInit {

  @Input() defaultContainer: string;
  @Input() containers: SelectItem[];
  @Input() defaultFromLocation: string;
  @Output() submitForm = new EventEmitter<any>();
  @Output() cancelForm = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
    
    this.form = this.fb.group({
      container: [this.defaultContainer, Validators.required],
      tolocation: [null,Validators.required]
    });
  }

  submit() {
    console.log(this.form.value);
    //this.submitForm.emit(this.form.value);
    var formData: any = new FormData();
    formData.append("container", this.form.get('container').value);
    formData.append("tolocation", this.form.get('tolocation').value);

     this.http.post('http://localhost:4000/api/create-wororder', formData).subscribe(
     (response) => console.log(response),
     (error) => console.log(error)
    )

  }

  cancel() {
    this.cancelForm.emit();
  }
  

}
