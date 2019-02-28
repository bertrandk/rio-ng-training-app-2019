import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../models/profile.dto';

const BASE_URL = `https://rio-ng-training.now.sh/profile`;

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  constructor(private httpClient: HttpClient) {}
  get() {
    return this.httpClient.get<Profile>(`${BASE_URL}`);
  }
  put(profile: Profile) {
    return this.httpClient.put<Profile>(`${BASE_URL}`, profile);
  }
}
