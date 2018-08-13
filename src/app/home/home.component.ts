import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBooksOfGot = [];
  public allCharactersOfGot = [];
  public allHousesOfGot = [];
  public allInfo:any =[];
  errorMessage:any;

  constructor(private gotHttpService:GotHttpService) {
    console.log("Home component constructor called")
   }

  ngOnInit() {
    //for all the books info of Game of thrones

    this.allBooksOfGot = this.gotHttpService.getAllBooksOfGot().subscribe(
      
      data=> {
        console.log("books info ngonint")
        console.log(data)
        this.allBooksOfGot = data;
       this.allBooksOfGot.sort((a,b)=>a.name.localeCompare(b.name));
        this.allInfo = this.allInfo.concat(this.allBooksOfGot);
        console.log("All Books Info:" + this.allInfo)
      },
      error=>{
        console.log("error occured")
        console.log(error.errorMessage)
      }

    );


    this.allCharactersOfGot = this.gotHttpService.getAllCharactersOfGot().subscribe(

      data =>{
        console.log("characters info ngonint")
        console.log(data)
        this.allCharactersOfGot = data;
        this.allCharactersOfGot.sort((a,b)=>a.name.localeCompare(b.name));
        this.allInfo = this.allInfo.concat(this.allCharactersOfGot);
        console.log("All characters info" + this.allInfo)
      },
      error=>{
        console.log("error occured")
        console.log(error.errorMessage)
      }
    );


    this.allHousesOfGot = this.gotHttpService.getAllHousesOfGot().subscribe(
      
      data =>{
        console.log("houses of ngoninit")
        console.log(data)
        this.allHousesOfGot = data;
        this.allHousesOfGot.sort((a,b)=>a.name.localeCompare(b.name));
        this.allInfo = this.allInfo.concat(this.allHousesOfGot);
        console.log("All houses info" + this.allInfo)
      },
      error=>{
        console.log("error occured")
        console.log(error.errorMessage)
      }
    )


  }

}
