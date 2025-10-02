import type { Schema, Struct } from '@strapi/strapi';

export interface SharedTopic extends Struct.ComponentSchema {
  collectionName: 'components_shared_topics';
  info: {
    displayName: 'Topic';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.topic': SharedTopic;
    }
  }
}
