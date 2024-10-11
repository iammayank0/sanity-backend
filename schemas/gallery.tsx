export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image', 
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  