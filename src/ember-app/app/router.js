import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proka-докум-поставки-l');
  this.route('i-i-s-proka-докум-поставки-e',
  { path: 'i-i-s-proka-докум-поставки-e/:id' });
  this.route('i-i-s-proka-докум-поставки-e.new',
  { path: 'i-i-s-proka-докум-поставки-e/new' });
  this.route('i-i-s-proka-клиенты-l');
  this.route('i-i-s-proka-клиенты-e',
  { path: 'i-i-s-proka-клиенты-e/:id' });
  this.route('i-i-s-proka-клиенты-e.new',
  { path: 'i-i-s-proka-клиенты-e/new' });
  this.route('i-i-s-proka-организация-l');
  this.route('i-i-s-proka-организация-e',
  { path: 'i-i-s-proka-организация-e/:id' });
  this.route('i-i-s-proka-организация-e.new',
  { path: 'i-i-s-proka-организация-e/new' });
  this.route('i-i-s-proka-пункт-погруз-l');
  this.route('i-i-s-proka-пункт-погруз-e',
  { path: 'i-i-s-proka-пункт-погруз-e/:id' });
  this.route('i-i-s-proka-пункт-погруз-e.new',
  { path: 'i-i-s-proka-пункт-погруз-e/new' });
  this.route('i-i-s-proka-пункт-погрузки-l');
  this.route('i-i-s-proka-пункт-погрузки-e',
  { path: 'i-i-s-proka-пункт-погрузки-e/:id' });
  this.route('i-i-s-proka-пункт-погрузки-e.new',
  { path: 'i-i-s-proka-пункт-погрузки-e/new' });
  this.route('i-i-s-proka-список-барж-l');
  this.route('i-i-s-proka-список-барж-e',
  { path: 'i-i-s-proka-список-барж-e/:id' });
  this.route('i-i-s-proka-список-барж-e.new',
  { path: 'i-i-s-proka-список-барж-e/new' });
  this.route('i-i-s-proka-список-контей-l');
  this.route('i-i-s-proka-список-контей-e',
  { path: 'i-i-s-proka-список-контей-e/:id' });
  this.route('i-i-s-proka-список-контей-e.new',
  { path: 'i-i-s-proka-список-контей-e/new' });
  this.route('i-i-s-proka-товары-l');
  this.route('i-i-s-proka-товары-e',
  { path: 'i-i-s-proka-товары-e/:id' });
  this.route('i-i-s-proka-товары-e.new',
  { path: 'i-i-s-proka-товары-e/new' });
  this.route('i-i-s-proka-форм-рез-пост-l');
  this.route('i-i-s-proka-форм-рез-пост-e',
  { path: 'i-i-s-proka-форм-рез-пост-e/:id' });
  this.route('i-i-s-proka-форм-рез-пост-e.new',
  { path: 'i-i-s-proka-форм-рез-пост-e/new' });
  this.route('i-i-s-proka-формир-распред-l');
  this.route('i-i-s-proka-формир-распред-e',
  { path: 'i-i-s-proka-формир-распред-e/:id' });
  this.route('i-i-s-proka-формир-распред-e.new',
  { path: 'i-i-s-proka-формир-распред-e/new' });
});

export default Router;
