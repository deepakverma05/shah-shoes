import Filter from '../';
import Root from '../../../../Root';
import React from 'react';

const initialState = {
  filters: {
    items: ['XS', 'S']
  }
};

it('mounts without crashing', () => {
  const wrapped = mount(
    <Root initialState={initialState}>
      <Filter filterText={"test"} filterArray={['XS','S']} />
    </Root>
  );
  wrapped.unmount();
});
