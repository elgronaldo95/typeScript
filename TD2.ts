import {isLEapYear} from"./TD1";

export interface point{
    abscisse:number;
    ordonate:number;
}

export function Distance(p1:point,p2:point):number{
    return Math.sqrt(Math.pow(p2.abscisse-p1.abscisse,2)+Math.pow(p2.ordonate-p1.ordonate,2));
}

let p1:point={
    abscisse:1,
    ordonate:2
};

let p2:point={
    abscisse:3,
    ordonate:4
};

console.log("la distace entre p1 et p2 est = "+Distance(p1,p2));



export interface Date{
    day:number;
    month:number;
    year:number;
};

export function isDateValide(uneDate:Date):boolean{

    if((uneDate.month>=1)&&(uneDate.month<=12)){

        if((uneDate.month==1)||(uneDate.month==3)||(uneDate.month==5)||(uneDate.month==7)
        ||(uneDate.month==8)||(uneDate.month==10)||(uneDate.month==12)){
        
            return (uneDate.day<=31);
    }
    else if(uneDate.month==2){

        if(isLEapYear(uneDate.year)){

            return (uneDate.day<=29);

        }
        else{
            return (uneDate.day<=28);
        }
    }
    else{
        return (uneDate.day<=30);
    }

    }
    else{
        return false;
    }

} 

let d1:Date={
    day:30,
    month:2,
    year:2020
};

let d2:Date={
    day:28,
    month:9,
    year:2020
};

let d3:Date={
    day:5,
    month:26,
    year:2020
};

console.log("date valide ? "+isDateValide(d1));
console.log("date valide ? "+isDateValide(d2));
console.log("date valide ? "+isDateValide(d3));

export function chaineValide(mot:string):boolean{
    
    let i:number=0;
    let m:string=mot[i];
    let stop:boolean=false;

    while((!stop) &&(i<mot.length)){

        if(((m>="a")&&(m<="z"))||((m>="A")&&(m<="Z"))){
            i+=1;
        }
        else{
            stop=true;
        }
    }

    return (i==mot.length);
}

let mot1:string="gamer";
let mot2:string="g!maer";

console.log("mot valide ? "+chaineValide(mot1));
console.log("mot valide ? "+chaineValide(mot2));