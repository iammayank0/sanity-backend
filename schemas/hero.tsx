export default {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Sub Title',
        type: 'string',
      },
      {
        name: 'image', 
        title: 'Page BG',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  