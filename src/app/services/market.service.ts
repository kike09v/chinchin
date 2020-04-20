import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MarketService {
  private url = "/exchange-api/v1/public/asset-service/product/get-products";

  constructor(private http: HttpClient) {}

  getCoins() {
    return this.http.get(this.url);
  }
}
