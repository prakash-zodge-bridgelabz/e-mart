import { Component } from '@angular/core';
import { DbService } from '../../api/db.service';
import { User } from '../../../user';
import { text } from 'stream/consumers';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginHeadersService } from '../../api/login-headers.service';
import { AuthService } from '../../api/auth.service';

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
    private loginHeaders: LoginHeadersService,private authService:AuthService) { }
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
    console.log('this.users ==>',this.users);
    console.log('this.users.data ==>',this.users.data);
  }
  public login() {
    const userExists = this.users.data.some((user: { username: any; password: any; }) => user.username === this.username && user.password === this.password);
    if (userExists) {
      console.log('Login successful');
      this.showButtons();
      alert("Login successful....");
      this.authService.login();
      this.router.navigate(['/home']);
    } else {
      console.error('Login failed: Invalid credentials');
      alert("Invalid credentials....");
    }
  }
  // public login() {
  //   const userExists = this.users.data.some((user: { username: any; password: any; }) => user.username === this.username && user.password === this.password);
    
  //   this.authService.login().subscribe(
  //     () => {
  //       console.log('Login successful');
  //       this.showButtons();
  //       alert('Login successful....');
  //       this.router.navigate(['/home']);
  //     },
  //     () => {
  //       console.error('Login failed: Invalid credentials');
  //       alert('Invalid credentials....');
  //     }
  //   );
  // }
}
