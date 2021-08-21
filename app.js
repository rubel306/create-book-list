const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const form = document.querySelector('#form');
const bookWrap = document.querySelector('#tbody');

form.addEventListener('submit', function(e){
    e.preventDefault();

    //basic validation for not empty value 
    if(title.value == ''){
        alert("please Provide Book Title");
    } else if(author.value == ''){
        alert("Please Provide Author Name");
    } else if(year.value == ''){
        alert("Please provide book published year. ")
    }else{
        const bookRow = document.createElement('tr');
        
        
        //add title 
        const bookTitle = document.createElement('td');
        bookTitle.innerHTML = title.value;
        bookRow.appendChild(bookTitle);

        //add author
        const bookAuthor = document.createElement('td');
        bookAuthor.innerHTML = author.value;
        bookRow.appendChild(bookAuthor);

        //add year
        const bookYear = document.createElement('td');
        bookYear.innerHTML = year.value;
        bookRow.appendChild(bookYear);

        //bookRow append with his parent 
        bookWrap.appendChild(bookRow);

    }
})
