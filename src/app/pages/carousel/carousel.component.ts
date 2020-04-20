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
  public obj;
  constructor(private marketService: MarketService) {}

  ngOnInit(): void {
    this.getDivisa();
  }

  getDivisa() {
    this.marketService.getCoins().subscribe((resp) => {
      let i;
      this.obj = resp["data"];

      for (i = 0; i <= this.obj.length; i++) {
        if (this.obj[i].s == "EURBUSD") {
          this.euro = this.obj[i].h;
        }

        if (this.obj[i].s == "BTCBUSD") {
          this.btc = this.obj[i].h;
        }

        if (this.obj[i].s == "ETHBUSD") {
          this.eth = this.obj[i].h;
        }

        if (this.obj[i].s == "DASHBUSD") {
          this.dash = this.obj[i].h;
        }
      }
    });
  }
}
