import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.page.html',
  styleUrls: ['./list-search.page.scss'],
})
export class ListSearchPage implements OnInit {

  public filters = {
    MatNo: '',
    Base: ''
  };

  constructor(public activeRoute: ActivatedRoute, public router: Router) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.filters = JSON.parse(params['searchFilters']);
       console.log (this.filters);
    });



  }

  adSearch() {
    // this.filters.MatNo = '1';
    // this.filters.Base = '2';
    this.router.navigate(['/list'], {
      queryParams: {
        backFilters: JSON.stringify(this.filters)
      }
    });
  }

  ngOnInit() {
  }

}
