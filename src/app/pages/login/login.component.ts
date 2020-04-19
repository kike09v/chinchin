import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserModel } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: UserModel;
  remindMe = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = new UserModel();

    if (localStorage.getItem("email")) {
      this.user.email = localStorage.getItem("email");
      this.remindMe = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Espero por favor...",
    });
    Swal.showLoading();

    this.auth.login(this.user).subscribe(
      (resp) => {
        Swal.close();

        if (this.remindMe) {
          localStorage.setItem("email", this.user.email);
        }

        this.router.navigateByUrl("/home");
      },
      (err) => {
        Swal.fire({
          icon: "error",
          title: "Error al auntenticar",
          text: err.error.error.message,
        });
      }
    );
  }
}
