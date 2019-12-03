import { connect, } from 'react-redux';

import { actions, selectors, } from 'src/stores';
import ListMenu from './ListMenu';

const mapStateToProps = (state, { categoryId, merchantId, }) => {
  //TODO: SET action for getApi list menu by MerchantId and categoryid
  const isLoading = selectors.menu.getLoadingStatus(state);
  const results = selectors.menu.getListMenuByCategory(state, {
    categoryId,
    merchantId,
  });
  return {
    results,
    isLoading,
  };
};

const mapDispatchToProps = (dispatch, { categoryId, merchantId, }) => ({
  onGetMenu: () =>
    dispatch(actions.menu.getListMenuByCategory({ categoryId, merchantId, })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMenu);
