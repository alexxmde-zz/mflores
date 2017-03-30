import { observable, action } from 'mobx'
import config from '../config.js'
import {getJson} from '../fetch.js'

export default class homePageStore {
  @observable imoveisCarrossel = []
  @observable imoveisHomepage = []
  @observable imovelPrincipal = {}


  @action getImoveisCarrossel() {
    getJson(config.url + '/imoveisCarrossel').then(json => {
      this.imoveis = json
      })
  }
  @action getImoveisHomepage() {
      getJson(config.url + '/imoveisHomepage').then(imoveis => {
        this.imoveisHomepage = imoveis
      })
    }
  @action getImovelPrincipal() {
    getJson(config.url + '/imovelPrincipal').then(imovel => {
      this.imovelPrincipal = imovel
    })
  }




}
