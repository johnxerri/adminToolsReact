import React from 'react';
import { withRouter } from "react-router-dom";

const Navbar = withRouter(props =>

        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a href="/" className={(props.location.pathname === "/" || props.location.pathname === null) ? "active nav-link" : "nav-link" } id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
            <a href="/centrex" className={(props.location.pathname === "/centrex") ? "active nav-link" : "nav-link" } id="v-pills-centrex-tab" data-toggle="pill" role="tab" aria-controls="v-pills-centrex" aria-selected="false">Centrex</a>
            <a href="/mobile" className={(props.location.pathname === "/mobile") ? "active nav-link" : "nav-link" } id="v-pills-mobile-tab" data-toggle="pill" role="tab" aria-controls="v-pills-mobile" aria-selected="false">Mobile</a>
            <a href="/multicompte" className={(props.location.pathname === "/multicompte") ? "active nav-link" : "nav-link" } id="v-pills-multicompte-tab" data-toggle="pill" role="tab" aria-controls="v-pills-multicompte" aria-selected="false">Multi-account</a>
            {/* <!-- <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> --> */}
        </div>

);

export default Navbar;