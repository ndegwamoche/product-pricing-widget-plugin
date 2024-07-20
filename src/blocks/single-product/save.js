import { useBlockProps } from '@wordpress/block-editor';

const Save = () => {
    const blockProps = useBlockProps.save();

    return (
        <div { ...blockProps }>
            <p>{ __('Pricing Table', 'product-pricing') }</p>
        </div>
    );
};

export default Save;
