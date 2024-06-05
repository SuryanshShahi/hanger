import { defineType, defineField } from 'sanity';

export const specialtyHangerType = defineType({
    name: 'specialtyHangerType',
    title: 'Specialty Hanger Type',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Specialty Type Name'
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description'
      }),
    ]
  });
  