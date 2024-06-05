import { defineType, defineField } from 'sanity';

export const materialType = defineType({
  name: 'materialType',
  title: 'Material Type',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Material Name'
    }),
    defineField({
        name: 'description',
        type: 'text',
        title: 'Description'
      }),
  ]
});
