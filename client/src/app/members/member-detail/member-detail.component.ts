import { Component, OnInit } from '@angular/core';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAction, NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { retry } from 'rxjs';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages : NgxGalleryImage[] = [];
  constructor(private memberService:MembersService, private route: ActivatedRoute ) {
    
  }
  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions=[
      {
        width:'500px',
        height:'500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview : false
      }
    ]

  }
  getImages(){
    if(!this.member) return[];
    const imagesUrls = [];
    for(const photo of this.member.photos)
      {
        imagesUrls.push( {
          small: photo.url,
          medium: photo.url,
          big: photo.url
        })
      }
      return imagesUrls;
  }

  loadMember(){
    var username = this.route.snapshot.paramMap.get('username');
    if(!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => {
        this.member = member;
        this.galleryImages= this.getImages();
      },

    })
  }

}
