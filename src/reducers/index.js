import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProductFormReducer from './Products/ProductFormReducer';
import ProductReducer from './Products/ProductReducer';

import CategoryFormReducer from './Categories/CategoryFormReducer';
import CategoryReducer from './Categories/CategoryReducer';

import CommentFormReducer from './Comments/CommentFormReducer';
import CommentReducer from './Comments/CommentReducer';

import ImageFormReducer from './Images/ImageFormReducer';
import ImageReducer from './Images/ImageReducer';

import InteractionFormReducer from './Interactions/InteractionFormReducer';
import InteractionReducer from './Interactions/InteractionReducer';

import InvoiceFormReducer from './Invoices/InvoiceFormReducer';
import InvoiceReducer from './Invoices/InvoiceReducer';

import NotificationFormReducer from './Notifications/NotificationFormReducer';
import NotificationReducer from './Notifications/NotificationReducer';

import PublicationFormReducer from './Publications/PublicationFormReducer';
import PublicationReducer from './Publications/PublicationReducer';

import UserFormReducer from './User/UserFormReducer';
import UserReducer from './User/UserReducer';

export default combineReducers({
    auth: AuthReducer,
    productForm: ProductFormReducer,
    products: ProductReducer,
    categoryForm: CategoryFormReducer,
    categories: CategoryReducer,
    commentForm: CommentFormReducer,
    comments: CommentReducer,
    imageForm: ImageFormReducer,
    images: ImageReducer,
    interactionForm: InteractionFormReducer,
    interactions: InteractionReducer,
    invoiceForm: InvoiceFormReducer,
    invoices: InvoiceReducer,
    notificationForm: NotificationFormReducer,
    notifications: NotificationReducer,
    publicationForm: PublicationFormReducer,
    publications: PublicationReducer,
    userForm: UserFormReducer,
    users: UserReducer
});
