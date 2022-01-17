class Bike {

	price : number ;
	max_speed : number ;
	miles : number ;
	
	constructor ( price , max_speed ) {

		this.price = price ;
		this.max_speed = max_speed ;
		this.miles = 0 ;

	}

	displayInfo ( ) : any {

		console.log ( 'Price:' , this.price ) ;
		console.log ( 'Max Speed:' , this.max_speed ) ;
		console.log ( 'Miles:' , this.miles ) ;
		return this ;

	}

	ride ( ) : any {

		console.log ( 'Ride' ) ;
		this.miles += 10 ;
		return this ;

	}

	reverse ( ) : any {

		console.log ( 'Reverse' ) ;

		if ( this.miles <= 0 ) {

			console.log ( 'Cannot reverse at 0 miles!' ) ;
			return null;

		}

		else {

			this.miles -= 5 ;
			return this ;

		}
	}

}

var bike1 = new Bike ( 200 , 25 ) ;
var bike2 = new Bike ( 270 , 27 ) ;
var bike3 = new Bike ( 720 , 72 ) ;

bike1.ride().reverse().displayInfo() ;
bike2.ride().reverse().ride().displayInfo() ;
bike3.reverse().ride().reverse().displayInfo() ;