import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService){}
  ngOnInit():void{

    this.getAppointments();
  }
  getAppointments(){

    this.appointmentService.getAllAppointmets().subscribe(data=>{

      this.appointments=data;
      
    })

  }
}
