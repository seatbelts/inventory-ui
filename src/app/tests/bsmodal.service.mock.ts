import { of } from 'rxjs';

export const BsModalServiceMock = {

  show: () => {
    return {
      content: {
        modal$: of(true),
        modalOptions: {}
      },
      hide: () => null
    };
  },
  hide: () => null

};

