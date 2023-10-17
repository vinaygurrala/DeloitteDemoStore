import { LightningElement } from 'lwc';
import b2b_wakefieldProductImage from '@salesforce/resourceUrl/b2b_wakefieldProductImage';
import communityId from '@salesforce/community/Id';
import USER_ID from "@salesforce/user/Id";
import CartSummaryAdapter from "commerce/cartApi";
export default class B2b_SingleStepCheckoutOrderDetails extends LightningElement {
   //to display the image in the product
    productImages = b2b_wakefieldProductImage;

    connectedCallback() {
        console.log('the community Id ---->',communityId);
          console.log('the user Id ---->',USER_ID);
           console.log('the carttt Id ---->',CartSummaryAdapter);
    }

}