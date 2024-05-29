import { Component } from '@angular/core';
import { map, Observable, shareReplay } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrl: './full.component.css'
})
export class FullComponent {
  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches), shareReplay());
  routerActive: string = "activelink";
  sidebarMenu: sidebarMenu[] = [{
    link: "/home/home", icon: "home", menu: "Dashboard",
  },
     {
    link: "/home/button", icon: "disc", menu: "Buttons",
  },
  {
    link: "/home/Formulario", icon: "disc", menu: "Formulario",
  }, {
    link: "/home/forms", icon: "layout", menu: "Forms",
  }, {
    link: "/home/alerts", icon: "info", menu: "Alerts",
  }, {
    link: "/home/grid-list", icon: "file-text", menu: "Grid List",
  }, {
    link: "/home/menu", icon: "menu", menu: "Menus",
  }, {
    link: "/home/table", icon: "grid", menu: "Tables",
  }, {
    link: "/home/expansion", icon: "divide-circle", menu: "Expansion Panel",
  }, {
    link: "/home/chips", icon: "award", menu: "Chips",
  }, {
    link: "/home/tabs", icon: "list", menu: "Tabs",
  }, {
    link: "/home/progress", icon: "bar-chart-2", menu: "Progress Bar",
  }, {
    link: "/home/toolbar", icon: "voicemail", menu: "Toolbar",
  }, {
    link: "/home/progress-snipper", icon: "loader", menu: "Progress Snipper",
  }, {
    link: "/home/tooltip", icon: "bell", menu: "Tooltip",
  }, {
    link: "/home/snackbar", icon: "slack", menu: "Snackbar",
  }, {
    link: "/home/slider", icon: "sliders", menu: "Slider",
  }, {
    link: "/home/slide-toggle", icon: "layers", menu: "Slide Toggle",
  },]

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
