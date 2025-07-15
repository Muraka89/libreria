import { Injectable } from '@angular/core';
import { Book } from './book';
import booksData from './books.json'; 

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  books : Book[] = booksData; 
  private searchResults = this.books; // Estado inicial con todos los libros
  
  constructor() { }
  
  // obtiene la lista de los libros
  getBooks(){
    return this.books;
  }

  searchBooks(term:string):Book[]{
    const filterBooks=this.books.filter(
      (book)=>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
      book.author.toLowerCase().includes(term.toLowerCase())

    );
    this.searchResults=filterBooks;
    return this.searchResults;
  }
}