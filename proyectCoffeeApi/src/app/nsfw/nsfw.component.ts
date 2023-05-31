import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-nsfw',
  templateUrl: './nsfw.component.html',
  styleUrls: ['./nsfw.component.css']
})
export class NsfwComponent {

  selectedTag: string = ''; 
  anonymous = 'Anonym';
  response: any
  data: any;
  
  constructor(private afAuth: AngularFireAuth, private router: Router, private service: ApiService) { }



  ngOnInit() {
    this.toggleDropdown();
    this.checkAuthentication();

 
  }

  checkAuthentication() {
    this.afAuth.authState.subscribe((user) => {
      if (!user) {
        // Usuario no autenticado, redirige al componente de inicio de sesión
        this.router.navigate(['/login']);
      } else {
        // Acciones a realizar si el usuario está autenticado
        // ...
      }
    });
  }


getTagName(tag: string): string {
  // Extraer el nombre del tag eliminando el prefijo y el signo de igual utilizando una expresión regular
  const tagName = tag.replace(/.*\?included_tags=(.*)/, '$1');
  return tagName;
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
  const dropdownButton = document.getElementById('dropdownNavbarLink');
  const dropdownMenu = document.getElementById('dropdownNavbar');

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

