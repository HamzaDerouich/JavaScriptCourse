
let score = 80 ;
let letterGrade = "" ;
switch(true){
  case score >= 90:
    letterGrade = "A" ;
    break;
  case score >= 80:
    letterGrade = "B"
    break;
  case score >= 70:
    letterGrade = "C"
    break;  
    case score >= 60:
      letterGrade = "D"
      break;    
  default:
    letterGrade = "F";
}

console.log(letterGrade);