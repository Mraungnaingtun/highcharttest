import { Routes } from '@angular/router';
import { PiechartComponent } from './components/piechart/piechart.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CombinationsComponent } from './components/combinations/combinations.component';
import { BarcharttestComponent } from './components/barcharttest/barcharttest.component';

export const routes: Routes = [
    { path: 'piechart', component: PiechartComponent },
    { path: 'linechart', component: LinechartComponent },
    { path: 'barchart', component: BarchartComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'combination', component: CombinationsComponent },
    { path: 'test', component: BarcharttestComponent },
];
