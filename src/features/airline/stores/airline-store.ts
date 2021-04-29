import {action, observable, computed, makeObservable} from 'mobx';
import {version, ignore} from 'mobx-sync';
import * as Models from '../models';
import * as Services from '../services';

@version(0.1)
class AirLineStore {
  @observable airLineList?: any[] = [];
  @ignore @observable loading: boolean = false;

  constructor() {
    makeObservable(this);
  }
  @computed get AirLineService() {
    return new Services.AirLineService('');
  }
  @action fetchAirLines() {
    this.AirLineService.getAirLineList().then(res => {
      console.log({res});
      this.loading = false;
      this.airLineList = res;
    });
  }
}

export default AirLineStore;
