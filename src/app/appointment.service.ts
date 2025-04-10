import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8081/api/v3/appointments"

  getAllAppointmets():Observable<Appointment[]>{

    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
}

createAppointment(appointment:Appointment):Observable<Appointment>{

  return this.httpClient.post<Appointment>(`${this.baseUrl}`,appointment);
}

deleteAppointment(id:number):Observable<object>{

  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}
}
