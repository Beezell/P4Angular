import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Account } from "../model/account.model";


@Injectable({
    providedIn: 'root'
})
export class AccountService{

    private apiUrl = "http://localhost:9999/api/account/";
    private apiGetAll = "all";
    private apiDelete = "delete/";

    constructor(private http: HttpClient){}

    getAccountsApi(){
        return this.http.get<Account[]>(this.apiUrl + this.apiGetAll)
    }

    deleteAccountApi(idAccount : Number){
        return this.http.delete<Account>(this.apiUrl + this.apiDelete + idAccount)
    }

}