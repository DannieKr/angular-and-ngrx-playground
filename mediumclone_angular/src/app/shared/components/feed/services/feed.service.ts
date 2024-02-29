import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class FeedService{
    constructor(private http: HttpClient) {}

    getFeed(url: string): Observable<GetFeedResponseInterface> {
        const fullUrl = environment.apiUrl + url;
        return this.http.get<GetFeedResponseInterface>(fullUrl);
    }
}