import React from 'react'

function Text() {
  return (
    <div>
      
        <p className="text-lg text-underline mb-10 font-600">
            Sizing:
        </p>
        <p className="text-sm wp-60">
        The text utility system uses both 4pt sizing and hierachy levels, for 4pt sizing the same applying to margin and padding also applies to the font
        whilst for the hierachy level it ranges from xs to xl.
        </p>

        <p className="text-lg text-underline mb-10 font-600">
            Text Utilites:
        </p>
        <p className="text-sm wp-60">
        The text utilities  prefixes are "text" and "font", both come in various forms to cater to different fonts and text needs.
        </p>
        
        <li className="text-sm mt-30"> <b>p-:</b> Padding on all sides. Example: p-20 will give 20px padding on all sides.</li>
        <li className="text-sm mt-10"> <b>pl-:</b> Padding left. Example: pl-20 will give 20px padding on the left side</li>
        <li className="text-sm mt-10"> <b>pr-:</b> Padding right. Example: pr-20 will give 20px padding on the right side.</li>
        <li className="text-sm mt-10"> <b>pt-:</b>Padding top. Example: pt-20 will give 20px padding on the top side.</li>
        <li className="text-sm mt-10"> <b>pb-:</b> Padding bottom. Example: pb-20 will give 20px padding on the bottom side.</li>
        <li className="text-sm mt-10"> <b>px-:</b> Horizontal padding. Example: px-20 will give 20px padding on the left and right sides.</li>
        <li className="text-sm mt-10"> <b>py-:</b> Vertical padding. Example: py-20 will give 20px padding on the top and bottom sides.</li>

        <p className="mt-30"><b>Note:</b> The size of the padding can be changed from the default 4pt sizing by using different values such as 8px, 12px, etc.</p>

        <p className="text-lg text-underline mb-10 mt-20 font-600">
            Examples:
        </p>
        <p className="mt-20 mb-20 font-b text-md">Text Alignment</p>
        <p className="text-sm wp-60">
        The following are utilities classes for the css "text-align" property.
        </p>
        <li className="text-sm mt-30"> <b>text-center:</b> This will set the text align property to center, which will center text relative to it parent container</li>
        <li className="text-sm mt-10"> <b>text-start:</b> This will set the text align property to start, which will force the text to align to the beginning left relative to it parent container </li>
        <li className="text-sm mt-10"> <b>text-end:</b> This will set the text align property to end, which will force the text to align to the very end/edge right relative to it parent container.</li>
        <li className="text-sm mt-10"> <b>text-left-:</b> This will set the text align property to the left, which will force the text to align to the left relative to it parent container.</li>
        <li className="text-sm mt-10"> <b>text-right-:</b> This will set the text align property to right, which will force the text to align to the right relative to it parent container.</li>
        <li className="text-sm mt-10"> <b>text-justify:</b> This will set the text align property to justify, which will force the  text to justify by adding space between words (effectively varying word-spacing )</li>

        <p className="mt-20 mb-20 font-b text-md">Text Decoration</p>
        <p className="text-sm wp-60">
        The following are utilities classes for the css "text-decoration" property.
        </p>
        <li className="text-sm mt-30"> <b>text-dashed:</b> This will set the <code>text-decoration</code> property to <code>dashed</code>, which will create a dashed line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-underline:</b> This will set the <code>text-decoration</code> property to <code>underline</code>, which will create an underline decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-wavy:</b> This will set the <code>text-decoration</code> property to <code>wavy</code>, which will create a wavy line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-dotted:</b> This will set the <code>text-decoration</code> property to <code>dotted</code>, which will create a dotted line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-double:</b> This will set the <code>text-decoration</code> property to <code>double</code>, which will create a double line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-line-through:</b> This will set the <code>text-decoration</code> property to <code>line-through</code>, which will create a line through decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-solid:</b> This will set the <code>text-decoration</code> property to <code>solid</code>, which will create a solid line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-none:</b> This will remove any text decoration for the text.</li>

        <p className="mt-20 mb-20 font-b text-md">Text Decoration</p>
        <p className="text-sm wp-60">
        The following are utilities classes for the css "text-decoration" property.
        </p>
        <li className="text-sm mt-30"> <b>text-dashed:</b> This will set the <code>text-decoration</code> property to <code>dashed</code>, which will create a dashed line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-underline:</b> This will set the <code>text-decoration</code> property to <code>underline</code>, which will create an underline decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-wavy:</b> This will set the <code>text-decoration</code> property to <code>wavy</code>, which will create a wavy line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-dotted:</b> This will set the <code>text-decoration</code> property to <code>dotted</code>, which will create a dotted line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-double:</b> This will set the <code>text-decoration</code> property to <code>double</code>, which will create a double line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-line-through:</b> This will set the <code>text-decoration</code> property to <code>line-through</code>, which will create a line through decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-solid:</b> This will set the <code>text-decoration</code> property to <code>solid</code>, which will create a solid line decoration for the text.</li>
        <li className="text-sm mt-10"> <b>text-none:</b> This will remove any text decoration for the text.</li>
    </div>
  )
}

export default Text