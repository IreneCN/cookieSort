/**
 * @author Chidinma Irene Nwoye
 */

/* The purpose of the program is to create a list of cookies with specific properties 
		 * and from that list create two new lists: one of my favorites and one of the rest
		 */
			var myCookies = [{
				"name" : "Oreo",
				"shape" : "round"
			}, {
				"name" : "Chips Ahoy",
				"shape" : "round"
			}, {
				"name" : "Lorna Doone",
				"shape" : "square"
			}, {
				"name" : "Fig Newtons",
				"shape" : "square"
			}];
			console.log(myCookies);

		//These are the lists I will sort my cookies into
		var myFaves = [];
		var theRest = [];
		
		//for every cookie in my list of cookies, check its shape. If it's round, add it to myFaves. If not, add to theRest
		
		for(var i=0; i<myCookies.length; i++)
		{
			console.log(i);
			var currentCookie = myCookies[i];
			//console.log(currentCookie);
			
			if(currentCookie.shape == "square"){
				console.log(currentCookie);
				//because shape is square add the current cookie to myFaves list, 
				myFaves.push(currentCookie);
				}else{
				//otherwise add the currentCookie to the rest
				theRest.push(currentCookie);
					
					
				} //this is the end of my if/else statement
			
		
		} //this is the end of my for loop
		console.log("finished lists");
		console.log(myFaves);
		console.log(theRest)
