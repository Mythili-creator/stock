import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserAuthService {
  private authenticationApiUrl = "http://localhost:8087/authentication-service/authenticate";
  token: string;
  role: string;
  constructor(private httpClient: HttpClient) {}

  authenticate(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ":" + password);
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Basic " + credentials);
    return this.httpClient.get(this.authenticationApiUrl, { headers });
  }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }
  public setRole(role: string) {
    this.role = role;
  }
  public getRole() {
    return this.role;
  }
}
