import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
import { Category } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  // load all the categories
  public categories() {
    return this.http.get(`${baseurl}/category`);
  }
  
  // add new category 
  public addCategory(category: Category) {
    return this.http.post(`${baseurl}/category`, category);
  }

}
