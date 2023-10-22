import { defineArrayMember, defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    }),
    defineField({
      name: 'introduction',
      type: 'array',
      title: 'Introduction',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'profile_picture',
      type: 'image',
      title: 'Profile Picture',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'intro_technologies',
      type: 'array',
      title: 'Introduction Technologies',
      of: [defineArrayMember({ type: 'reference', to: { type: 'technology' } })],
    }),
    defineField({
      name: 'social_medias',
      type: 'array',
      title: 'Social Medias',
      of: [defineArrayMember({ type: 'reference', to: { type: 'social_media' } })],
    }),
    defineField({
      name: 'known_technologies',
      type: 'array',
      title: 'Known Technologies',
      of: [defineArrayMember({ type: 'reference', to: { type: 'technology' } })],
    }),
    defineField({
      name: 'highlight_projects',
      type: 'array',
      title: 'Highlight Projects',
      of: [defineArrayMember({ type: 'reference', to: { type: 'project' } })],
    }),
    defineField({
      name: 'work_experiences',
      type: 'array',
      title: 'Work Experiences',
      of: [defineArrayMember({ type: 'reference', to: { type: 'work_experience' } })],
    }),
  ],
  preview: {
    select: {
      slug: 'slug',
    },
    prepare(selection) {
      const { slug } = selection
      return {
        title: slug.current,
      }
    },
  },
})
