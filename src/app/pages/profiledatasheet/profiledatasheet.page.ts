import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import firebase from 'firebase';

@Component({
  selector: 'app-profiledatasheet',
  templateUrl: './profiledatasheet.page.html',
  styleUrls: ['./profiledatasheet.page.scss'],
})
export class ProfiledatasheetPage implements OnInit {

  name = '';
  age = '';
  sobrietyDate= '';
  phaseDWI= '';
  Occupation= '';
  Employeer= '';
  job= '';
  probationKnow =false;
  supportiveJob= '';
  status= '';
  nameSpouse= '';
  children = []
  liveswithyou= '';
  treatmeant = false;
  phaseTreatmeant = '';
  soberGroup= '';
  sponsorAA =false;
  steps =false;  
  otherpartDWI= '';
  otherIncentive= '';
  othersourceStress= '';  
  funThings= '';  
  mostSupportPerson= '';  
  driverLicenceSuspend= '';
  occupationalDL= '';

  DWICourtProgram = [
    {name:'My Case Manager',isChecked: false},
    {name:'My Treatment',isChecked: false},
    {name:'Sheriff´s Visits',isChecked: false},
    {name:'AA/Sober Group Support',isChecked: false},
    {name:'My Judge / Team',isChecked: false},
    {name:'Drug/ Alc Testing',isChecked: false},
    {name:'Receiving Incentives',isChecked: false},
    {name:'Fear of Punishment',isChecked: false},
    {name:'Accountability',isChecked: false},
    {name:'Avoiding Jail',isChecked: false},
    {name:'Interlock Device',isChecked: false},
    {name:'Support of Other Clients',isChecked: false},
    {name:'Other',isChecked: false}
  ]

  favoriteIncentive = [
    {name:'Fish Bowl',isChecked: false},
    {name:'Gift Card',isChecked: false},
    {name:'Bus Passes',isChecked: false},
    {name:'Community Service Voucher',isChecked: false},
    {name:'Report by Skype',isChecked: false},
    {name:'Candy, treats',isChecked: false},
    {name:'Spin the Wheel',isChecked: false},
    {name:'Certificates (Sobriety, etc.)',isChecked: false},
    {name:'Praise, positive feedback',isChecked: false},
    {name:'Other',isChecked: false}
  ]

  sourceStress = [
    {name:'Financial',isChecked: false},
    {name:'Family / Relationships',isChecked: false},
    {name:'Program Demands',isChecked: false},
    {name:'Transportation',isChecked: false},
    {name:'Health issues',isChecked: false},
    {name:'Work / Employment',isChecked: false},
    {name:'Other',isChecked: false},
  ];

  detectionDevice = [
    {name:'Portable or handheld',isChecked: false},
    {name:'Interlock on Vehicle',isChecked: false},
    {name:'SCRAM',isChecked: false},
    {name:'Drug patch',isChecked: false},
  ];


  profileDS;

  ver= false;
  user;

  done = false;
  appkey;
  





  
  constructor(
    public profileSVC: ProfileService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getProfileDS()
  }


  initProfileDS(){
   
  }


  addChildren(){
    let children = {
      name: '',
      age: ''

    }

    this.children.push(children)
  }

  addprofileDS(){

    

      this.profileDS = {

        name : this.name,
        age : this.age,
        sobrietyDate : this.sobrietyDate,
        phaseDWI : this.phaseDWI,
        Occupation : this.Occupation,
        Employeer : this.Employeer,
        job : this.job,
        probationKnow : this.probationKnow,
        supportiveJob : this.supportiveJob,
        status : this.status,
        nameSpouse : this.nameSpouse,
        children  : this.children ,
        liveswithyou : this.liveswithyou,
        treatmeant : this.treatmeant,
        phaseTreatmeant : this.phaseTreatmeant,
        soberGroup : this.soberGroup,
        sponsorAA : this.sponsorAA,
        steps : this.steps,
        otherpartDWI : this.otherpartDWI,
        otherIncentive : this.otherIncentive,
        othersourceStress : this.othersourceStress,
        funThings : this.funThings,
        mostSupportPerson : this.mostSupportPerson,
        driverLicenceSuspend : this.driverLicenceSuspend,
        occupationalDL : this.occupationalDL,
        DWICourtProgram: this.DWICourtProgram,
        favoriteIncentive: this.favoriteIncentive,
        sourceStress: this.sourceStress,
        detectionDevice: this.detectionDevice,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
        user: this.user.uid,
        done: true
  
      }
  
      //this.ver = true;
  
      this.profileSVC.addProfileDS(this.profileDS)


    

   



   



  }
  editprofileDS(){



      this.profileDS = {

        name : this.name,
        age : this.age,
        sobrietyDate : this.sobrietyDate,
        phaseDWI : this.phaseDWI,
        Occupation : this.Occupation,
        Employeer : this.Employeer,
        job : this.job,
        probationKnow : this.probationKnow,
        supportiveJob : this.supportiveJob,
        status : this.status,
        nameSpouse : this.nameSpouse,
        children  : this.children ,
        liveswithyou : this.liveswithyou,
        treatmeant : this.treatmeant,
        phaseTreatmeant : this.phaseTreatmeant,
        soberGroup : this.soberGroup,
        sponsorAA : this.sponsorAA,
        steps : this.steps,
        otherpartDWI : this.otherpartDWI,
        otherIncentive : this.otherIncentive,
        othersourceStress : this.othersourceStress,
        funThings : this.funThings,
        mostSupportPerson : this.mostSupportPerson,
        driverLicenceSuspend : this.driverLicenceSuspend,
        occupationalDL : this.occupationalDL,
        DWICourtProgram: this.DWICourtProgram,
        favoriteIncentive: this.favoriteIncentive,
        sourceStress: this.sourceStress,
        detectionDevice: this.detectionDevice,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
        user: this.user.uid,
        done: true,
        appkey:this.appkey
  
      }
  
      //this.ver = true;
  
      this.profileSVC.editProfileDS(this.profileDS)

    

   



   



  }


  getProfileDS(){
    this.profileSVC.getProfileDS(this.user.uid).once('value').then(resp=>{
      

        resp.forEach(r=>{
          
          this.profileDS = r.val()
          this.profileDS.appkey = r.key
          this.ver = true;
  
          this.name = this.profileDS.name,
          this.age = this.profileDS.age,
          this.sobrietyDate = this.profileDS.sobrietyDate,
          this.phaseDWI = this.profileDS.phaseDWI,
          this.Occupation = this.profileDS.Occupation,
          this.Employeer = this.profileDS.Employeer,
          this.job = this.profileDS.job,
          this.probationKnow = this.profileDS.probationKnow,
          this.supportiveJob = this.profileDS.supportiveJob,
          this.status = this.profileDS.status,
          this.nameSpouse = this.profileDS.nameSpouse,
          this.children  = this.profileDS.children ,
          this.liveswithyou = this.profileDS.liveswithyou,
          this.treatmeant = this.profileDS.treatmeant,
          this.phaseTreatmeant = this.profileDS.phaseTreatmeant,
          this.soberGroup = this.profileDS.soberGroup,
          this.sponsorAA = this.profileDS.sponsorAA,
          this.steps = this.profileDS.steps,
          this.otherpartDWI = this.profileDS.otherpartDWI,
          this.otherIncentive = this.profileDS.otherIncentive,
          this.othersourceStress = this.profileDS.othersourceStress,
          this.funThings = this.profileDS.funThings,
          this.mostSupportPerson = this.profileDS.mostSupportPerson,
          this.driverLicenceSuspend = this.profileDS.driverLicenceSuspend,
          this.occupationalDL = this.profileDS.occupationalDL,
          this.DWICourtProgram= this.profileDS.DWICourtProgram,
          this.favoriteIncentive= this.profileDS.favoriteIncentive,
          this.sourceStress= this.profileDS.sourceStress,
          this.detectionDevice= this.profileDS.detectionDevice,
          this.done = this.profileDS.done
          this.appkey = this.profileDS.appkey
          
        })
        


      
    })
  }

}
