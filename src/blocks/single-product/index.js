import edit from './edit';
import save from './save';
import './style.scss';

wp.blocks.registerBlockType('product-pricing/single-product', {
    title: 'Single Product',
    icon: 'table-col-after',
    category: 'widgets',
    edit,
    save,
});