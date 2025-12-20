import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  // Use the port from your Visual Studio (likely 7086)
  private apiUrl = 'https://localhost:7086/api/crew'; 

  constructor(private http: HttpClient) { }

  // Get all crew members from C#
  getCrewMembers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get one specific person by ID from C#
  getCrewMember(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

// Add these to your CrewService class
updateCrewMember(id: number, data: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, data);
}

deleteCrewMember(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

}