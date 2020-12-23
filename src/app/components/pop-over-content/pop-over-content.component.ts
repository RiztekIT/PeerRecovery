import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pop-over-content",
  templateUrl: "./pop-over-content.component.html",
  styleUrls: ["./pop-over-content.component.scss"],
})
export class PopOverContentComponent implements OnInit {
  constructor(private util: UtilService) {}

  ngOnInit() {}

  goToPrescription() {
    this.util.popoverCtrl.dismiss();
  }
}
