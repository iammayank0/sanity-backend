import { Rule } from '@sanity/types'; // Import the Rule type

export default {
  name: 'form',
  title: 'Contact US (messages)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(2).max(50).warning('Name must be between 2 and 50 characters.'),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email().error('Please enter a valid email address.'),
    },
    {
      name: 'number',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(10).max(15).warning('Phone number should be 10 to 15 characters long.'),
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: Rule) => Rule.required().min(1).warning('Please select at least one service.'),
    },
  ],
};
