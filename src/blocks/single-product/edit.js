import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {
    const blockProps = useBlockProps();

    return (
        <div { ...blockProps }>
            <p>Test single product</p>
        </div>
    );
};

export default Edit;
