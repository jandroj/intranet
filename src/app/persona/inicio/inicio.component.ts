import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators} from '@angular/forms';
import { Router } from '@angular/router';




import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  loginForm: FormGroup;
  

  /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
  constructor(
    
        private _formBuilder: FormBuilder,

        //
      
       
        private router: Router,
        public dialog: MatDialog 
  ) { 
    // Configure the layout
    
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      nombreUsuario   : ['ADMIN', [Validators.required]],
      password: ['QWERT', Validators.required]
  });
   //
   
  }
  
}