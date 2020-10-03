export function isLEapYear(year:number):boolean{
    return(((year % 4==0)&&(year % 100 !=0))|| (year % 400==0));
}

console.log(isLEapYear(2020));
console.log(isLEapYear(2022));

export function daysInMonth(month:number,year:number):number{
    if((month>=1)&&(month<=12)){
        if((month ==1)||(month==3)||(month==5)||(month==7)||(month==8)||(month==10)||(month==12)){
            return 31;
        }
        else if(month==2){
            if(isLEapYear(year)){
                return 29;
            }else{
                return 28;
            }
        }else{
            return 30;
        }
    }
    else {
        console.log("mois incorrecte");
    }
}

let weekOfDays: Array <string>=["Lundi","Mardi","Mercredi","jeudi","vendredi","samedi","dimanche"];
console.log(weekOfDays);
console.log(daysInMonth(2,2020));

export function calculerAge(anneNaissance:number,anneActuel:number):number{

    if(anneActuel<anneNaissance){
        console.log("operation impossible");
        return null;

    }else{

        return (anneActuel-anneNaissance);
    }
    
}

console.log("son age est "+calculerAge(1995,2020));
console.log("son age est "+calculerAge(2020,1995));

export function inverseMot(mot:string):string{

    let mot2:string="";

    for(let i:number=mot.length-1;i>=0;--i){

        mot2+=mot[i];
    }

    return mot2;
}

console.log("sa version inversée de SAMBA est : "+inverseMot("SAMBA"));

export function palindrom(mot:string):boolean{
    
    let mot2:string=inverseMot(mot);

    return (mot2==mot);
}

console.log("est il est un palindrome ? "+palindrom("Gloire"));
console.log("est il est un palindrome ? "+palindrom("KAYAK"));

