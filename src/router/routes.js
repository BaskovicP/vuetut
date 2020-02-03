import * as cons from '../constants';
import Analysis from '@/components/Analysis/Analysis.vue';
import Home from '@/components/Home.vue';
import Portfolio from '@/components/portfolio/Portfolio.vue';
import StocksList from '@/components/stocks/StocksList.vue';

export const routes = [
  { path: cons.HOME_ROUTE, component: Home },
  { path: cons.PORTFOLIO_ROUTE, component: Portfolio },
  { path: cons.ANALYSIS_ROUTE, component: Analysis },
  { path: cons.STOCKS_ROUTE, component: StocksList }
];
