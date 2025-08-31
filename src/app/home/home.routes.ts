import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from "./products/products.component";
import { HistoryComponent } from "./history/history.component";
import { SpecialEventsComponent } from "./special-events/special-events.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SpecialEventsDetailsComponent } from "./special-events-details/special-events-details.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

export const homeRoutes: Routes = [
    
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'history',
                component: HistoryComponent
            },
            {
                path: 'events',
                component: SpecialEventsComponent
            },
            {
                path: 'events/:id',
                component: SpecialEventsDetailsComponent
            },
            {
                path: 'products/:id',
                component: ProductDetailsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'contact',
                component: ContactUsComponent
            },
            {
                path: '',
                redirectTo: '/home/dashboard',
                pathMatch: 'full',
            },
            {
                path: '**',
                redirectTo: '/home/dashboard',
                pathMatch: 'full',
            },
        ]
    }

]