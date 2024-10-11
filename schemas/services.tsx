export default {
  name: 'services',
  title: 'Services',
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
      name: 'link',
      title: 'Link',
      type: 'slug',
      options: { source: 'title' }
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
