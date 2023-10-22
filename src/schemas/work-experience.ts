import { defineArrayMember, defineField, defineType } from 'sanity'

export const work_experience = defineType({
  name: 'work_experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company_name',
      type: 'string',
      title: 'Company Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company_url',
      type: 'url',
      title: 'Company URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company_logo',
      type: 'image',
      title: 'Company Logo',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      type: 'array',
      title: 'Introduction',
      of: [defineArrayMember({ type: 'block' })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [defineArrayMember({ type: 'reference', to: { type: 'technology' } })],
    }),
    defineField({
      name: 'start_date',
      type: 'date',
      title: 'Start Date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'end_date',
      type: 'date',
      title: 'End Date',
    }),
  ],
})
