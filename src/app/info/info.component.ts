import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { GotHttpService } from '../got-http.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  public currentBook = null;
  public currentCharacter;
  public currentHouse;

  constructor(private _route:ActivatedRoute,private router:Router, private gotHttpService:GotHttpService) { }

  ngOnInit() {

   

    let bookId = this._route.snapshot.paramMap.get('bookId')
    this.gotHttpService.getSingleBookInfo(bookId).subscribe(
      data =>{
        console.log("ngoninti books info called")
        console.log(data)
        this.currentBook = data;
        console.log(this.currentBook)
        for(let item in this.currentBook){
          if(this.currentBook[item]==""){
            this.currentBook[item]="N/A"
          }
        }
      },
      error=>{
        console.log("error occured")
        console.log(error.errorMessage)
      }
    );
    console.log(this.currentBook)

    let characterId = this._route.snapshot.paramMap.get('characterId')
    this.gotHttpService.getSingleCharacterInfo(characterId).subscribe(
      data =>{
        console.log("ngoninti characters info called")
        console.log(data)
        this.currentCharacter = data;
        for(let item in this.currentCharacter){
          if(this.currentCharacter[item]==""){
            this.currentCharacter[item]="N/A"
          }
        }
      },
      error=>{
        console.log("error occured")
        console.log(error.errorMessage)
      }
    );

    let houseId = this._route.snapshot.paramMap.get('houseId')
    this.gotHttpService.getSingleHouseInfo(houseId).subscribe(
      data =>{
        console.log("ngoninti houses info called")
        console.log(data)
        this.currentHouse = data;
        for(let item in this.currentHouse){
          if(this.currentHouse[item]==""){
            this.currentHouse[item]="N/A"
          }
        }
      },
      error=>{
        console.log("error occured")
        console.log(error.errorMessage)
      }
    );
  }

}
