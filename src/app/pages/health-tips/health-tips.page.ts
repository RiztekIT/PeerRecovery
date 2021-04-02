import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-health-tips",
  templateUrl: "./health-tips.page.html",
  styleUrls: ["./health-tips.page.scss"],
})
export class HealthTipsPage implements OnInit {
  tips: any = [
    {
      img: "../../../assets/imgs/data/tips/tipsNo1.png",
      tipsTitle: "Heart Health Tips: How can you improve your heart health?",
      tipsBy: "Financial Express-09-Oct-2019",
      tipsText:
        "A healthy heart is the key to avoiding cardiovascular issues and the first step in this",
    },
    {
      img: "../../../assets/imgs/data/tips/tipsNo2.png",
      tipsTitle:
        "Skin Care Tips: With Pollution Levels So High Preserve Your Skin Health",
      tipsBy: "NDTV-03-Nov-2019",
      tipsText:
        "Here are some tips to control the adverse effect of air pollution on skin. Follow these...",
    },
    {
      img: "../../../assets/imgs/data/tips/tipsNo3.png",
      tipsTitle: "Ayurveda for prostate: Simple tips that can safeguard you",
      tipsBy: "Times of India-18 hours ago",
      tipsText:
        "Very few men think about the health of their prostate - the gland that sits right underneath",
    },
    {
      img: "../../../assets/imgs/data/tips/tipsNo4.png",
      tipsTitle:
        "Skincare tips to beat Diwali pollution: Doctors tell you how to ...",
      tipsBy: "India Today-31-Oct-2019",
      tipsText:
        "To get rid of these dead skin cells for a healthy-looking skin, use a peel-off mask...",
    },
    {
      img: "../../../assets/imgs/data/tips/tipsNo1.png",
      tipsTitle:
        "Liz Earle's menopause diet with tips and tricks to help your ...",
      tipsBy: "Mirror.co.uk-03-Nov-2019",
      tipsText:
        "And for every woman – even those lucky enough to have minimal symptoms...",
    },
  ];
  constructor(private util: UtilService) {}

  ngOnInit() {}

  goToViewTips() {}
}
