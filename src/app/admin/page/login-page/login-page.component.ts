import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
// import {Webconfig} from '../../../gomodel/webconfig';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {UserParams} from '../../../gomodel/userParams';
// import {GoService} from '../../../servises/go.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  userLogin = 'EM';

  // loginControl = new FormControl('', [
  //   Validators.required
  // ]);
  // passwordControl = new FormControl('', [
  //   Validators.required
  // ]);
  //
  // constructor(private goService: GoService, private auth: AuthService, private router: Router) { }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    // this.goService.initWebConfig().subscribe(
    //     response => {
    //     this.goService.setWebConfig(response);
    //   },
    //   configError =>  {
    //     console.log(configError);
    // });

    this.form.addControl('login', new FormControl(null, [Validators.required]));
    this.form.addControl('password', new FormControl(null, [Validators.required]));
    // if (!this.form) {
    //   this.form = new FormGroup({
    //     login: new FormControl(null, [Validators.required]),
    //     password: new FormControl(null, [Validators.required])
    //   });
    // }
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const user: UserParams = {
      login: this.form.value.login,
      password: this.form.value.password
    };

    console.log(user);

    this.auth.login(user).subscribe(response => {

      console.log(response);
      this.auth.setLoginInfo(response);
      this.auth.sessionID = response.sessionId;
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.router.navigate(['/admin/login']);
    });

  }

  getControl(name: string): AbstractControl  {

    let control: AbstractControl | null;
    control = this.form.get(name);

    if (!control) {
      control = new FormControl('null');
    }

    return control;
  }
}
