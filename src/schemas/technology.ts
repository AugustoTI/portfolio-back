import { defineField, defineType } from 'sanity'

export const technology = defineType({
  name: 'technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon_svg',
      type: 'text',
      title: 'Icon SVG',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
