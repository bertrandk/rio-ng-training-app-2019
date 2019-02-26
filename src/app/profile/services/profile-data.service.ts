import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../models/profile.dto';

const BASE_URL = `https://rio-ng-training.now.sh/profile`;
/*
export interface Profile {
  id: number;
  image: string;
  languageId: number;
  firstName: string;
  lastName: string;
  averageNumberOfHoursPerDay: number;
  email: string;
}
*/
/*
const buildProfile = ({ id, image, languageId, firstName, lastName, averageNumberOfHoursPerDay, email }): Profile => ({
  id,
  image,
  languageId,
  firstName,
  lastName,
  averageNumberOfHoursPerDay,
  email
});*/
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
