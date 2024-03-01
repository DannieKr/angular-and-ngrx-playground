import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleInterface } from '../../../types/article.interface';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ArticleResponseInterface } from '../../../types/articleResponse.interface';

@Injectable()
export class AddToFavoritesService {
    constructor(private http: HttpClient) {}

    addToFavorites(slug: string): Observable<ArticleInterface>{
        const url = this.getUrl(slug);
        return this.http.post<ArticleResponseInterface>(url, {})
            .pipe(map((response: ArticleResponseInterface) => response.article));
    }

    removeFromFavorites(slug: string): Observable<ArticleInterface>{
        const url = this.getUrl(slug);
        return this.http.delete<ArticleResponseInterface>(url)
            .pipe(map((response: ArticleResponseInterface) => response.article));
    }

    getUrl(slug: string): string{
        return environment.apiUrl + '/articles/' + slug + '/favorite';
    }
}