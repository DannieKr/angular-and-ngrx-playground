import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopularTagType } from '../../../types/popularTag.type';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';

@Injectable({
    providedIn: 'root'
})
export class PopularTagService {
    constructor(private http: HttpClient) {}

    getPopularTags(): Observable<PopularTagType[]>{
        const url = environment.apiUrl + '/tags';
        return this.http.get<GetPopularTagsResponseInterface>(url).pipe(map((response) => response.tags))
    }
}