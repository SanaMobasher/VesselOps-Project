import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Merged imports
import { CrewService } from '../crew';
// ... other imports ...
import { RouterLink } from '@angular/router'; // 1. Add this import

@Component({
  selector: 'app-crew-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './crew-profile.html',
  styleUrl: './crew-profile.scss'
})

export class CrewProfileComponent implements OnInit {
  crewMember: any = null; 
  isEditMode = false;

  constructor(
    private crewService: CrewService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // 1. STARTER: Fetch data when the page opens
 ngOnInit(): void {
  // We "Subscribe" to the parameters. 
  // This means every time the ID in the URL changes, this code runs again!
  this.route.paramMap.subscribe(params => {
    const idString = params.get('id');
    const id = Number(idString);

    if (id) {
      this.crewMember = null; // Show the loading spinner while switching
      this.crewService.getCrewMember(id).subscribe({
        next: (data) => {
          this.crewMember = data;
          console.log('Switched to ID:', id);
        },
        error: (err) => console.error('API Error:', err)
      });
    }
  });
}

  // 2. EDIT TOGGLE: Switch between View and Edit mode
  onEdit(): void {
    this.isEditMode = !this.isEditMode;
  }

  // 3. SAVE: Send updated data to SQL Server
  onSave(): void {
    this.crewService.updateCrewMember(this.crewMember.id, this.crewMember).subscribe({
      next: () => {
        alert('Changes saved to SQL Server!');
        this.isEditMode = false;
      },
      error: (err) => {
        console.error('Update failed', err);
        alert('Error saving changes. Check console.');
      }
    });
  }

  // 4. ARCHIVE: Delete the record from SQL Server
  onArchive(): void {
  if (confirm(`Are you sure?`)) {
    this.crewService.deleteCrewMember(this.crewMember.id).subscribe({
      next: () => {
        alert('Deleted!');
        // This is the "Automatic Redirection"
        this.router.navigate(['/seafarers/list']); 
      }
    });
  }
}
}