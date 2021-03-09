import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToJson } from "./modules/tojson.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  tj : ToJson;
  tj1 : ToJson[] = [];
  constructor(private http : HttpClient){}



  submit(txt: HTMLInputElement, nb: HTMLInputElement): void {

    if (!txt.value || !nb.value) {
      return;
    }
    this.tj1.push(new ToJson(new String(txt.value), new Number(nb.value)));
    console.log(this.tj1);
  }

}

