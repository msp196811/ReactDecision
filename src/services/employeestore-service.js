import axios from 'axios'
export default class EmployeeStoreServise {

      data = [
        {
          id: 1,
          sername: 'Иванов',
          name: 'Иван',
          lastName: 'Иванович',
          skils: ['Js','Java','C#','C++'],
          coverImage: 'https://4.bp.blogspot.com/-cI5J1BdwwII/TyZsQwf00gI/AAAAAAAAA6A/UnaLy9XBwz0/s1600/320099_a-esli-ya-v-reale-takoj_demotivators_ru.jpg'},
        {
          id: 2,
          sername: 'Иванов',
          name: 'Иван',
          lastName: 'Иванович',
          skils: ['C','Python','Ruby','Angular'],
          coverImage: 'https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg'
        },
        {
          id: 3,
          sername: 'Иванов',
          name: 'Иван',
          lastName: 'Иванович',
          skils: ['C','Python','Ruby','Angular'],
          coverImage: 'https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg'
        },
        {
          id: 4,
          sername: 'Иванов',
          name: 'Иван',
          lastName: 'Иванович',
          skils: ['C','Python','Ruby','Angular'],
          coverImage: 'https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg'}
      ];


      async getResource(url){
          const res = await fetch(url);
          
          if(!res.ok){
            throw Error(`Could not fetch`);
          }
          return await res.json();
      }

      getEmployees(){
        return this.getResource(`http://localhost:8000/django/`);
      }

      getEmployee(id){
        return this.getResource(`http://localhost:8000/django/${id}`);
      }

      getDecisionMaking(){
        return this.getResource(`http://localhost:8000/employee/`);
      }

      getCoeficients(){
        return this.getResource(`http://localhost:8000/coeficients/`)
      }
}