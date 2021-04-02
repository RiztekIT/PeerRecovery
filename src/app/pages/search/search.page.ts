import { UtilService } from "./../../services/util.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { mapStyle } from "src/environments/environment";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
  @ViewChild("search", { static: true }) search;
  zoom: number = 13;
  lat: number = 52.3555;
  lng: number = -1.17432;
  styles = mapStyle;
  markers: any = [
    {
      img: "../../../assets/imgs/marker/marker1.png",
      select: true,
      isOpen: true,
      lat: 52.368315,
      lng: -1.187339,
    },
    {
      img: "../../../assets/imgs/marker/marker2.png",
      select: false,
      isOpen: true,
      lat: 52.361305,
      lng: -1.172887,
    },
    {
      img: "../../../assets/imgs/marker/marker3.png",
      select: false,
      isOpen: true,
      lat: 52.370883,
      lng: -1.150088,
    },
    {
      img: "../../../assets/imgs/marker/marker4.png",
      select: false,
      isOpen: false,
      lat: 52.373032,
      lng: -1.179442,
    },
    {
      img: "../../../assets/imgs/marker/marker5.png",
      select: false,
      isOpen: true,
      lat: 52.363808,
      lng: -1.158671,
    },
  ];
  constructor(private util: UtilService) {}

  ngOnInit() {}

  async onMarkerSelect(marker: any) {
    if (marker.isOpen) {
      await this.markers.forEach((element) => {
        element.select = false;
      });
      marker.select = await true;
    }
  }

  goToHospitalDetail() {}
}
