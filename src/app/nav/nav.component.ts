import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../model/user';
import { TranslateService } from '../service/translate.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: any;
  translate: any;
  selectedLanguage: string = 'huHU';

  constructor(private afAuth: AngularFireAuth,
    private tService: TranslateService) {
      this.translate = this.tService.lastTranslate;
    }

  ngOnInit() {
    this.afAuth.authState.subscribe( user => {
      this.user = user;
    });
    this.tService.translate.subscribe( tr => {
      this.translate = tr;
    });
  }

  onLanguageChanged() {
    this.tService.pushLanguage(this.selectedLanguage);
  }

  onLogout(): void {
    this.afAuth.auth.signOut();
  }
}
