export default function (plop) {
	plop.setGenerator('component', {
		description: 'Generate a new component with a story',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the component?'
			},
			{
				type: 'input',
				name: 'description',
				message: 'Enter a description for the component?'
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/stories/{{titleCase name}}/{{pascalCase name}}.tsx',
				templateFile: 'plop-templates/Component.tsx.hbs'
			},
			{
				type: 'add',
				path: 'src/stories/{{titleCase name}}/{{pascalCase name}}.stories.tsx',
				templateFile: 'plop-templates/Component.story.tsx.hbs'
			},
		],
	});
};