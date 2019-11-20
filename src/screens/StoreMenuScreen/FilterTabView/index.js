import { connect, } from 'react-redux';

import FilterTabView from './FilterTabView';

const routes = [
  {
    key: '0',
    title: 'coffee',
    menu: [
      {
        name: 'coffee1',
        price: 9900,
      },
      {
        name: 'coffee2',
        price: 7900,
      },
      {
        name: 'coffee3',
        price: 999,
      },
    ],
  },
  {
    key: '1',
    title: 'Milk tea',
    menu: [
      {
        name: 'Milk1',
        price: 9900,
      },
      {
        name: 'Milk2',
        price: 7900,
      },
      {
        name: 'Milk3',
        price: 999,
      },
    ],
  },
  {
    key: '2',
    title: 'Sinh to',
    menu: [
      {
        name: 'sinhto1',
        price: 9900,
      },
      {
        name: 'sinhto2',
        price: 7900,
      },
      {
        name: 'sinhto3',
        price: 999,
      },
    ],
  },
];

const mapStateToProps = () => ({ routes, });

export default connect(mapStateToProps)(FilterTabView);
