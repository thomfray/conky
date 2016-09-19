$(function() {
	var num1 = '';
	var num2 = '';
	var oper = '';
	var operWord = '';
	var ans = '';
	console.log('VARs set');

	function setCalc() {
		console.log('setCalc function called');
		$('#num1').focus();
		$('#calc').click(function() {
	 		num1 = parseInt($('#num1').val());
	 		num2 = parseInt($('#num2').val());
			oper = $('input:radio[name="radio"]:checked').val();
			if (oper == '+') {
				ans = (num1 + num2);
				operWord = ' plus ';
			} else if (oper == '-') {
				ans = (num1 - num2);
				operWord = ' minus ';
			} else if (oper == '*') {
				ans = (num1 * num2);
				operWord = ' multiplied by ';
			} else if (oper == '/') {
				ans = (num1 / num2);
				operWord = ' divided by '
			};

			/* Concats all the strings together and places in the answer div */
			var fullAns = num1 + operWord + num2 + " equals " + ans;
			$('#ans').text(fullAns);

			/* TESTING Removes the setClac event handler to make way for the reseter event handler on the button */
			$('#calc').off('click')

			/* Changes the calc button to the Reset button */
			$('#calc').attr('id', 'reseter').attr('value', 'Reset').attr('name', 'reset');
			setReset();
		});
	}; /* setCalc */


	function setReset() {
		console.log('setReset ran');
		/* Clears and disables the input field */
		$('#num1').val('');
		$('#num1').attr('disabled', 'disabled');
		$('#num2').val('');
		$('#num2').attr('disabled', 'disabled');
		$('#operator').val('');
		$('#operator').attr('disabled', 'disabled');

		/* Clears the placeholders  */
		$('#num1').attr('placeholder', '')	
		$('#num2').attr('placeholder', '')
		

		/* Adds the event handler reset functions to the button altered above */
		$('#reseter').click(function() {
			$('#num1').attr('disabled', false);
			$('#num2').attr('disabled', false);
			$('#operator').attr('disabled', false);
			$('#setReset').attr('id', '#calc').attr('value', 'Go Clac!').attr('name', 'submit');

			$('#num1').attr('placeholder', 'Enter another number');
			$('#num2').attr('placeholder', 'Enter another number');

			$('#ans').text('Your next answer here.');

			num1 = '0';
			num2 = '0';

			/* TESTING Removes the reseter event handler to make way for the Calc event handler on the button */
			$('#reseter').off('click')

			/* Changes the Reset button back to the Calc button */
			$('#reseter').attr('id', 'calc').attr('value', 'Go Calc!').attr('name', 'calc');

			setCalc();
		}); // setReset click event
	}; // setReset function

	
setCalc(); 	// Calls setCalc to set up form once DOM loads and setCalc function has been defined


		
	

	// Key up event to check inputs are numbers
	// NOT WORKING YET
	// $('#num1').keyup(function() {
	// 	if (isNaN($(this).val())) {
	// 		console.log(NaN);
	// 	}
	// });



	$('#test').click(function() {
		console.log("button works")
	});




// var reset = function() {
// 	$('#reset').click(function() {
// 		console.log('Works');
// 		$(this).attr('value', 'Go Calc!');
// 		var fullAns = 'Your Next Answer Here.'
// 		$('#ans').text(fullAns);

// 		$('#num1').attr('placeholder', 'Enter another number')
// 		$('#num2').attr('placeholder', 'Enter another number')
// 		$('#operator').val('+');
// 		$('#num1').focus();
// 	});



// });




}); /* end of main section */


