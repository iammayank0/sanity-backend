export default {
    name: 'about',
    title: 'About Us',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text', 
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
  