import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  categories = [
    'All',
    'Walnuts',
    'Almonds',
    'Saffron',
    'Packaging',
    'Kashmir'
  ];

  galleryImages = [
     {
      image: 'assets/images/farmers.png',
      category: 'Kashmir'
    },
    {
      image: 'assets/images/farmer.png',
      category: 'Kashmir'
    },
    {
      image: 'assets/images/kashmir.jpg',
      category: 'Kashmir'
    },
    {
      image: 'assets/images/whywalnuts.png',
      category: 'Walnuts'
    },
    {
      image: 'assets/images/almondgallery.png',
      category: 'Almonds'
    },
    {
      image: 'assets/images/mamra.png',
      category: 'Almonds'
    },
    {
      image: 'assets/images/Almond-Growers.jpg',
      category: 'Almonds'
    },
    {
      image: 'assets/images/kesarg.jpg',
      category: 'Saffron'
    },
    {
      image: 'assets/images/kesargallery.jpg',
      category: 'Saffron'
    },
    {
      image: 'assets/images/kesar.png',
      category: 'Saffron'
    },
    {
      image: 'assets/images/package.png',
      category: 'Packaging'
    },
    {
      image: 'assets/images/delivery.png',
      category: 'Packaging'
    },
  ];

  selectedCategory = 'All';
  filteredImages = [...this.galleryImages];





  filterImages(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredImages = this.galleryImages;
      return;
    }

    this.filteredImages = this.galleryImages.filter(image =>
      image.category === category
    );
  }
}

