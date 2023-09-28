// export class Todo {
//   id: number ;
//   content: string ;
//   isCompleted: boolean ;
//
//   constructor(id: number, content: string) {
//     this.id = id;
//     this.content = content;
//     this.isCompleted = false;
//   }
// }

export class Todo {
  constructor(public id: number,
              public content: string,
              public isCompleted: boolean = false
  ) {
  }
}
