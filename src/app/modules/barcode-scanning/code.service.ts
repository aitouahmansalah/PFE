import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  scoreEmitter = new Subject<number>();
  score = 0;

  constructor(private router:Router) { }

  find(barcode: string): void {
    console.log("test")
    this.router.navigate(['product-details/',barcode]);
  }
  add(barcode: string){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.0.138:3000/find/" + barcode);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const status = response.status;
          console.log("Response status:", status);
          if (status === 1) {
            this.score++; // Increment score
            console.log("Score incremented. New score:", this.score);
            this.scoreEmitter.next(this.score); // Push updated score
          }
        } else {
          console.error("Error occurred:", xhr.status);
        }
      }
    };
    xhr.send();
  }
}
