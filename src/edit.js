/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { className, attributes, setAttributes } ) {

	function selectImage(value) {
        console.log(value);
        setAttributes({
            imgUrl: value.sizes.full.url,
        })
    }

	return (
		<div className={ className + ` hetas-dimmed-feature-box`}>
            <InspectorControls>
				<PanelBody
					title="Hot Topic"
					initialOpen={true}
				>
					<PanelRow>
                    <TextControl
                        label="Link To"
                        value={ attributes.linksto }
                        onChange={ ( linkstoval ) => setAttributes( { linksto:linkstoval } ) }
                    />
					</PanelRow>
                    <PanelRow>
                    <MediaUpload 
                        onSelect={selectImage}
                        render={ ({open}) => {
                            return <img 
                                src={attributes.imgUrl}
                                onClick={open}
                                />;
                        }}
                    />
                    </PanelRow>
					<PanelRow>
						<SelectControl
							label="Colour Brand"
							value={attributes.color}
							options={[
								{label: "HETAS Green", value: 'hetas-green'},
								{label: "HETAS Orange", value: 'hetas-orange'},
								{label: "HETAS Red", value: 'hetas-red'},
							]}
							onChange={(newcol) => setAttributes({ color: newcol })}
						/>
					</PanelRow>


                    
				</PanelBody>
                
			</InspectorControls>
            <a href={ attributes.linksto } class="href"></a>
            <div className={`colored centered covered ${attributes.color}`}></div>
            <img src={attributes.imgUrl} alt="HETAS hot topic related image" className={`noclass`} />
            <div class="centered">
                <RichText
                    value={ attributes.content } // Any existing content, either from the database or an attribute default
                    formattingControls={ [ 'bold', 'italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                    onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
                    placeholder={ __( 'Hot topic...' ) } // Display this text before any content has been added by the user
                />
                <div className={`pane ${attributes.color}`}></div>
            </div>
        </div>

	);
}
