import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http:HttpClient)
{

}

regsave(data)
{
  return this.http.post("http://localhost:8014/final_servlet_project/regservlet",data);
}

regview()
{
  return this.http.get("http://localhost:8014/final_servlet_project/regviewservlet")
}

viewproduct()
{
  return this.http.get("http://localhost:8014/final_servlet_project/viewproductservlet");
}

addproduct(data)
{
  return this.http.post("http://localhost:8014/final_servlet_project/addproductservlet",data);
}

deleteproduct(obj)
{
  return this.http.post("http://localhost:8014/final_servlet_project/deleteproductservlet",obj)
}

updateproduct(data)
{
  return this.http.post("http://localhost:8014/final_servlet_project/updateproductservlet",data)
}
orderedproduct(obj)
{
  return this.http.post("http://localhost:8014/final_servlet_project/orderedproductservlet",obj)
}
viewpurchase()
{
  return this.http.get("http://localhost:8014/final_servlet_project/viewpurchaseservlet");
}

deletepurchase(obj)
{
  return this.http.post("http://localhost:8014/final_servlet_project/deletepurchaseservlet",obj);
}

deleteuseractivity()
{
  return this.http.get("http://localhost:8014/final_servlet_project/useractivitydeleteservlet");
}

updatequantity(obj)
{
  return this.http.post("http://localhost:8014/final_servlet_project/updatequantityservlet",obj)
}
}
