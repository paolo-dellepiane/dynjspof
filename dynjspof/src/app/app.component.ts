import { Component } from '@angular/core';
import MagoPlugin from './mago-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '...';
  pluginName = '';

  public async load() {
    try {
      const p: MagoPlugin = new (
        await import(/* webpackIgnore: true */ `./${this.pluginName}.js`)
      ).default();
      this.title = p.title();
    } catch (e) {
      this.title = `error loading ${this.pluginName}`;
      console.error(e);
    }
  }
}
