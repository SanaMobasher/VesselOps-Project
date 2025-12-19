import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import this for Inputs

@Component({
  selector: 'app-crew-profile',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './crew-profile.html',
  styleUrl: './crew-profile.scss'
})
export class CrewProfileComponent {
  // Exact data from your description
  crewMember = {
    id: 288,
    fullName: 'Emma Ivankov',
    rank: 'Master',
    status: 'Available',
    email: 'operatovna709@gmail.com',
    phone: '+0502904800',
    whatsapp: '0502904800',
    skype: 'skype',
    age: 27,
    sex: 'Male', // Assumed Male based on name, corrected from prompt text if needed
    nationality: 'Argentinian',
    address: 'add, dnipro, American Samoa, 49123',
    airport: 'Kherson',
    
    // Right Panel Data
    availabilityDate: '2023-11-28',
    plan: '',
    minSalary: 20300,
    
    // Collections
    labels: [
      { name: 'crm', color: 'bg-danger' },
      { name: 'My label', color: 'bg-success' }
    ],
    
    notes: [
      { text: 'Lorem ipsum placeholder text', date: new Date('2024-02-09'), author: 'Admin Admin' },
      { text: 'Second note example', date: new Date('2024-02-09'), author: 'Admin Admin' },
      { text: 'Third note example', date: new Date('2024-02-09'), author: 'Admin Admin' }
    ],

    // Experience Data
    stats: {
      totalYears: 6.7,
      maxDwt: 123,
      maxGrt: 0,
      masterYears: 0,
      maxTeu: 765
    },
    rankExp: { seaman: 2.7, firstMate: 4 },
    vesselExp: { cruise: 2.7, bulk: 4 },

    meta: {
      createdBy: 'Seafarer',
      createdDate: new Date('2023-05-12T18:37:14'),
      updatedBy: 'Admin Admin',
      updatedDate: new Date('2024-02-09T10:51:25')
    }
  };
}