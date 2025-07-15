import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() bookList:Book[]=[];
}
