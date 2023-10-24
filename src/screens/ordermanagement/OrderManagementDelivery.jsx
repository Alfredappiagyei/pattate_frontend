import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { SidebarFalse } from "../../components/SidebarFalse";
import { IconLineCustomer } from "../../icons/IconLineCustomer";
import { IconLineDashboard1 } from "../../icons/IconLineDashboard1";
import { IconLineDiscount3 } from "../../icons/IconLineDiscount3";
import { IconLineHome3 } from "../../icons/IconLineHome3";
import { IconLineLogOut1 } from "../../icons/IconLineLogOut1";
import { IconLineNotification1 } from "../../icons/IconLineNotification1";
import { IconLineOrder } from "../../icons/IconLineOrder";
import { IconLineSetting2 } from "../../icons/IconLineSetting2";
import "./OrderManagementDelivery.css";

import { Link } from "react-router-dom";

const OderManagementDelivery = () => {
  return (
    <div className="delivery">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Order Delivery</div>
          <Link to="/ordermanagementLive">
          <button className="button">
            <div className="select-vendor">Live Orders</div>
          </button>
          <div className="rectangle-3" />
          <img
            className="food-delivery"
            alt="Food delivery"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/food-delivery-3140884-3.png"
          />
          </Link>
        </div>
        <div className="overlap-2">
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <SidebarFalse
                className="sidebar-false-instance"
                icon={<IconLineLogOut1 className="icon-line-log-out" color="#CB9128" />}
              />
              <div className="menu">
                <Sidebar
                  className="sidebar-instance"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineHome3 className="icon-instance-node" />}
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineDiscount3 className="icon-instance-node" color="#CB9128" />}
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                <Sidebar
                  className="sidebar-4"
                  frameClassName="sidebar-6"
                  icon={<IconLineDashboard1 className="icon-instance-node" color="white" />}
                  img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-7.svg"
                  rectangleClassName="sidebar-5"
                  rectangleClassNameOverride="sidebar-2"
                  state
                />
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineNotification1 className="icon-instance-node" color="#CB9128" />}
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineOrder className="icon-instance-node" color="#CB9128" />}
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineCustomer className="icon-instance-node" color="#CB9128" />}
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineSetting2 className="icon-instance-node" color="#CB9128" />}
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangle1="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/rectangle-25-15.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
              </div>
              <div className="logo" />
            </div>
          </div>
          <div className="text-wrapper-2">Logo</div>
        </div>
        <div className="overlap-4">
          <div className="live-orders-list">
            <div className="navbar">
              <div className="overlap-group-2">
                <div className="text-wrapper-3">CustomerID</div>
                <div className="text-wrapper-4">OrderID</div>
              </div>
              <div className="text-wrapper-5">Status</div>
              <div className="method">MenuItem</div>
              <div className="method-2">OrderNumber</div>
              <div className="method-3">Payment Method</div>
            </div>
            <img
              className="divider"
              alt="Divider"
              src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/divider-1.svg"
            />
            <div className="rows">
              <div className="rows-wrapper">
                <div className="rows-2">
                  <div className="overlap-5">
                    <div className="names">
                      <div className="name">
                        <div className="overlap-group-3">
                          <div className="text-wrapper-6">Eren Jaegar</div>
                          <div className="text-wrapper-7">0105657</div>
                        </div>
                        <div className="avatar" />
                      </div>
                    </div>
                    <div className="text-wrapper-8">0105657787</div>
                  </div>
                  <div className="overlap-6">
                    <div className="text-wrapper-9">Jollof and chicken</div>
                    <div className="content">
                      <div className="text-wrapper-10">Cash</div>
                    </div>
                  </div>
                  <div className="element">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    1
                  </div>
                  <div className="overlap-7">
                    <div className="names-2">
                      <div className="name-2">
                        <div className="overlap-group-4">
                          <div className="text-wrapper-11">Eren Jaegar</div>
                          <div className="text-wrapper-12">0105657</div>
                        </div>
                        <div className="avatar-2" />
                      </div>
                    </div>
                    <div className="text-wrapper-13">0105657787</div>
                    <div className="text-wrapper-14">Jollof and chicken</div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-15">ePayment</div>
                    </div>
                  </div>
                  <div className="element-2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    2
                  </div>
                  <div className="overlap-8">
                    <img
                      className="icon-toggle-on"
                      alt="Icon toggle on"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652db2fb58b2b92d1b44f942/img/---icon--toggle-on-@2x.png"
                    />
                    <div className="text-wrapper-16">Served</div>
                    <img
                      className="rectangle-4"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652db2fb58b2b92d1b44f942/img/rectangle-124.svg"
                    />
                  </div>
                  <div className="overlap-9">
                    <div className="names">
                      <div className="name">
                        <div className="overlap-group-5">
                          <div className="text-wrapper-17">Eren Jaegar</div>
                          <div className="text-wrapper-7">0105657</div>
                        </div>
                        <div className="avatar" />
                      </div>
                    </div>
                    <div className="text-wrapper-18">0105657787</div>
                    <div className="text-wrapper-19">Jollof and chicken</div>
                    <div className="content-2">
                      <div className="text-wrapper-15">ePayment</div>
                    </div>
                  </div>
                  <div className="element-3">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    3
                  </div>
                  <div className="overlap-10">
                    <img
                      className="icon-toggle-off"
                      alt="Icon toggle off"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652db2fb58b2b92d1b44f942/img/---icon--toggle-off-@2x.png"
                    />
                    <div className="text-wrapper-20">Served</div>
                    <img
                      className="rectangle-5"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652db2fb58b2b92d1b44f942/img/rectangle-124.svg"
                    />
                  </div>
                  <div className="overlap-11">
                    <div className="names-3">
                      <div className="name-3">
                        <div className="overlap-group-6">
                          <div className="text-wrapper-6">Eren Jaegar</div>
                          <div className="text-wrapper-21">0105657</div>
                        </div>
                        <div className="avatar-2" />
                      </div>
                    </div>
                    <div className="text-wrapper-22">0105657787</div>
                    <div className="text-wrapper-23">Jollof and chicken</div>
                    <div className="content-3">
                      <div className="text-wrapper-10">Cash</div>
                    </div>
                  </div>
                  <div className="overlap-12">
                    <div className="element-4">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      4
                    </div>
                    <div className="text-wrapper-24">Served</div>
                    <img
                      className="rectangle-6"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652db2fb58b2b92d1b44f942/img/rectangle-124.svg"
                    />
                  </div>
                  <div className="overlap-13">
                    <div className="names-4">
                      <div className="name-4">
                        <div className="overlap-group-7">
                          <div className="text-wrapper-25">Eren Jaegar</div>
                          <div className="text-wrapper-12">0105657</div>
                        </div>
                        <div className="avatar" />
                      </div>
                    </div>
                    <div className="text-wrapper-26">0105657787</div>
                    <div className="text-wrapper-27">Jollof and chicken</div>
                    <div className="content-4">
                      <div className="text-wrapper-15">ePayment</div>
                    </div>
                  </div>
                  <div className="element-5">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                  </div>
                  <div className="overlap-14">
                    <div className="names-5">
                      <div className="name-5">
                        <div className="overlap-group-8">
                          <div className="text-wrapper-28">Eren Jaegar</div>
                          <div className="text-wrapper-12">0105657</div>
                        </div>
                        <div className="avatar-2" />
                      </div>
                    </div>
                    <div className="text-wrapper-29">0105657787</div>
                    <div className="text-wrapper-30">Jollof and chicken</div>
                    <div className="content-5">
                      <div className="text-wrapper-10">Cash</div>
                    </div>
                  </div>
                  <div className="overlap-15">
                    <div className="element-6">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      6
                    </div>
                    <div className="icon-toggle-on-2">
                      <img
                        className="vector"
                        alt="Vector"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652db2fb58b2b92d1b44f942/img/vector@2x.png"
                      />
                      <div className="rectangle-7">
                        <div className="text-wrapper-31">Served</div>
                        <img
                          className="rectangle-7"
                          alt="Rectangle"
                          src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652db2fb58b2b92d1b44f942/img/rectangle-124.svg"
                        />
                      </div>
                      <div className="overlap-16">
                        <div className="text-wrapper-32">Delivered</div>
                        <div className="rectangle-8" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-17">
                    <div className="text-wrapper-33">Served</div>
                    <div className="rectangle-9" />
                  </div>
                  <div className="overlap-18">
                    <div className="text-wrapper-34">Delivered</div>
                    <div className="rectangle-8" />
                  </div>
                  <div className="overlap-19">
                    <div className="fulfilled">Delivered</div>
                    <div className="rectangle-8" />
                  </div>
                  <div className="overlap-20">
                    <div className="text-wrapper-33">Served</div>
                    <div className="rectangle-9" />
                  </div>
                  <div className="overlap-21">
                    <div className="text-wrapper-35">Delivered</div>
                    <div className="rectangle-8" />
                  </div>
                  <div className="overlap-22">
                    <div className="text-wrapper-36">Delivered</div>
                    <div className="rectangle-8" />
                  </div>
                  <div className="overlap-23">
                    <div className="text-wrapper-36">Delivered</div>
                    <div className="rectangle-8" />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="divider"
              alt="Divider"
              src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/divider-1.svg"
            />
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="row-wrapper">
                  <div className="row">
                    <div className="content-wrapper">
                      <div className="content-6">
                        <div className="text-wrapper-37">Previous</div>
                        <div className="frame-3">
                          <div className="text-wrapper-38">1</div>
                        </div>
                        <div className="text-wrapper-39">2</div>
                        <div className="text-wrapper-39">3</div>
                        <div className="text-wrapper-40">Next</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-41">ClientID</div>
        </div>
        <div className="text-wrapper-42">Tuesday, 18 April 2023</div>
        <div className="overlap-24">
        <Link to="/ordermanagementLocked">
          <button className="select-vendor-wrapper">
            <div className="select-vendor">Locked Orders</div>
          </button>
          </Link>

          <Link to="/ordermanagementDelivery">
          <button className="button-2">
            <div className="rectangle-10" />
            <div className="select-vendor-2"> Order Delivery</div>
          </button>
          </Link>
          <img
            className="delivery"
            alt="Delivery"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/delivery-709790-2.png"
          />
          <div className="rectangle-11" />
          <img
            className="security"
            alt="Security"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/security-10389743-1.png"
          />
        </div>
      </div>
    </div>
  );
};

export default OderManagementDelivery ;
