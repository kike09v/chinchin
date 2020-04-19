import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MarketService {
  private url =
    "https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products";

  constructor(private http: HttpClient) {}

  getCoins() {
    return this.http.get(this.url);
  }
}
