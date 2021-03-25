import BaseFlowManager from '@at/library/modules/flow-manager';
import PicaDayEvents from './picaday-events';
import {Stores} from '../stores';
import * as Models from '../models';
import {Alert} from 'react-native';

class PicaDayFlows extends BaseFlowManager<Models.PicaDayRouteParams> {}

export default new PicaDayFlows();
