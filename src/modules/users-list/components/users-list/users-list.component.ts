import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, PageEvent} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {UserInterface} from 'src/interfaces';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: MatTableDataSource<UserInterface>;

  pagesCount: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(map(result => result.data))
      .subscribe(response => {
        this.pagesCount = response.total;
        this.userList = new MatTableDataSource(response.users);
      });
  }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['/users'], { queryParams: { page } });
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
