import { Component } from '@angular/core';
import { DbService } from '../../api/db.service';
import { User } from '../../../user';
import { text } from 'stream/consumers';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginHeadersService } from '../../api/login-headers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: any = '';
  password: any = '';
  user: User = new User("", "");
  users: any;
  constructor(private service: DbService, private router: Router, private snackBar: MatSnackBar,
    private loginHeaders: LoginHeadersService) { }
  // Set the hidden state of the buttons
  hideButtons() {
    this.loginHeaders.setButtonsHiddenState(true);
  }

  // Show the buttons
  showButtons() {
    this.loginHeaders.setButtonsHiddenState(false);
  }
  ngOnInit(): void {
    this.hideButtons();
    let resp = this.service.getUsers();
    resp.subscribe((data) => this.users = data);
  }
  public findByUsername() {
    let resp = this.service.getUsername("prakash");
    resp.subscribe((data) => this.users = data);
    console.log("Response :", resp);
  }

  public login() {
    const userExists = this.users.some((user: { username: any; password: any; }) => user.username === this.username && user.password === this.password);
    if (userExists) {
      console.log('Login successful');
      this.showButtons();
      alert("Login successful....");
      this.router.navigate(['/home']);
    } else {
      console.error('Login failed: Invalid credentials');
      alert("Invalid credentials....");
    }
  }
}