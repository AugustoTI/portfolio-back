import { defineField, defineType } from 'sanity'

export const social = defineType({
  name: 'social_media',
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
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
