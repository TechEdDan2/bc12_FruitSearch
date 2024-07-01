/**
 * A script to manage search bar functionality that will look through a 
 *   dataset to find a sequence of matching characters 
 * @author DNel2
 */
document.addEventListener('DOMContentLoaded', function () {

	//Variable for interacting with fruit search text input 
	const input = document.querySelector('#fruit');
	//Variable for holding the "dropdown" options 
	const suggestions = document.querySelector('.suggestions ul');
	//Variable to manipulate the search button functionality
	const searchBTN = document.querySelector('button');

	const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

	/**  
	 * The search function is used to find matches in the fruits array
	 * @param {string} str - The character that will be used for searching  
	*/
	function search(str) {
		let results = [];
		const fruitMap = new Map();

		//Loop over the fruit array looking for the search letters
		for (let fruit of fruits) {
			let lowerFruit = fruit.toLocaleLowerCase();
			if (lowerFruit.includes(str)) {
				let strLength = str.length;
				let bFruit = makeBoldLetters(lowerFruit, lowerFruit.indexOf(str), strLength);

				// Add the item to the map if not already there
				if (!fruitMap.has(fruit)) {
					fruitMap.set(fruit, bFruit);
				}
			}
		}
		// extract the list of fruits
		results = fruitMap.values();
		return results;
	}

	/**
	 * MakeBolderLetters highlights the search text in the returned items by
	 *   adding span html syntax to the string that can later be used to 
	 *   set the innerHTML value
	 * @param {String} word - returned word from the search 
	 * @param {number} startIndex - location of the matching text
	 * @param {number} strLength - length of the text typed in seach
	 * @returns {Sting} 
	 */
	const makeBoldLetters = (word, startIndex, strLength) => {
		let boldLtrWrd = "";
		let wordArray = [...word];
		let endIndex = (startIndex + strLength) + 1;

		wordArray.splice(startIndex, 0, "<span>");
		wordArray.splice(endIndex, 0, "</span>");

		boldLtrWrd = wordArray.join("");

		return boldLtrWrd;
	}

	/**
	 * searchHandler takes the input and passes it to search; then it 
	 *   takes the results and passes the new dataset when it calls 
	 *   showSuggestions, also passing a value that will be used to 
	 *   limit suggestions to 10 items. 
	 * @param {Event} e 
	 */
	function searchHandler(e) {
		e.preventDefault();
		//get the letter(s) in the text input and change the case
		const userSearchInput = input.value.toLowerCase();

		//call the search function and pass the letters and store the returned value
		const searchResults = Array.from(search(userSearchInput));

		//pass the returned results to show suggestions
		showSuggestions(searchResults, 10);

	}

	/**
	 * showSuggestions creates new list elements and populates each
	 *   with an item from the search results.
	 * @param {array} results - the list of results
	 * @param {number} inputVal - limiter to keep the display list short 
	 */
	function showSuggestions(results, inputVal) {
		//check to see if there are any li's in the ul
		// if true remove them
		if (suggestions.firstChild) {
			reset();
		}
		for (let i = 0; i < inputVal; i++) {
			if (results[i] === undefined) {
				//do nothing
			} else {
				const newSuggestLi = document.createElement('li');
				newSuggestLi.innerHTML = results[i];
				suggestions.appendChild(newSuggestLi);
			}
		}
	}

	/**
	 * When an item in the suggestions list is clicked,
	 *   useSuggestion populates the search bar with the
	 *   full text
	 * @param {Event} e 
	 */
	function useSuggestion(e) {
		e.preventDefault();
		input.value = e.target.innerText;
		reset();
	}

	/**
	 * A simple reset to clear the "dropdown" list of items. 
	 */
	function reset() {
		while (suggestions.firstChild) {
			suggestions.removeChild(suggestions.firstChild);
		}
	}

	// ------------------ //
	//	 Event Handlers
	// ----------------- //
	input.addEventListener('keyup', searchHandler);
	suggestions.addEventListener('click', useSuggestion);
	searchBTN.addEventListener('click', (e) => {
		e.preventDefault();
		input.value = "";
		reset();
	});

});
