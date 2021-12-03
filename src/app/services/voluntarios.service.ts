import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Voluntarios } from '../model/voluntarios';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {

  voluntarios: Voluntarios[] = [];

  //HttpClient is Angular's mechanism for communicating with a remote server over HTTP, in this case, the communication is with json file over HTTP.
  // constructor(private http: HttpClient) { }
  constructor() {
    this.voluntarios = [
      {
        "id": 1,
        "avatar": "https://randomuser.me/api/portraits/men/92.jpg",
        "first_name": "Orin",
        "last_name": "Garrud",
        "gender": "Genderqueer",
        "phone": "261-949-3530",
        "street_address": "7212 Judy Place",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
      },
      {
        "id": 2,
        "avatar": "https://randomuser.me/api/portraits/men/28.jpg",
        "first_name": "Cooper",
        "last_name": "Rickhuss",
        "gender": "Bigender",
        "phone": "306-186-4651",
        "street_address": "99 Loeprich Avenue",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
      },
      {
        "id": 3,
        "avatar": "https://randomuser.me/api/portraits/women/65.jpg",
        "first_name": "Rebecka",
        "last_name": "Pettiford",
        "gender": "Genderfluid",
        "phone": "429-529-4818",
        "street_address": "3217 School Place",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
      },
      {
        "id": 4,
        "avatar": "https://randomuser.me/api/portraits/women/3.jpg",
        "first_name": "Daryle",
        "last_name": "Doubleday",
        "gender": "Genderqueer",
        "phone": "416-886-2682",
        "street_address": "036 Kinsman Junction",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
      },
      {
        "id": 5,
        "avatar": "https://randomuser.me/api/portraits/men/34.jpg",
        "first_name": "Stefano",
        "last_name": "Lougheid",
        "gender": "Bigender",
        "phone": "362-495-3233",
        "street_address": "0 Superior Pass",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
      },
      {
        "id": 6,
        "avatar": "https://randomuser.me/api/portraits/women/89.jpg",
        "first_name": "Rivy",
        "last_name": "Carrington",
        "gender": "Female",
        "phone": "589-507-6435",
        "street_address": "3637 Corscot Center",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
      },
      {
        "id": 7,
        "avatar": "https://randomuser.me/api/portraits/women/64.jpg",
        "first_name": "Hamlen",
        "last_name": "Entreis",
        "gender": "Male",
        "phone": "440-253-9481",
        "street_address": "787 Arrowood Road",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
      },
      {
        "id": 8,
        "avatar": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oXcTgtM39iB0JTxTCUPekAHaDt%26pid%3DApi&f=1",
        "first_name": "Veronique",
        "last_name": "McIlriach",
        "gender": "Polygender",
        "phone": "112-527-9601",
        "street_address": "26036 Fallview Circle",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      },
      {
        "id": 9,
        "avatar": "https://randomuser.me/api/portraits/men/90.jpg",
        "first_name": "Darrell",
        "last_name": "Grzelczyk",
        "gender": "Non-binary",
        "phone": "988-506-6702",
        "street_address": "7 Jenna Place",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
      },
      {
        "id": 10,
        "avatar": "https://randomuser.me/api/portraits/men/42.jpg",
        "first_name": "Anthony",
        "last_name": "Brader",
        "gender": "Male",
        "phone": "492-705-0252",
        "street_address": "26 Westerfield Point",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
      }
    ]
   }

  //Method to obtain old people data 
  // getVoluntarios(): Observable<Voluntarios[]> {
  //   return this.http.get<Voluntarios[]>("../../assets/json/voluntarios-data.json");
  // }
  getVoluntarios(): Observable<Voluntarios[]> {
    return of(this.voluntarios);
  }

  //Method to obtain volunteer data by id
  getVoluntario(id: number): Observable<Voluntarios> {
    const voluntario = this.voluntarios.filter((t) => t.id === id)[0];
    const newVolunteer = Object.assign({}, voluntario);
    return of(newVolunteer);
  }
}
