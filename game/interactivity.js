//GOALS FOR THE PAGE

//Computer text pops up, either asking a question or saying something.
//place for user to respond appears
//Timer starts for creator to answer
//IF creator responds, record answer
//Then computer responds

// export function promptUser(questionString) {


// }

//Posts text to the screen from either party
export function postText(entityTalking, text) {
    const textBox = document.getElementById('conversation');
    const el = document.createElement('p');
    el.className = `${entityTalking}-text`;
    el.textContent = text;
    textBox.appendChild(el);
    while (textBox.children.length > 10) textBox.removeChild(textBox.childNodes[0]); 
}