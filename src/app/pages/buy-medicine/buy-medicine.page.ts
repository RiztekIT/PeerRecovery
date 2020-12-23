import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buy-medicine",
  templateUrl: "./buy-medicine.page.html",
  styleUrls: ["./buy-medicine.page.scss"],
})
export class BuyMedicinePage implements OnInit {
  medicine: any = [
    {
      name: "Abilify",
      checked: false,
    },
    {
      name: "Cyanocobalamin",
      checked: false,
    },
    {
      name: "Acetaminophen",
      checked: false,
    },
    {
      name: "Demerol",
      checked: true,
    },
    {
      name: "Acyclovir",
      checked: false,
    },
    {
      name: "Depakote",
      checked: false,
    },
    {
      name: "Alprazolam",
      checked: false,
    },
    {
      name: "Diclofenac",
      checked: true,
    },
    {
      name: "Amoxicillin",
      checked: false,
    },
    {
      name: "Dicyclomine",
      checked: false,
    },
    {
      name: "Anastrozole",
      checked: false,
    },
    {
      name: "Doxycycline",
      checked: false,
    },
    {
      name: "Apixaban",
      checked: false,
    },
    {
      name: "Ecotrin",
      checked: false,
    },
    {
      name: "Aspirin",
      checked: false,
    },
    {
      name: "Elavil",
      checked: false,
    },
    {
      name: "Abaloparatide",
      checked: false,
    },
    {
      name: "Estradiol",
      checked: false,
    },
    {
      name: "Abatron",
      checked: false,
    },
    {
      name: "Ezetimibe",
      checked: false,
    },
    {
      name: "Abelcet",
      checked: false,
    },
    {
      name: "Fluconazole",
      checked: true,
    },
    {
      name: "Bacitracin",
      checked: false,
    },
    {
      name: "Focalin",
      checked: false,
    },
    {
      name: "Belbuca",
      checked: true,
    },
    {
      name: "Fosamax",
      checked: false,
    },
    {
      name: "Benicar",
      checked: false,
    },
    {
      name: "Gabapentin",
      checked: false,
    },
    {
      name: "Biaxin",
      checked: false,
    },
    {
      name: "Gaviscon ",
      checked: false,
    },
    {
      name: "Biotin",
      checked: false,
    },
    {
      name: "Glucosamine",
      checked: false,
    },
    {
      name: "Calcium carbonate",
      checked: false,
    },
    {
      name: "Griseofulvin",
      checked: false,
    },
    {
      name: "Cardizem",
      checked: false,
    },
    {
      name: "Hydrocodone",
      checked: false,
    },
    {
      name: "Clonidine",
      checked: false,
    },
    {
      name: "Hydroxyzine",
      checked: false,
    },
  ];
  constructor(private util: UtilService) {}

  ngOnInit() {}

  goToCart() {}
}
