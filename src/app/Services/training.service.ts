import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../Models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  path:string="http://localhost:25736/Training"

  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Training[]> 
  {
    return this._client.get<Training[]>(this.path+'/Training_GetAll') ;
 }
 public Add(item:Training):Observable<string>
{
  return this._client.post<string>(this.path+'/Training_Add',item);

}
}
