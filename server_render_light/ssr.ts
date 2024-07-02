import { DefineComponent } from 'vue'

const resolve = (name: string) => {
  const pages = import.meta.glob<DefineComponent>('../resources/views/emails/**/*.vue')
  return pages[`../resources/views/emails/${name}.vue`]()
}
const resolveComponent = (name: string) =>
  Promise.resolve(resolve(name)).then((module) => module.default || module)

export default function render(name: string) {
  return resolveComponent(name)
}
