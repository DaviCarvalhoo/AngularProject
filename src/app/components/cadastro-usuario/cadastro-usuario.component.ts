import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  usuario ={
    nome:'',
    senha:''
  }

  constructor(private usuarioService: UsuarioService){}

onSubmit(){
  this.usuarioService.registrarUsuario(this.usuario).pipe(
    tap(response => {
      alert('Usuário cadastrado com sucesso');
    }),
    catchError(error => {
      alert('Erro ao registrar o usuário: ' + error);
    return of(null);
    })
  ).subscribe();
  }
 }

