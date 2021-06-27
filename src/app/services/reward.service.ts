import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  rewardSelected;

  constructor() { }

  addReward(reward){

    
    console.log(reward);

    let key = firebase.database().ref('Rewards/Rewards').push(reward).key
    firebase.database().ref('Rewards/Tasks/'+key).set(reward.task)
    firebase.database().ref('Rewards/Users/'+reward.user+'/'+key).set(reward)

  }


  getRewards(user){

    return firebase.database().ref('Rewards/Users/'+user)

  }

  editReward(reward){

    console.log(reward);

    firebase.database().ref('Rewards/Rewards/'+reward.rewardkey).set(reward)
    firebase.database().ref('Rewards/Tasks/'+reward.rewardkey).set(reward.task)
    firebase.database().ref('Rewards/Users/'+reward.user+'/'+reward.rewardkey).set(reward)



  }

  addTask(){

  }

  removeTask(reward){
    firebase.database().ref('Rewards/Rewards/'+reward.rewardkey+'/task').set(reward.task)
    firebase.database().ref('Rewards/Tasks/'+reward.rewardkey).set(reward.task)
    firebase.database().ref('Rewards/Users/'+reward.user+'/'+reward.rewardkey).set(reward)

  }

  edittask(reward,task,i){
    firebase.database().ref('Rewards/Rewards/'+reward.rewardkey+'/task/'+i).set(task)
    firebase.database().ref('Rewards/Tasks/'+reward.rewardkey+'/'+i).set(task)
    firebase.database().ref('Rewards/Users/'+reward.user+'/'+reward.rewardkey+'/task/'+i).set(task)
  }
}
