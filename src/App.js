// import logo from './logo.svg';
// import "./css/index.css";
import ToolTips from "./component-folder/ToolTips";
import CheckBox from "./component-folder/CheckBox";
import ToogleSlide from "./component-folder/ToogleSlide";
import BreadCrumbs from "./component-folder/BreadCrumbs";
import ActionBar from "./component-folder/ActionBar";
import Toasts from "./component-folder/Toasts";
import TabsAndTabLinks from "./component-folder/TabsAndTabLinks";
import Buttons from "./component-folder/Buttons";
import DropDowns from "./component-folder/DropDowns";
import InputFields from "./component-folder/InputFields";
import RadioCheck from "./component-folder/RadioCheck";
import Padding from "./utilities/Padding";
import Margin from './utilities/Margin';

function App() {
  return (
    <div>
      <nav className="navbar-primary text-white mb-40">
        <div className="container">
          <h3 className="site-title">Raven CSS</h3>
          <p>A lightweight CSS framework for Raven Bank</p>
        </div>
      </nav>
      <div className="container">
        <h4 className="text-dark ">A lightweight CSS framework for Raven Bank</h4>

        <hr className="mt-40 mb-40" />

        {/* <!-- buttons --> */}
        <h3 className="mb-20">Buttons</h3>

       <Buttons />

        <hr className="mt-40 mb-40" />
        <h3 className="mb-20">Tabs & Tablinks</h3>
        <TabsAndTabLinks />
        <hr className="mt-40 mb-40" />
        <h3 className="mb-20">Toasts</h3>
        <Toasts />
        <hr className="mt-40 mb-40" />
        {/* <!-- Action Bars --> */}
        <h3 className="mb-20">Action Bars</h3>
        <ActionBar />
        <hr className="mt-40 mb-40" />

        <h3 className="mb-20">Breadcrumbs</h3>
        <BreadCrumbs />

        <hr className="mt-40 mb-40" />
        <h3 className="mb-20">Checkbox</h3>
        <CheckBox />

        <hr className="mt-40 mb-40" />
        <h3 className="mb-20">Radio Check</h3>
        <RadioCheck />

        <hr className="mt-40 mb-40" />
        <h3 className="mb-20">Toggle Slide</h3>
        <ToogleSlide />

        <hr className="mt-40 mb-40" />
        <h3 className="mb-40">Tooltips</h3>
        <ToolTips />

        <hr className="mt-40 mb-40" />
        <h3 className="mb-20">Dropdown</h3>
        <DropDowns />
        <hr className="mt-40 mb-40" />

        <h3 className="mb-20">Input Fields</h3>
        <InputFields />
        <hr className="mt-40 mb-40" />

        <h3 className="mb-20">Utilities</h3>
        <hr className="mt-40 mb-40" />
        <h5 className="mb-1">Padding</h5>
        <Padding />
        <hr className="mt-40 mb-40" />
        <h5 className="mb-1">Margin</h5>
        <Margin />
      </div>
    </div>
  );
}

export default App;
