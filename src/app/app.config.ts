import { ApplicationConfig, provideZoneChangeDetection,LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    //Ajouter un "objet" définissant un 'provide'
    //(le LOCAL_ID) et sa valeur (ici 'fr-FR')
    { provide: LOCALE_ID, useValue: 'fr-FR' }]
};
