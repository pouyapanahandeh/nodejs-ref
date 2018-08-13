// || (OR)

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// or operation

let hour = 9;

if (hour < 10 || hour > 18) {
	alert( 'The office is closed.' );
}

// && (AND)

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
	alert( 'Time is 12:30' );
}