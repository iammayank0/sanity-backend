export default {
    name: 'compare',
    title: 'Compare Images',
    type: 'document',
    fields: [
      {
        name: 'firstimage', 
        title: 'First Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'secondimage', 
        title: 'Second Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  