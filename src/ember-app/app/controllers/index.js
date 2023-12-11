import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proka.caption'),
          title: i18n.t('forms.application.sitemap.proka.title'),
          children: [{
            link: 'i-i-s-proka-формир-распред-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-формир-распред-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-формир-распред-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proka-список-контей-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-список-контей-l.title'),
            children: null
          }, {
            link: 'i-i-s-proka-организация-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-организация-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-proka-форм-рез-пост-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-форм-рез-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-форм-рез-пост-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proka-товары-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-товары-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-proka-клиенты-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-клиенты-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-proka-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-пункт-погрузки-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proka-докум-поставки-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-докум-поставки-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-докум-поставки-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proka-пункт-погруз-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-пункт-погруз-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-пункт-погруз-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-proka-список-барж-l',
            caption: i18n.t('forms.application.sitemap.proka.i-i-s-proka-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.proka.i-i-s-proka-список-барж-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})