import { Component, OnInit } from "@angular/core";
import { MarketService } from "../../services/market.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  public euro;
  public ves = 0.000008;
  public ptr = 60;
  public btc;
  public eth;
  public dash;
  constructor(private marketService: MarketService) {}

  ngOnInit(): void {
    this.getDivisa();
  }

  getDivisa() {
    this.marketService.getCoins().subscribe((resp) => {
      let i;
      // for (i = 0; i <= resp.data.length; i++) {
      //   if (resp.data[i].s == "EURBUSD") {
      //     this.euro = resp.data[i].h;
      //   }

      //   if (resp.data[i].s == "BTCBUSD") {
      //     this.btc = resp.data[i].h;
      //   }

      //   if (resp.data[i].s == "ETHBUSD") {
      //     this.eth = resp.data[i].h;
      //   }

      //   if (resp.data[i].s == "DASHBUSD") {
      //     this.dash = resp.data[i].h;
      //   }
      // }
    });
  }
}
