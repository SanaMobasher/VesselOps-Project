import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CrewService } from '../crew'; 

@Component({
  selector: 'app-seafarers-list',
  standalone: true,
  imports: [CommonModule, RouterLink], // Ensure these are here
  templateUrl: './seafarers-list.html',
  styleUrl: './seafarers-list.scss'
})
export class SeafarersListComponent implements OnInit {
  crewList: any[] = [];
  isLoading = true; // Add a loading state

  constructor(private crewService: CrewService) { }

  ngOnInit(): void {
    this.crewService.getCrewMembers().subscribe({
      next: (data) => {
        this.crewList = data;
        this.isLoading = false;
        console.log('List loaded from SQL:', data);
      },
      error: (err) => {
        console.error('API Error:', err);
        this.isLoading = false;
      }
    });
  }
}