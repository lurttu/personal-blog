export default {
    title: 'Ingredient',
    name: 'ingredient',
    type: 'object',
    fields : [
        {name: 'amount', type: 'number', title: 'Amount'},
        {name: 'unit', type: 'string', title: 'Unit'},
        {name: 'ingredientName', type: 'string', title: 'Ingredient name'}
    ],
    preview: {
        select: {
          title: 'ingredientName',
          unit: 'unit',
          amount: 'amount',
        },
        prepare(selection) {
            const {title, unit, amount} = selection
            return {
              title: title,
              subtitle: amount + ' ' + unit
            }
        }
    },
}