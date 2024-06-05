import { defineType, defineField } from 'sanity';

export const styleType = defineType({
    name: 'styleType',
    title: 'Style Type',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Type Name'
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description'
      }),
    ]
  });
  