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
				url: "http://localhost:8000/homophones.py",
				data: {
					param: word
				}
			}).done(
				function(results) {
					$("#" + output).text(results);
				}
			);
		},
		/**
		 * Puts the specified text in the specified output dom element.
		 *
		 * @param output: The ID of an HTML element to override
		 * @returns: nothing
		 *
		 * Side effects: Modifies the HTML by replacing the contents of the output with the given text
		 */
		putTextInOutput: function(output, text) {
			document.getElementById(output).innerText = text;
		},

		/**
		 * Gets all puns for the given text input field identified with the given id
		 *
		 * @param id: The id of an input field with a value of a word for which to find puns
		 * @returns: A list of words
		 */
		findPunsForTextInput: function(id) {
			return PunIt.findPuns( document.getElementById(id).value );
		},

		/**
		 * Gets all puns for the given word
		 *
		 * @param word: The word for which to find puns
		 * @returns: A list of words
		 */
		findPuns : function(word) {
			let puns = [];
			$.ajax({
				type: "POST",
				url: "../python/homophones.py",
				data: {
					param: word
				}
			}).done(
				function(results) {
					puns = results;
					alert(puns);
				}
			);
			return puns;
		}
	};
}();
