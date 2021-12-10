import { Injectable } from '@angular/core';
import { AdultosMayores } from '../model/adultos-mayores';

@Injectable({
  providedIn: 'root',
})
export class AdultosMayoresService {
  adultosMayores: AdultosMayores[] = [];
  adultoMayorCounter: number = 11;

  constructor() {
    //Variable that collects the data
    this.adultosMayores = [
      {
        id: 1,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zl2oiPY9DtBnQCo0TvivkQAAAA%26pid%3DApi&f=1',
        first_name: 'Phyllis',
        last_name: 'Lefever',
        gender: 'Female',
        phone: '833-715-5551',
        street_address: '733 Meadow Ridge Point',
        description:
          'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      },
      {
        id: 2,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Wg3ZP_MkCzitlTs8Wu4VfgHaEK%26pid%3DApi&f=1',
        first_name: 'Cory',
        last_name: 'Sussans',
        gender: 'Female',
        phone: '219-521-6295',
        street_address: '8075 Hollow Ridge Place',
        description:
          'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      },
      {
        id: 3,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fxGLHW6wvM4Z5rlRlE5hTQHaDt%26pid%3DApi&f=1',
        first_name: 'Max',
        last_name: 'Adamowicz',
        gender: 'Genderfluid',
        phone: '626-565-9025',
        street_address: '2811 Northport Plaza',
        description:
          'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      },
      {
        id: 4,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yqWDCn7X1czh3tAV4CWNGAHaE7%26pid%3DApi&f=1',
        first_name: 'Allx',
        last_name: 'Zolini',
        gender: 'Genderqueer',
        phone: '585-314-8744',
        street_address: '4 Tony Crossing',
        description:
          'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      },
      {
        id: 5,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Qq4iv1krmb68Wc7K6HYdBgHaE8%26pid%3DApi&f=1',
        first_name: 'Megan',
        last_name: 'Purchon',
        gender: 'Genderqueer',
        phone: '644-739-3194',
        street_address: '738 Havey Court',
        description:
          'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
      },
      {
        id: 6,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nDSJtFiTclE2Pd0yfci-3QHaE7%26pid%3DApi&f=1',
        first_name: 'Sabra',
        last_name: 'Chitham',
        gender: 'Polygender',
        phone: '596-896-6557',
        street_address: '5 Lakewood Gardens Hill',
        description:
          'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      },
      {
        id: 7,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.USzI1bShXrF1LAYHSwtrIwHaFh%26pid%3DApi&f=1',
        first_name: 'Patrizio',
        last_name: "O'Criane",
        gender: 'Polygender',
        phone: '295-890-3175',
        street_address: '183 Alpine Place',
        description:
          'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      },
      {
        id: 8,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.o2TsRAFTZJSJMhzOXW_2ZgHaD2%26pid%3DApi&f=1',
        first_name: 'Linn',
        last_name: 'Patrone',
        gender: 'Non-binary',
        phone: '885-927-5558',
        street_address: '1 Northland Trail',
        description:
          'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      },
      {
        id: 9,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qGSJ8U3LJ9u7IPR1aTyodAHaE8%26pid%3DApi&f=1',
        first_name: 'Coop',
        last_name: 'Trebilcock',
        gender: 'Male',
        phone: '837-810-8430',
        street_address: '9 Monterey Street',
        description:
          'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
      },
      {
        id: 10,
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Eu7WeUvTyK1q5twnXaO9uAHaE7%26pid%3DApi&f=1',
        first_name: 'Jolie',
        last_name: 'Averill',
        gender: 'Non-binary',
        phone: '191-266-1232',
        street_address: '6918 Vernon Center',
        description:
          'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      },
    ];
  }

  //Method to obtain old people data
  public getAdultosMayores(): AdultosMayores[] {
    return this.adultosMayores;
  }

  //Method to obtain old person data by id
  getAdulto(id: number): AdultosMayores {
    const adultoMayor = this.adultosMayores.filter((t) => t.id === id)[0];
    const newOldPerson = Object.assign({}, adultoMayor);
    return newOldPerson;
  }

  saveAdultoMayor(adulto: AdultosMayores): void {
    console.log(adulto)
    if (adulto.id == undefined) {
      adulto.id = this.adultoMayorCounter++;
      console.log(this.adultosMayores);
      this.adultosMayores.push(adulto);
      console.log(this.adultosMayores);
    } else {
      this.deleteAdultoMayor(adulto.id);
      this.adultosMayores.push(adulto);
    }
  }

  public deleteAdultoMayor(id: number) {
    this.adultosMayores = this.adultosMayores.filter(
      (adulto) => adulto.id != id
    );
  }
}
