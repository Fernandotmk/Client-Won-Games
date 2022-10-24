module.exports = function (plop) {
  // controller generator

  const pathNames = ['index.tsx', 'stories.tsx', 'styles.ts', 'test.tsx']

  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: function () {
      const actions = pathNames.map((item) => {
        return {
          type: 'add',
          path: `../src/components/{{pascalCase name}}/${item}`,
          templateFile: `templates/${item}.hbs`
        }
      })

      return actions
    }
  })
}
