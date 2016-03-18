var appData = {
	program: 'Gmail',
	mailboxes: [
		{name:'inbox',
		 email: [
		 	{from: 'Doctor',
             subject: "Wibbly Woobly",
             content: "Do not blink.",
		    }
		]},
		{name: 'starred',
		 email: [
		 	{from: 'Wash',
		     subject: "flying",
		     content: "like a leaf on the wind.",
		    }
        ]},
		{name: 'draft',
		 email: [
		 	{from: "hi",
		 	subject: "what",
		 	content: "helloooo.",
		 	}
		]},
		{name: 'sent',
		  email: []
	    },
	],

	contacts: [
		{name: 'Mal', lastMessage: "I aim to misbehave"},
		{name: 'The Doctor', lastMessage: "Don't Blink"},
		],
};


// 1 Get a list of mailbox names
//for(var i = 0; i < appData.mailboxes.length; i++){
//	console.log(appData.mailboxes[i].name);
//}

// 2 Get a list of emails
//why does .length seem to only work for 2 levels? ex appData.mailboxes.email.length does not work
//for(var i = 0; i < appData.mailboxes.length; i++){
//	console.log(appData.mailboxes[i].email);
//}

//3 Get the text of the 2nd email in the list
//console.log(appData.mailboxes[1].email[0].content);

//4 Mark an email as sent
appData.mailboxes[3].email.push(appData.mailboxes[2].email.shift());
console.log(appData.mailboxes[3]);

//5 Add draft email to draft mailbox
appData.mailboxes[2].email.push({to: "7of9", subject: "assimilation", content: "This human body is weak"}, 
	{to: "Ziggy Stardust", subject: "Hello", content: "New planet hmm?"});
console.log(appData.mailboxes[2]);

