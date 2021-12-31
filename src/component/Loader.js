import config from "../config";

// ==============================|| LOADER ||============================== //
const Loader = () => (
    <div id="preloader">
        <div id="status">
            <img src={config.logopath} alt="" />
        </div>
    </div>
);

export default Loader;
