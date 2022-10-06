import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

const URL ='../assets/data/Bonsai_data.json';
@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(private http: HttpClient) {}
    getAll(){
        return this.http.get(URL);
    }
}