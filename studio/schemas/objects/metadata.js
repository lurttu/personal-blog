export default {
    name: 'metadata',
      title: 'Metadata',
      type: 'object',
      fields: [
        {name: 'course', type: 'string', title: 'Course'},
        {name: 'cuisine', type: 'string', title: 'Cuisine'},
        {name: 'keywords', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}, title: 'Keywords'},
        {name: 'servings', type: 'string', title: 'Servings'},
        {name: 'Author', type: 'reference', to: [{type: 'author'}], title: 'Author'},
    ]
}