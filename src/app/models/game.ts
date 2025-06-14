export class Game {

  private static currentId :number=1;
  public isViewed:boolean = false;
  public id: number;

  constructor(public name: string,
              public shortMessage:string,
              public imagePath: string,
              public companyName:string,
              public pegi:number,
              public country:string,
              public companyDetails:string,
              public title:string,
              public text_conclusion:string,
              public rate:number,
              public timeSpent:number=10,
              public status:GamesStatus = GamesStatus.Completed,
              public kind:string="Action",
              public completionDate:Date = new Date())
  {
    this.id = Game.currentId++;
    console.log("this.id",this.id);
    console.log("this.id",typeof(this.id));
  }

}

export enum GamesStatus {
  Completed,
  CurrentlyPlaying,
  ToWrite
}
