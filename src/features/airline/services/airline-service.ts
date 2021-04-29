//import * as Models from '../models';
import BaseService from '@at/library/modules/base-service';

class AirLineService extends BaseService {
  getAirLineList = () =>
    new Promise<any>((resolve, reject) => {
      try {
        this.client
          .get('/uploads/dummy-response.json')
          .then((res: any) => {
            const list: any[] = res.data;
            const result: Array<any> = [];
            const arrDate = list.reduce(function (r: any, a: any) {
              const keyDate = a.Date || 'Date';
              r[keyDate] = r[keyDate] || [];
              r[keyDate].push(a);
              return r;
            }, Object.create(null));
            Object.values(arrDate).forEach((item: any, index: any) => {
              const date = Object.keys(arrDate)[index];
              result.push({date, data: item});
            });
            //console.log({arrDate});
            resolve(result);
            return;
          })
          .catch(error => {
            reject({error});
          });
      } catch (error) {}
    });
}

export default AirLineService;
