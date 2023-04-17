import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert('votre produit a bien été ajouté au panier!');
  }

  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService
    ){}
  ngOnInit() {
  // First get the product id from the current route.
  //Obtenez d'abord l'identifiant du produit à partir de la route actuelle.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  //Trouvez le produit qui correspond à l'identifiant fourni dans la route
  this.product = products.find(product => product.id === productIdFromRoute);
} 
}
