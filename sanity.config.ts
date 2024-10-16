import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemas} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Dental Design',

  projectId: 'icbur4is',
  dataset: 'database',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
