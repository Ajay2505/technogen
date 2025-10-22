
export default function MainCard({ title, icon, children, leftIcon }) {
    return <div className="d-block">
        <div className={`icon-wrap w-fit relative bg-white p-3${leftIcon ? " rounded-br-3xl" : " ml-auto rounded-bl-3xl"}`}>
            <div className="icon_wrapper bg-primary-pink rounded-full w-24 p-3 lg:p-4">
                <img className="invert" src={icon} alt="Vision Icon" />
            </div>
            <div className={`curve ${leftIcon ? "curve-tr" : "curve-tl"}`}>
                <img src="/images/curve.png" alt="Curve" />
            </div>
            <div className={`curve ${leftIcon ? "curve-lb" : "curve-rb"}`}>
                <img src="/images/curve.png" alt="Curve" />
            </div>
        </div>
        <div className="d-content">
            {title &&
                <h3>{title}</h3>
            }
            {children}
        </div>
    </div>
};
