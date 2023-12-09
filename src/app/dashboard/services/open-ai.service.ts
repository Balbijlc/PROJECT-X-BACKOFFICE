import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'URL_DE_LA_API_DE_OPENAI'; // Reemplaza con la URL de la API de OpenAI

  constructor(private http: HttpClient) {}

  getGptResponse(userMessage: string): Observable<any> {
    // Realiza una solicitud a la API de OpenAI para obtener una respuesta de ChatGPT
    // Aquí debes configurar la solicitud según la API de OpenAI
    const data = {
      userMessage: userMessage,
      // Otros parámetros necesarios
    };

    return this.http.post(`${this.apiUrl}/chat`, data);
  }
}
