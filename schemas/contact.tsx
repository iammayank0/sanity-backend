import { Rule } from '@sanity/types';

export default {
    name: 'contactinfo',
    title: 'Contact Information',
    type: 'document',
    fields: [
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'phone1',
        title: 'Phone 1',
        type: 'string',
      },
      {
        name: 'phone2',
        title: 'Phone 2',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule : Rule) => Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { name: 'email' }).error('Invalid email format'),
      },
      {
        name: 'website',
        title: 'Website',
        type: 'url',
      },
    ],
  };
  