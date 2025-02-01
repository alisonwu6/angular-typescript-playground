import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContentService, ContentItem } from '../../services/content.service';

@Component({
  selector: 'app-content-manager',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './content-manager.component.html',
})
export class ContentManagerComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'actions'];
  contentList: ContentItem[] = [];

  constructor(
    private contentService: ContentService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.contentService.getContent().subscribe((data) => {
      this.contentList = data;
    });
  }

  openDialog(item?: ContentItem) {
    console.log('openDialog');

    // this.dialog.open(ContentDialogComponent, { data: item });
  }
}
