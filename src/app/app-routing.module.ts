import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
