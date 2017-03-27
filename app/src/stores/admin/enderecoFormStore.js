import {observable,toJS, action} from 'mobx'
import {putJson, getJson} from '../fetch.js'
import config from '../config.js'


export default class EnderecoFormStore {
  @observable endereco = {
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    pontoDeReferencia: '',
    cep: ''
  }
  @observable buttonText = 'Salvar'
  @observable buttonStyle = {}

  @action save(id) {
    putJson(config.url + '/imovel/' + id, {endereco: toJS(this.endereco)})
      .then(() => {
        this.buttonText = 'Salvo'
        this.buttonStyle = {backgroundColor: '#7fc857', color:'white'}

        setTimeout(() => {
          this.buttonText = 'Salvar'
          this.buttonStyle= {}
        },3000)

      })
  }

  @action getEndereco(id) {
    getJson(config.url + '/imovel/' + id).then(imovel => {
      this.endereco = observable(imovel.endereco)
      console.log(this.endereco)
    })
  }
}