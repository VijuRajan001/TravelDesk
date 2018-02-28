import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatSidenav, MatMenuModule } from '@angular/material';
import { UserService } from '../../../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements AfterViewInit {

    @ViewChild('snav')
    snav: MatSidenav;


    mobileQuery: MediaQueryList;
    fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);


    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private renderer: Renderer2,private router : Router,
        private userService: UserService) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

    }

    

    ngAfterViewInit(): void {

        if (this.mobileQuery.matches) {
            this.snav.close();
        }
    }
    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    signout() {
        this.userService.logout();
        this.router.navigateByUrl('/login');
    }
}
