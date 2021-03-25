import {action, observable, computed, makeObservable} from 'mobx';
import {version, ignore} from 'mobx-sync';
import * as Models from '../models';
import * as Services from '../services';

@version(0.1)
class PicaDayStore {
  @observable picaDayList: Models.PicaDay[] = [
    {
      date: 'Jan 18',
      location: 'Pune, India',
      temperature: 34,
      backgroundImage: 'https://picsum.photos/id/237/200/300',
    },
    {
      date: 'Jan 18',
      location: 'Pune, India',
      temperature: 34,
      backgroundImage:
        'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
    },
    {
      date: 'Jan 18',
      location: 'Pune, India',
      temperature: 34,
      backgroundImage: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
    },
    {
      date: 'Jan 18',
      location: 'Pune, India',
      temperature: 34,
      backgroundImage:
        'https://homepages.cae.wisc.edu/~ece533/images/peppers.png',
    },
    {
      date: 'Jan 18',
      location: 'Pune, India',
      temperature: 34,
      backgroundImage: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
    },
    {
      date: 'Jan 18',
      location: 'Pune, India',
      temperature: 34,
      backgroundImage:
        'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
    },
  ];

  constructor() {
    makeObservable(this);
  }
}

export default PicaDayStore;
