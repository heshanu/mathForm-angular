/*
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormsModule } from '@angular/forms';
import {MathValidators} from '../math-validators';
import {delay,filter,scan} from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  
  secondsPerSolution:number=0;
  
  mathForm=new FormGroup({
    a:new FormControl(this.randomNumber()),
    b:new FormControl(this.randomNumber()),
    answer:new FormControl('')
  },[
    MathValidators.addition('answer','a','b')
  ]
);

  constructor() { }
  //make random value till it refresh
  randomNumber(): number{
    return Math.floor(Math.random()*10);
  }
  //get method for easy without accessing math.value.a
  get a(){
    return this.mathForm.value.a;
  }
  get b(){
    return this.mathForm.value.b;
  }


  ngOnInit() {
    this.mathForm.statusChanges
      .pipe(
        filter(value => value ==="VALID"),
        delay(500),
        scan((acc) => {
            return{
              numberSolved:acc.numberSolved+1,
              startTime:acc.startTime
            }
        },{numberSolved:0,startTime:new Date()})
      )
      .subscribe(({numberSolved,startTime}) => {
        //numberSolved++;
        this.secondsPerSolution=
        (new Date().getTime()-startTime.getTime()
      )/numberSolved/1000;

        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        });
      });
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl('')
    },
    [MathValidators.addition('answer', 'a', 'b')]
  );

  constructor() {}

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit() {
    this.mathForm.statusChanges
      .pipe(
        filter(value => value === 'VALID'),
        delay(150),
        scan(
          acc => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        });
      });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
