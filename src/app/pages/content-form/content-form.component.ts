import { Component, Inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentService, ContentItem } from '../../services/content.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-content-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss'],
})
export class ContentFormComponent {
  contentForm: FormGroup;
  isEdit = signal(false);

  constructor(
    private fb: FormBuilder,
    private contentService: ContentService,
    public dialogRef: MatDialogRef<ContentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContentItem | null
  ) {
    this.contentForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
    });

    if (data) {
      this.isEdit.set(true);
      this.contentForm.patchValue(data);
    }
  }

  onSubmit() {
    if (this.contentForm.valid) {
      const content: ContentItem = this.contentForm.value;
      if (this.isEdit()) {
        this.contentService
          .updateContent(this.data!.id!, content)
          .subscribe(() => this.dialogRef.close(true));
      } else {
        this.contentService
          .addContent(content)
          .subscribe(() => this.dialogRef.close(true));
      }
    }
  }

  close() {
    this.dialogRef.close();
  }
}
