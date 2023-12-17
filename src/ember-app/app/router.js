import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proektirovanie-клиент-l');
  this.route('i-i-s-proektirovanie-клиент-e',
  { path: 'i-i-s-proektirovanie-клиент-e/:id' });
  this.route('i-i-s-proektirovanie-клиент-e.new',
  { path: 'i-i-s-proektirovanie-клиент-e/new' });
  this.route('i-i-s-proektirovanie-номенклатура-l');
  this.route('i-i-s-proektirovanie-номенклатура-e',
  { path: 'i-i-s-proektirovanie-номенклатура-e/:id' });
  this.route('i-i-s-proektirovanie-номенклатура-e.new',
  { path: 'i-i-s-proektirovanie-номенклатура-e/new' });
  this.route('i-i-s-proektirovanie-перемещение-l');
  this.route('i-i-s-proektirovanie-перемещение-e',
  { path: 'i-i-s-proektirovanie-перемещение-e/:id' });
  this.route('i-i-s-proektirovanie-перемещение-e.new',
  { path: 'i-i-s-proektirovanie-перемещение-e/new' });
  this.route('i-i-s-proektirovanie-поставщик-l');
  this.route('i-i-s-proektirovanie-поставщик-e',
  { path: 'i-i-s-proektirovanie-поставщик-e/:id' });
  this.route('i-i-s-proektirovanie-поставщик-e.new',
  { path: 'i-i-s-proektirovanie-поставщик-e/new' });
  this.route('i-i-s-proektirovanie-продажи-l');
  this.route('i-i-s-proektirovanie-продажи-e',
  { path: 'i-i-s-proektirovanie-продажи-e/:id' });
  this.route('i-i-s-proektirovanie-продажи-e.new',
  { path: 'i-i-s-proektirovanie-продажи-e/new' });
  this.route('i-i-s-proektirovanie-сотрудник-l');
  this.route('i-i-s-proektirovanie-сотрудник-e',
  { path: 'i-i-s-proektirovanie-сотрудник-e/:id' });
  this.route('i-i-s-proektirovanie-сотрудник-e.new',
  { path: 'i-i-s-proektirovanie-сотрудник-e/new' });
});

export default Router;
