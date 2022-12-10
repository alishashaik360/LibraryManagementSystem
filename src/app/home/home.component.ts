import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [
    {"ID" : 1, "Title" : "Gilead", "Author" : "Marilynne Robinson", "Subject" : "Fiction", "Date" : "2004"},
    {"ID" : 2, "Title" : "Spider's Web", "Author" : "Charles Osborne", "Subject" : "Novel", "Date" : "2000"},
    {"ID" : 3, "Title" : "The One Tree", "Author" : "Stephen R. Donaldson", "Subject" : "A Memoir", "Date" : "1982"},
    {"ID" : 4, "Title" : "Rage of angels", "Author" : "Sidney Sheldon", "Subject" : "Visual Companion", "Date" : "1993"},
    {"ID" : 5, "Title" : "The Four Loves", "Author" : "Clive Staples Lewis", "Subject" : "The Art of The Return of the King", "Date" : "2002"},
    {"ID" : 6, "Title" : "The Problem of Pain", "Author" : "Clive Staples Lewis", "Subject" : "Daughter of the Clayr", "Date" : "2002"},
    {"ID" : 7, "Title" : "An Autobiography", "Author" : "Agatha Christie", "Subject" : "Fiction", "Date" : "1977"},
    {"ID" : 8, "Title" : "Empires of the Monsoon", "Author" : "Richard Hall", "Subject" : "A History of the Indian Ocean and Its Invaders", "Date" : "1998"},
    {"ID" : 9, "Title" : "The Gap Into Madness", "Author" : "Stephen Donaldson", "Subject" : "Chaos and Order", "Date" : "1994"},
    {"ID" : 10, "Title" : "Master of the Game", "Author" : "Sidney Sheldon", "Subject" : "Fiction", "Date" : "1982"},
    {"ID" : 11, "Title" : "If Tomorrow Comes", "Author" : "Sidney Sheldon", "Subject" : "Novel", "Date" : "1994"},
    {"ID" : 12, "Title" : "Assassin's Apprentice", "Author" : "Robin Hobb", "Subject" : "Biography", "Date" : "1996"},
    {"ID" : 13, "Title" : "Warhost of Vastmark", "Author" : "Janny Wurts", "Subject" : "Daughter of the Clayr", "Date" : "1996"},
    {"ID" : 14, "Title" : "The Once and Future King", "Author" : "Terence Hanbury White", "Subject" : "Being the Third Part of The Lord of the Rings", "Date" : "1996"},
    {"ID" : 15, "Title" : "Murder in LaMut", "Author" : "Raymond Eein", "Subject" : "The Complete Ariadne Oliver", "Date" : "2003"},
    {"ID" : 16, "Title" : "Jimmy the Hand", "Author" : "Raymond Eein", "Subject" : "The Restored Text", "Date" : "2003"},
    {"ID" : 17, "Title" : "Well of Darkness", "Author" : "Margaret Weis", "Subject" : "The Authorized Text", "Date" : "2001"},
    {"ID" : 18, "Title" : "Witness for the Prosecution", "Author" : "Agatha Christie", "Subject" : "Geography", "Date" : "2004"},
    {"ID" : 19, "Title" : "The Little House", "Author" : "Philippa Gregory", "Subject" : "Love", "Date" : "2000"},
    {"ID" : 20, "Title" : "Mystical Paths", "Author" : "Susan Howatch", "Subject" : "Fiction", "Date" : "1998"},
    {"ID" : 21, "Title" : "Glittering Images", "Author" : "Susan Howatch", "Subject" : "The Secret Diaries", "Date" : "1996"},
    {"ID" : 22, "Title" : "Glamorous Powers", "Author" : "Susan Howatch", "Subject" : "Why More Is Less", "Date" : "1996"},
    {"ID" : 23, "Title" : "The Mad Ship", "Author" : "Robin Hobb", "Subject" : "Tenses", "Date" : "2000"},
    {"ID" : 24, "Title" : "Post Captain", "Author" : "Patrick O Brian", "Subject" : "Love is important", "Date" : "1998"},
    {"ID" : 25, "Title" : "The Reverse of the Medal", "Author" : "Patrick O Brian", "Subject" : "Novel", "Date" : "1997"},
    {"ID" : 26, "Title" : "Miss Marple", "Author" : "Agatha Christie", "Subject" : "The Complete Short Stories", "Date" : "1997"},
    {"ID" : 27, "Title" : "The Years of Rice and Salt", "Author" : "Tess Gerritsen", "Subject" : "Novel", "Date" : "1996"},
    {"ID" : 28, "Title" : "Spares", "Author" : "Tess Gerritsen", "Subject" : "", "Date" : "2003"},
    {"ID" : 29, "Title" : "Gravity", "Author" : "Amy", "Subject" : "Fiction", "Date" : "1998"},
    {"ID" : 30, "Title" : "The Wise Woman", "Author" : "Amy Tan", "Subject" : "A Novel of Discworld", "Date" : "2000"}
  ];

  count_title = 0;
  count_author = 0;
  count_date = 0;
  count_subject = 0;

  search_element : any;

  top_10_books = new Array();
  next_10_books = new Array();
  
  search_result = new Array();
  scroll_count = 0;
  condition = 10;

  flag1 = true;
  flag2 = false;
  message : any;

  constructor() { }

  ngOnInit(): void {
    this.fetch_top_10_books();
  }

  fetch_top_10_books()
  {
    for(let i = 0; i<10; i++)
    {
      this.top_10_books.push(this.data[i]);
      this.next_10_books.push(this.data[i]);
    }     
  }

  fetch_next_10_books()
  {
    this.flag1 = true;
    this.flag2 = false;
    for(let i = this.condition ; i< (this.condition + 10); i++ )
    {
      this.next_10_books.push(this.data[i]);
    }
    this.display_books();
    this.condition = this.condition + this.next_10_books.length - 10;
  }

  
  display_books()
  { 
    this.scroll_count = this.scroll_count + 1;
    for(let i = (this.scroll_count * 10 - 10) ; i< (this.scroll_count * 10); i++)
      {
        console.log(this.next_10_books[i]); 
      }

  }
    
  search()
  {
    this.search_result = [];
    this.flag2 = true;
    this.flag1 = false;
    this.search_title();  
    this.search_author();
    this.search_subject();
    this.search_date();
    this.display();
    this.count_title = 0;
    this.count_author = 0;
    this.count_date = 0;
    this.count_subject = 0;
  }

  search_title()
  {

    for(let i = 0; i< this.data.length; i++)
    {
      if(this.data[i].Title == this.search_element)
      {
        this.search_result.push(this.data[i]);
        this.count_title = this.count_title + 1;
      }
    }
  
  }

  search_author()
  {
    for(let i = 0; i< this.data.length; i++)
    {
      if(this.data[i].Author == this.search_element)
      {
        this.search_result.push(this.data[i]);
        this.count_author = this.count_author + 1;
      }
    }

  }

  search_subject()
  {

    for(let i = 0; i< this.data.length; i++)
    {
      if(this.data[i].Subject == this.search_element)
      {
        this.search_result.push(this.data[i]);
        this.count_subject = this.count_subject + 1;
      }
    }
  }

  search_date()
  {
    for(let i = 0; i< this.data.length; i++)
    {
      if(this.data[i].Date == this.search_element)
      {
        this.search_result.push(this.data[i]);
        this.count_date = this.count_date + 1;
      }
    }

  }

  display()
  {
    for(let i = 0; i< (this.count_title + this.count_author + this.count_date + this.count_subject); i++)
    {
      console.log(this.search_result[i]);
      this.message = "There are " + (this.count_title + this.count_author + this.count_date + this.count_subject) + " books retrived"
    }
  }

}
