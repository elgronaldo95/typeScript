export class Date{

    private days:number;
    private month:number;
    protected year:number;

    constructor(days:number,month:number,year:number){
        this.days=days;
        this.month=month;
        this.year=year;
    }

    getDay():number{
        return this.days;
    }
    getMonth():number{
        return this.month;
    }
    getYear():number{
        return this.year;
    }

    isLEapYear():boolean{
        return(((this.year % 4==0)&&(this.year % 100 !=0))|| (this.year % 400==0));
    }

    isDateValide():boolean{

        if((this.month>=1)&&(this.month<=12)){

            if((this.month==1)||(this.month==3)||(this.month==5)||(this.month==7)
            ||(this.month==8)||(this.month==10)||(this.month==12)){
            
                return (this.days<=31);
        }
        else if(this.month==2){
    
            if(this.isLEapYear()){
    
                return (this.days<=29);
    
            }
            else{
                return (this.days<=28);
            }
        }
        else{
            return (this.days<=30);
        }
    
        }
        else{
            return false;
        }
    
    }

    calculerAge(dateNaissance:Date):number{

        if(dateNaissance.getYear()>this.year){
            console.log("operation impossible ");
            return null;
        }else{
            return (this.year-dateNaissance.year);
        }



    }


}

let date1=new Date(1,10,2020);
console.log("aujourdhui nous somme le :"+date1.getDay()+" / "+date1.getMonth()+" / "+date1.getYear());
console.log("est ce que la date est valide ? "+date1.isDateValide()+" est est bissextile ? "+date1.isLEapYear());
let date2=new Date(5,3,1995);
console.log("j'ai : "+date1.calculerAge(date2));