import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
  export class TestComponent implements OnInit {
    form: FormGroup;
  
    constructor(public fb: FormBuilder, private http: HttpClient) {
      this.form = this.fb.group({
        name: [''],
        avatar: [null],
      });
    }
  
    ngOnInit() {}
  
    uploadFile(event) {
      
      const file = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({
        avatar: file.name,
        name:file
      });
      this.form.get('avatar').updateValueAndValidity();
      console.log(this.form.get('avatar').value +' Yazdı')
      console.log(file.name)
    }
  
    submitForm() {
      var formData: any = new FormData();
      formData.append('file', this.form.get('name').value);
      formData.append('imagePath', this.form.get('avatar').value);
      formData.append('productId','5')
      console.log( this.form.get('name').value+'asdasd')
  
      this.http.post('https://localhost:7119/api/ProductImage/add', formData).subscribe(
        (response) => console.log(response),
        (error) => {
          console.log(error.message);
        }
      );
    }
  }
