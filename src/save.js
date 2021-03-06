/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { className, attributes } ) {

	const {
		linksto,
		color,
		content,
		imgUrl,
	} = attributes;

	return (
		<div className={ className + ` hetas-dimmed-feature-box` }>
            <a href={ linksto } class="href"></a>
            <div className={`colored centered covered ${color}`}></div>
			<img src={imgUrl} className={`noclass`}/>
            <div class="centered">
				<RichText.Content
					value={ content } />
                <div className={`pane ${color}`}></div>
            </div>
        </div>
	);
}
