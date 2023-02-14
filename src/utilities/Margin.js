import React from 'react'


function Margin() {
  return (
    <div>
        <p className="text-lg text-underline mb-10 font-600">
            Introduction:
        </p>
        <p className="text-sm wp-60">
        In this utility framework, margin is an important aspect of the design system and is implemented using the rem unit for its underlying implementation, but with pixel-based accuracy.
        </p>

        <p className="text-lg text-underline pb-10 font-600">
            Sizing:
        </p>
        <p className="text-sm wp-60">
        This system uses 4pt sizing, meaning that all margin values are multiples of 4, such as 4px, 8px, 12px, etc. 
        The margin values are implemented using rems, but with pixel accuracy. This means that when you specify a margin value in pixels, it will be converted to rems in the background for better responsiveness.
        </p>

        <p className="text-lg text-underline pb-10 font-600">
            Margin Utilites:
        </p>
        <p className="text-sm wp-60">
        TThe margin utilities are prefixed with "m-" and come in various forms to cater to different margin needs.
        </p>
        
        <li className="text-sm mt-30"> <b>m-:</b> Margin on all sides. Example: m-20 will give 20px margin on all sides.</li>
        <li className="text-sm mt-10"> <b>ml-:</b> Margin left. Example: ml-20 will give 20px margin on the left side</li>
        <li className="text-sm mt-10"> <b>mr-:</b> Margin right. Example: mr-20 will give 20px margin on the right side.</li>
        <li className="text-sm mt-10"> <b>mt-:</b>Margin top. Example: mt-20 will give 20px margin on the top side.</li>
        <li className="text-sm mt-10"> <b>mb-:</b> Margin bottom. Example: mb-20 will give 20px margin on the bottom side.</li>
        <li className="text-sm mt-10"> <b>mx-:</b> Horizontal margin. Example: mx-20 will give 20px margin on the left and right sides.</li>
        <li className="text-sm mt-10"> <b>my-:</b> Vertical margin. Example: my-20 will give 20px margin on the top and bottom sides.</li>

        <p className="mt-30"><b>Note:</b> The size of the margin can be changed from the default 4pt sizing by using different values such as 8px, 12px, etc.</p>

        <p className="text-lg text-underline mb-10 mt-20 font-600">
            Examples:
           
        </p>
        <div text-md class="text-sm m-30">This element has a margin of 30px on all sides</div>
<div class="text-sm ml-20 mr-10">This element has a margin of 20px on the left and 10px on the right</div>
<div class="text-sm mt-15 mb-5">This element has a margin of 15px on the top and 5px on the bottom</div>
<div class="text-sm mx-10 my-5">This element has a margin of 10px on the horizontal sides and 5px on the vertical sides</div>

    </div>
  )
}

export default Margin