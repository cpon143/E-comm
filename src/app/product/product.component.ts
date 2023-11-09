

import { Component } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    quantity: number = 1;

    increaseQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    products = [
        {
            name: 'Product 1',
            description: '1 Year Warranty 8 GB RAM | 256 GB ROM 16.64 cm (6.55 inch) Full HD+ Display',
            price: '$100',
            imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70'
        },
        {
            name: 'Product 2',
            description: '1 Year Warranty 8 GB RAM | 256 GB ROM 16.64 cm (6.55 inch) Full HD+ Display',
            price: '$200',
            imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70'
        },
        {
            name: 'Product 3',
            description: '1 Year Warranty 8 GB RAM | 256 GB ROM 16.64 cm (6.55 inch) Full HD+ Display',
            price: '$300',
            imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70'
        }
    ];
}
