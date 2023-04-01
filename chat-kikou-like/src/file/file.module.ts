import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FilePreviewComponent } from './components/file-preview/file-preview.component';

@NgModule({
  declarations: [FileUploadComponent, FilePreviewComponent],
  imports: [CommonModule],
})
export class FileModule {}
