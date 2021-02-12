import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faVoteYea,faPoll} from '@fortawesome/free-solid-svg-icons'

library.add(faVoteYea,faPoll)

Vue.component('font-awesome-icon', FontAwesomeIcon);