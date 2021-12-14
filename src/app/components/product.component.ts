import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges, 
  SimpleChanges, 
  OnInit, 
  DoCheck, 
  OnDestroy
} from "@angular/core";
import { Product } from './../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date()
  constructor(){
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges')
    console.log(changes)
  }
  
  ngOnInit(): void {
    console.log('ngOnInit')    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  addCart(){
    console.log('Agregado')
    this.productClicked.emit(this.product.id)
  }
}