export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'requiredTime',
      title: 'Required time',
      type: 'requiredTime'
    },
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'metadata',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'A short description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          title: 'Ingredient',
          name: 'ingredient',
          type: 'ingredient'
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'featuredImage',
      title: 'Featured image',
      type: 'imageWithAlt'
    },
    {
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [
        {
          title: 'Step',
          name: 'step',
          type: 'step'
        }
      ],
      validation: Rule => Rule.required()
    }
  ]
}
