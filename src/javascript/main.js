// The main class
let PunIt = function() {
	return {
		/**
		 * Puts the given text in the given output by overwriting it's contents
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
		 * findPunsForTextInput
		 *
		 * Gets all puns for the given text input field identified with the given id
		 *
		 * @param id: The id of an input field with a value of a word for which to find puns
		 * @returns: A list of words
		 */
		findPunsForTextInput: function(id) {
			return PunIt.findPuns( document.getElementById(id).value );
		},

		/**
		 * findPuns
		 *
		 * Gets all puns for the given word
		 *
		 * @param word: The word for which to find puns
		 * @returns: A list of words
		 */
		findPuns : function(word) {
			return [word, word, word];
		}
	};
}();
