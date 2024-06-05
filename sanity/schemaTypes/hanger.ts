import { defineType, defineField } from 'sanity';

export const hanger = defineType({
  name: 'hanger',
  title: 'Hanger',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Hanger Name'
    }),
    defineField({
      name: 'item_code',
      type: 'string',
      title: 'Item Code'
    }),
    defineField({
      name: 'styletype',
      type: 'array',
      of: [{ type: 'reference', to: [{type: 'styleType'}] }],
      title: 'Style Type'
    }),
    defineField({
      name: 'specialty',
      type: 'array',
      title: 'Speciality Type',
      of: [{ type: 'reference', to: [{type: 'specialtyHangerType'}] }],
      description: 'If hanger has speciality, choose from list'
    }),
    defineField({
      name: 'material',
      type: 'reference',
      title: 'Material Used',
      to: [{type: 'materialType'}] ,
      description: 'Select Hanger Material'
    }),
    defineField({
      name: 'hook',
      type: 'array',
      title: 'Hook Type',
      of: [{ type: 'reference', to: [{type: 'hookType'}] }],
      description: 'Select one or more hook type for the hanger.'
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image' }]
    }),
    defineField({
      name: 'length',
      type: 'number',
      title: 'Length'
    }),
    defineField({
      name: 'height',
      type: 'number',
      title: 'Height'
    })
  ]
});
