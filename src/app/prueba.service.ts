import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PruebaService {

	public url: string;

	pokemon: any;

	constructor(private http: HttpClient) {
		this.url = "localhost:2000";
	}

	getUser() {
		this.http.get("https://pokeapi.co/api/v2/pokemon").subscribe((data) => {
			this.pokemon = data;
		});
	}
}
