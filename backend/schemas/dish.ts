import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of the dish',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of the dish in RUPEES',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    }),
     
  ],
})
