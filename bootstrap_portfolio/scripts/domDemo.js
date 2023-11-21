console.log("doc is " + document.URL);
console.log("doc is " + document.inputEncoding);

/*This function will get called after the page has loaded
  See jsDom.html onload attribute. It calls this function. */
function afterLoading() {
    //get all the <li> element nodes
    let list1 = document.getElementsByTagName("li");
    console.log("list1 length "+list1.length+" "+list1);
    //iterate through the <li> nodes and print the innerHTML and the textContent
    for (let i=0;i<list1.length;i++) {
        console.log("item is "+list1[i]);
        console.log("item is "+list1[i].innerHTML);
        console.log("item is "+list1[i].textContent);
    }    

    // get the <td> element with the id "checkingBalance" 
    var checkingNode = document.getElementById("checkingBalance");
    console.log(checkingNode);
    console.log(checkingNode.textContent);
    //change the text value of the checkingNode
    checkingNode.textContent = "CHANGED!";

    //Here we create a new HTML element <p> and add it to the bottom of the page
    //First create text object
    const text = document.createTextNode("Text added to bottom of page");
    //Add the text object to a <p> node
    const p = document.createElement("p");
    //Append the text to the <p> node
    p.appendChild(text);
    //Get the div at the bottom of the page
    let end = document.getElementById("end");
    //Append our new <p> node to it
    end.appendChild(p);
}

function depositChecking () {
    /*get value of html element with id savingsBalance*/
    var td = document.getElementById('checkingBalance');
    /*convert string to integer*/
    checking = parseInt(td.textContent,10);
    checking += 100;
    td.textContent=checking;
}

function depositSavings() {
    /*get value of html element with id savingsBalance*/
    var td = document.getElementById('savingsBalance');
    var savings = td.textContent;
    /*convert string to integer*/
    savings = parseInt(savings,10);
    /* if savings is 0, we need to change the title from Alert back to Bank Account */
    if(savings == 0) {
        var title = document.getElementById('bankAccountTitle');
        title.textContent="Bank Account";
    }
    savings += 100;
    td.textContent=savings;
}

function emptySavings() {
    /*get value of html element with id savingsBalance*/
    var td = document.getElementById("savingsBalance");
    td.textContent = 0;
    var title = document.getElementById('bankAccountTitle');
    /*change value of title */
    title.textContent="ALERT: Savings Empty";
}