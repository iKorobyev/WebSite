import loadable from '@loadable/component'

export const Alert = loadable(() => import('./Alert'))
export const Menu = loadable(() => import('./Menu'))
export const ListBox = loadable(() => import('./ListBox'))
export const Disclosure = loadable(() => import('./Disclosure'))
export const Dialog = loadable(() => import('./Dialog'))
export const Popover = loadable(() => import('./Popover'))
export const Drawer = loadable(() => import('./Drawer'))
export const LayoutDrawer = loadable(() => import('./LayoutDrawer'))
export const Loader = loadable(() => import('./Loader'))

export const Form = loadable(() => import('./Form'))
// export const SubscribeFormModal = loadable(() => import('./SubscribeFormModal'))
export const  SubscribeFormModal = loadable(()=> import('./SubscribeFormModal'))
export const LabelField = loadable(() => import('./LabelField'))
export const FormField = loadable(() => import('./FormField'))
export const Modal = loadable(() => import('./Modal'))


export * from './Modal'
export * from './Alert'
export * from './Menu'
export * from './ListBox'
export * from './Disclosure'
export * from './Dialog'
export * from './Popover'
export * from './Drawer'
export * from './LayoutDrawer'
export * from './Loader'
export * from './SubscribeFormModal'
export * from './Form'
export * from './FormField'
