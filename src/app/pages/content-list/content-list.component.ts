import { Component, signal } from '@angular/core';
import { ContentService, ContentItem } from '../../services/content.service';
import { ContentFormComponent } from '../content-form/content-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentList = signal<ContentItem[]>([]);
  displayedColumns = ['title', 'author', 'actions'];

  constructor(
    private contentService: ContentService,
    private dialog: MatDialog
  ) {
    this.loadContent();
  }

  loadContent() {
    this.contentService
      .getContent()
      .subscribe((data) => this.contentList.set(data));
  }

  openDialog(item?: ContentItem) {
    const appRoot = document.querySelector('app-root');
    if (appRoot) {
      appRoot.setAttribute('inert', 'true'); // ✅ 開啟對話框時防止 app-root 取得焦點
    }

    const dialogRef = this.dialog.open(ContentFormComponent, {
      restoreFocus: false, // ✅ 避免 Angular 自動將焦點調回 app-root
      height: '400px',
      width: '600px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (appRoot) {
        appRoot.removeAttribute('inert'); // ✅ 關閉對話框時恢復 app-root
      }
      if (result) this.loadContent();
    });
  }

  deleteContent(id: number) {
    this.contentService.deleteContent(id).subscribe(() => this.loadContent());
  }
}
