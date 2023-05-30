import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit{

  

  selectedTag: string = ''; 
  response: any
  data: any;
  
  constructor(private service: ApiService){ }
  
    ngOnInit(): void {
   
  this.toggleDropdown();
    }

    getData(tag: string) {
      this.service.getDatabyTag(tag).subscribe(
        (data) => {
          this.response = data;
          console.log(data);
        },
        (error) => {
          // Manejar errores
          console.error(error);
        }
      );
    }
  
    getTagName(tag: string): string {
      // Extraer el nombre del tag eliminando el prefijo y el signo de igual utilizando una expresión regular
      const tagName = tag.replace(/.*\?included_tags=(.*)/, '$1');
      return tagName;
    }

    refreshImage() {
      // Obtener el tag seleccionado
      const selectedTag = this.selectedTag;
      
      // Verificar si se ha seleccionado un tag
      if (selectedTag) {
        // Llamar a la función getData() con el tag seleccionado para refrescar los datos
        this.getData(selectedTag);
      }
    }
 

    toggleDropdown() {
      const dropdownButton = document.getElementById('dropdownNavbar1Link');
      const dropdownMenu = document.getElementById('dropdownNavbar1');
    
      if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', () => {
          dropdownMenu.classList.toggle('hidden');
    
          const dropdownButtonRect = dropdownButton.getBoundingClientRect();
          dropdownMenu.style.position = 'absolute';
          dropdownMenu.style.top = `${dropdownButtonRect.bottom}px`;
          dropdownMenu.style.left = `${dropdownButtonRect.left}px`;
        });
    
        document.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;
          const isInsideDropdown = dropdownButton.contains(target) || dropdownMenu.contains(target);
    
          if (!isInsideDropdown) {
            dropdownMenu.classList.add('hidden');
          }
        });
      }
    
       
    }
  }



  