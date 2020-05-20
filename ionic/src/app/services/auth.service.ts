import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { serverUrl } from "../shared/constants";

const BASEURL = serverUrl + "/api/chatapp";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(private http: HttpClient) {}

    registerUser(body): Observable<any> {
        return this.http.post(`${BASEURL}/register`, body);
    }

    loginUser(body): Observable<any> {
        return this.http.post(`${BASEURL}/login`, body);
    }
}
