import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    URL ='http://localhost/PHP/';

    constructor(private http: HttpClient) {}
    mostrarTodos(){
        return this.http.get
        (`${this.URL}getall.php`);
    }

    eliminar(Id_Productos:any){
        return this.http.delete(`${this.URL}delete.php/Id_Productos=${Id_Productos}`);
      }
      agregar(Producto:any){
        return this.http.post(`${this.URL}post.php`, JSON.stringify(Producto));
      }
}