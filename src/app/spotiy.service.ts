import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQA8hJ_LjhImaBwEhKqriKQGiyu-Jqu-ZGvZq94k06oGemhzVlKDjcb-1JCQDOEj6-DvNsQ9TGPaut1NKTK1LTsozL2-OdHej_vFzrQRK3dpueBeI73oZ8YaolKGsrftSPXq9kkEOMuUhQWM_XNqGwY1ZkmQUlPvtOH5LQPUKHzNWsYdw9Sp-nvBA_QSu0CNu8Px"
      );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) : any{
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
