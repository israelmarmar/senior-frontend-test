import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faPlus as fortawesomefreesolidsvgicons_faPlus } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faPlus)

    import  { faChevronDown as fortawesomefreesolidsvgicons_faChevronDown } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faChevronDown)

    import  { faTimes as fortawesomefreesolidsvgicons_faTimes } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faTimes)

    import  { faPen as fortawesomefreesolidsvgicons_faPen } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faPen)

    import  { faTrashAlt as fortawesomefreeregularsvgicons_faTrashAlt } from '@fortawesome/free-regular-svg-icons'
    library.add(fortawesomefreeregularsvgicons_faTrashAlt)

    import  { faExclamationCircle as fortawesomefreesolidsvgicons_faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faExclamationCircle)

    import  { faCheck as fortawesomefreesolidsvgicons_faCheck } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faCheck)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)
