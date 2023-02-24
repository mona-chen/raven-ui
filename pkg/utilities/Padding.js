import React from 'react'


function Padding() {
  return (
    <div>
        <p className="text-lg text-underline mb-10 font-600">
            Introduction:
        </p>
        <p className="text-sm wp-60">
        In this utility framework, padding is an important aspect of the design system and is implemented using the rem unit for its underlying implementation, but with pixel-based accuracy.
        </p>

        <p className="text-lg text-underline mb-10 font-600">
            Sizing:
        </p>
        <p className="text-sm wp-60">
        This system uses 4pt sizing, meaning that all padding values are multiples of 4, such as 4px, 8px, 12px, etc. 
        The padding values are implemented using rems, but with pixel accuracy. This means that when you specify a padding value in pixels, it will be converted to rems in the background for better responsiveness.
        </p>

        <p className="text-lg text-underline mb-10 font-600">
            Padding Utilites:
        </p>
        <p className="text-sm wp-60">
        TThe padding utilities are prefixed with "p-" and come in various forms to cater to different padding needs.
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
        <div text-md class="text-sm p-30">This element has a padding of 30px on all sides</div>
<div class="text-sm pl-20 pr-10">This element has a padding of 20px on the left and 10px on the right</div>
<div class="text-sm pt-15 pb-5">This element has a padding of 15px on the top and 5px on the bottom</div>
<div class="text-sm px-10 py-5">This element has a padding of 10px on the horizontal sides and 5px on the vertical sides</div>

    </div>
  )
}

export default Padding