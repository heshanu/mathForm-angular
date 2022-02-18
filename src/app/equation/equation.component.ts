import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormsModule } from '@angular/forms';
import {MathValidators} from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  mathForm=new FormGroup({
    a:new FormControl(this.randomNumber()),
    b:new FormControl(this.randomNumber()),
    answer:new FormControl('')
  },[
    MathValidators.addition('answer','a','b')
  ]
);

  constructor() { }

  ngOnInit(): void {
  }

  //make random value till it refresh
  randomNumber(){
    return Math.floor(Math.random()*10);
  }

  //get method for easy without accessing math.value.a
  get a(){
    return this.mathForm.value.a;
  }

  get b(){
    return this.mathForm.value.b;
  }
}
