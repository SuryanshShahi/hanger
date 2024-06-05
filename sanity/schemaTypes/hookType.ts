import { defineType, defineField } from 'sanity';

export const hookType = defineType({
    name: 'hookType',
    title: 'Hook Type',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Type Name'
      }),
    ]
  });
  