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
          caption: i18n.t('forms.application.sitemap.учет-материалов.caption'),
          title: i18n.t('forms.application.sitemap.учет-материалов.title'),
          children: [{
            link: 'i-i-s-proektirovanie-продажи-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-продажи-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-продажи-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proektirovanie-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-сотрудник-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proektirovanie-клиент-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-клиент-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-proektirovanie-перемещение-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-перемещение-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-перемещение-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proektirovanie-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-номенклатура-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proektirovanie-поставщик-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-поставщик-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie-поставщик-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-proektirovanie-поставщик-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie-поставщик-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie-поставщик-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-proektirovanie-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie-сотрудник-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proektirovanie-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie-номенклатура-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proektirovanie-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie-клиент-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документы.caption'),
          title: i18n.t('forms.application.sitemap.документы.title'),
          children: [{
            link: 'i-i-s-proektirovanie-перемещение-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-proektirovanie-перемещение-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-proektirovanie-перемещение-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-proektirovanie-продажи-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-proektirovanie-продажи-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-proektirovanie-продажи-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})