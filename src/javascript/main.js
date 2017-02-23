// The main class
let PunIt = function() {
	return {
		/**
		 * Gets the value of the specified input and replaces output with a list of relevant puns
		 *
		 * @param input: The ID of a text input dom element
		 * @param output: The ID of a dom element to replace with the results
		 *
		 * Side effects: Modifies the dom element with an ID of output
		 */
		putPunsFromInputToOutput: function(input, output) {
			let word = $("#" + input).val();

			$.ajax({
				type: "POST",
				url: "http://127.0.0.1:5000/homophone",
				data: JSON.stringify({
					"word" : word
				}),
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
					"Access-Control-Allow-Origin": "*"
				}
			}).done(
				function(results, _, __) {
					$("#" + output).text(results);
				}
			);
		}
	};
}();
