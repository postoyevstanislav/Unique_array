const select = document.querySelector('#letters');
const listContainer = document.querySelector('.list-ul');
const button = document.querySelector('#button')
const uniqueChar = [];

function makeUniqueLetters(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for ( let i = 0; i < length; i++ ) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        if(!uniqueChar.includes(characters[randomNumber])){
            uniqueChar.push(characters[randomNumber]);
        } else {
            i--
            continue
        }
}
    return uniqueChar
};
makeUniqueLetters(5);

function renderOption(parrent, arr) {
    arr.map(el => {
        const option = document.createElement('option')
        option.innerHTML = el
        parrent.appendChild(option)
    });
};
renderOption(select, uniqueChar);

function renderNames(parrent, arr) {
    arr.map(el => {
        const li = document.createElement('li')
        li.innerHTML = el.name
        parrent.appendChild(li)
    });
};

button.addEventListener('click', () => {
    listContainer.innerHTML = '';

    fetch("./list.json")
    .then(response => {
    return response.json();
    })
    .then(data => {
        const filtered = data.filter(person => person.name[0] === select.value)
        if(filtered.length > 0) {
            renderNames(listContainer, filtered)
        } else {
            const li = document.createElement('li')
            li.innerHTML = 'Nothing to show'
            listContainer.appendChild(li)
        }
    });
});





