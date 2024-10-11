export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
      {
        name: 'mail',
        title: 'Mail',
        type: 'string',
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'object',
        fields: [
          {
            name: 'facebook',
            title: 'Facebook',
            type: 'url',
          },
          {
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
          },
          {
            name: 'telegram',
            title: 'Telegram',
            type: 'url',
          },
          {
            name: 'x',
            title: 'X (Twitter)',
            type: 'url',
          },
        ],
      },
    ],
  };
  