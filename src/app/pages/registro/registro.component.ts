import { Component, OnInit } from "@angular/core";
import { UserModel } from "../../models/user.model";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  user: UserModel;
  remindMe = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Espero por favor...",
    });
    Swal.showLoading();

    this.auth.newUser(this.user).subscribe(
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
