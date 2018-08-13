import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotHttpService {
  public allBooksOfGot;
  public allCharactersOfGot;
  public allHousesOfGot;
  public allInfo;
  public baseUrl = 'https://anapioficeandfire.com/api/';

  constructor(private _httpClient:HttpClient) {
    console.log("got-http service constructor is called")
   }

   private errorHandler(err:HttpErrorResponse){
     console.log(err.message)
     return Observable.throw(err.message)
   }

   public getAllBooksOfGot():any{
     let booksOfGot = this._httpClient.get(this.baseUrl + '/books')
     console.log(booksOfGot);
     return booksOfGot
   }

   public getAllCharactersOfGot():any{
     let CharactersOfGot = this._httpClient.get(this.baseUrl+ '/characters')
     console.log(CharactersOfGot)
     return CharactersOfGot
   }

   public getAllHousesOfGot():any{
     let housesOfGot = this._httpClient.get(this.baseUrl+ '/houses')
     console.log(housesOfGot)
     return housesOfGot
   }

   public getSingleBookInfo(bookId):any{
     let bookInfo = this._httpClient.get(this.baseUrl + '/books'+ '/'+ bookId);
     console.log(bookInfo)
     return bookInfo
      
   }

   public getSingleCharacterInfo(characterId):any{
    let characterInfo = this._httpClient.get(this.baseUrl + '/characters'+ '/'+ characterId);
    console.log(characterInfo)
    return characterInfo

   }

   public getSingleHouseInfo(houseId):any{
    let houseInfo = this._httpClient.get(this.baseUrl + '/houses'+ '/'+ houseId);
    console.log(houseInfo)
    return houseInfo

   }
}
