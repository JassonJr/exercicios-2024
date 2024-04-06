import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dev Chuva';
  isCollapsed: boolean = true;
  showReadMore: boolean = true;
  answeredComment: boolean = false;
  expandComments: boolean = false;
  showForm: boolean = false;
  topicFeedback = false;

  //expande e diminui o resumo
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  //mostra o formulário para criar um novo tópico
  toggleForm() {
    this.showForm = !this.showForm;
  }

  //prevenção para o formulário não ser enviado de forma padrão
  submitForm(event: Event): void {
    event.preventDefault();
    this.toggleFeedback();
  }
  //mostra a mensagem esperada após o formulário ser enviado
  toggleFeedback() {
    this.showForm = !this.showForm;
    this.topicFeedback = !this.topicFeedback;
  }

  //mostra os comentários ao clicar num tópico
  toggleComments() {
    this.answeredComment = !this.answeredComment;
    this.expandComments = !this.expandComments;
  }
}
