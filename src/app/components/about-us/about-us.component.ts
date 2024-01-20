import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../../api/about-us.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {
  teamMembers: any = [];
  constructor(private teamService: AboutUsService) { }
  ngOnInit(): void {
    this.teamService.getTeamMembers().subscribe((data: any[]) => {
      this.teamMembers = data;
    });
  }
}