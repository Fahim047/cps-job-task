import type { Schema, Struct } from '@strapi/strapi';

export interface LandingStat extends Struct.ComponentSchema {
  collectionName: 'components_landing_stats';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    ans: Schema.Attribute.Text & Schema.Attribute.Required;
    ques: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTopic extends Struct.ComponentSchema {
  collectionName: 'components_shared_topics';
  info: {
    displayName: 'Topic';
  };
  attributes: {
    resourceUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing.stat': LandingStat;
      'shared.faq': SharedFaq;
      'shared.feature': SharedFeature;
      'shared.link': SharedLink;
      'shared.topic': SharedTopic;
    }
  }
}
