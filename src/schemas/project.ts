import { defineArrayMember, defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'text',
      title: 'Short Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'github_url',
      type: 'url',
      title: 'Github URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'live_project_url',
      type: 'url',
      title: 'Live Project URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [defineArrayMember({ type: 'reference', to: { type: 'technology' } })],
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'page_thumbnail',
      type: 'image',
      title: 'Page Thumbnail',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sections_preview',
      type: 'array',
      title: 'Sections Preview',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title of section',
            }),
            defineField({
              name: 'image_preview',
              type: 'image',
              title: 'Image preview',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],
})
