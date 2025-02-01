import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContentItem {
  id?: number;
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private apiUrl = 'http://localhost:3000/content';

  constructor(private http: HttpClient) {}

  getContent(): Observable<ContentItem[]> {
    return this.http.get<ContentItem[]>(this.apiUrl);
  }

  addContent(content: ContentItem): Observable<ContentItem> {
    return this.http.post<ContentItem>(this.apiUrl, content);
  }

  updateContent(id: number, content: ContentItem): Observable<ContentItem> {
    return this.http.put<ContentItem>(`${this.apiUrl}/${id}`, content);
  }

  deleteContent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
