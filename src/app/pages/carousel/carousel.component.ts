import { Component, OnInit } from "@angular/core";
import { MarketService } from "../../services/market.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  constructor(private marketService: MarketService) {}

  ngOnInit(): void {
    this.marketService.getCoins().subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
