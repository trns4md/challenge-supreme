//var list
var titleName=document.getElementById("title-name"),
    authorName=document.getElementById("author-name"),
    addBook=document.getElementById("add-book"),
    displayArea =document.getElementById("display-area"),
    bookList=[],
    booklistID= 0;


    var Book = function Book (titleName, authorName){
            this.titleName = titleName;
            this.authorName = authorName;
            this.id = booklistID ++;
    this.toString = function toString(){
        return this.titleName + "" + this.authorName;
        }
    }
    var displayBook = function displayBook(){
        for (var i = 0; i< bookList.length; i++){
            var curBook = bookList [i];
            displayArea.innerText += i + ":" + curBook.toString() + "\n";
        }
    }

addBook.addEventListener ("click",function(){
   var newBook = new Book(titleName.value, authorName.value);
   bookList.push(newBook);
    displayBook();   
});
