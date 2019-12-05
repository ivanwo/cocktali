import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = 9973533;

@Injectable({
  providedIn: "root"
})
export class CocktailAPIService {
  constructor(private http: HttpClient) {}

  searchByName(searchTerm: string): Observable<any> {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v2/${API_KEY}/search.php?`,
      {
        params: {
          s: searchTerm
        }
      }
    );
  }
  searchByCategory(searchTerm: string): Observable<any> {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v2/${API_KEY}/search.php?`,
      {
        params: {
          c: searchTerm
        }
      }
    );
  }
  searchByIngredient(searchTerm: string): Observable<any> {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v2/${API_KEY}/search.php?`,
      {
        params: {
          i: searchTerm
        }
      }
    );
  }
}
