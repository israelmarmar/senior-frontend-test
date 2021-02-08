export { default as Input } from '../..\\components\\input.vue'
export { default as LocationCard } from '../..\\components\\locationCard.vue'
export { default as OfficeCard } from '../..\\components\\officeCard.vue'

export const LazyInput = import('../..\\components\\input.vue' /* webpackChunkName: "components_input" */).then(c => c.default || c)
export const LazyLocationCard = import('../..\\components\\locationCard.vue' /* webpackChunkName: "components_locationCard" */).then(c => c.default || c)
export const LazyOfficeCard = import('../..\\components\\officeCard.vue' /* webpackChunkName: "components_officeCard" */).then(c => c.default || c)
