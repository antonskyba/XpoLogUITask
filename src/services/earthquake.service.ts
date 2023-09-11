import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { EarthquakeData } from '../types';
import { formatInputDate } from '../utilities';

const EARTHQUAKE_API_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query';

@Injectable({
  providedIn: 'root',
})
export class EarthquakeService {
  constructor(private http: HttpClient) {}

  getEarthquakeData(
    startDate: Date | null,
    endDate: Date | null,
    maxMagnitude: string | null = null,
    events: number = 10
  ): Observable<EarthquakeData | undefined> {
    return this.http
      .get<EarthquakeData | undefined>(EARTHQUAKE_API_URL, {
        params: new HttpParams()
          .set('format', 'geojson')
          .set('limit', String(events))
          .set('starttime', startDate ? formatInputDate(startDate) : '')
          .set('endtime', endDate ? formatInputDate(endDate) : '')
          .set('maxmagnitude', maxMagnitude || ''),
      })
      .pipe(
        catchError((error) => {
          console.error('Earthquake API Response error:', error);
          return of(undefined);
        })
      );
  }
}
