import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { SidebarFalse } from "../../components/SidebarFalse";
import { IconLineCustomer2 } from "../../icons/IconLineCustomer2";
import { IconLineDashboard1 } from "../../icons/IconLineDashboard1";
import { IconLineDiscount3 } from "../../icons/IconLineDiscount3";
import { IconLineHome3 } from "../../icons/IconLineHome3";
import { IconLineLogOut2 } from "../../icons/IconLineLogOut2";
import { IconLineNotification1 } from "../../icons/IconLineNotification1";
import { IconLineOrder } from "../../icons/IconLineOrder";
import { IconLineSetting3 } from "../../icons/IconLineSetting3";
import "./OrderManagementLocked.css";

import { Link } from "react-router-dom";

 const OrderManagementLocked = () => {
  return (
    <div className="orderlocked">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Current Locked Orders</div>
          <Link to="/ordermanagementLive">
          <button className="button">
            <div className="select-vendor">Live Orders</div>
          </button>
          </Link>
          <div className="rectangle-3" />
          <img
            className="food-delivery"
            alt="Food delivery"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/food-delivery-3140884-3.png"
          />
        </div>
        <div className="overlap-2">
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <SidebarFalse
                className="sidebar-false-instance"
                icon={<IconLineLogOut2 className="icon-line-log-out" color="#CB9128" />}
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
                  icon={<IconLineDiscount3 className="icon-instance-node" />}
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
                  icon={<IconLineCustomer2 className="icon-instance-node" color="#CB9128" />}
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineSetting3 className="icon-instance-node" color="#CB9128" />}
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
          <div className="form-elements">
            <p className="dine-in">
              <span className="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
              <span className="text-wrapper-3">Search</span>
            </p>
          </div>
          <div className="live-orders-list">
            <div className="navbar">
              <div className="overlap-group-2">
                <div className="text-wrapper-4">Client Name</div>
                <div className="text-wrapper-5">OrderID</div>
                <div className="text-wrapper-6">CustomerID</div>
              </div>
              <div className="text-wrapper-7">Status</div>
              <div className="text-wrapper-8">Toggle Status</div>
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
                  <img
                    className="icon-toggle-off"
                    alt="Icon toggle off"
                    src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-off-@2x.png"
                  />
                  <div className="overlap-5">
                    <div className="names">
                      <div className="name">
                        <div className="text-wrapper-9">Eren Jaegar</div>
                        <div className="avatar" />
                      </div>
                    </div>
                    <div className="text-wrapper-10">0105657787</div>
                    <div className="text-wrapper-11">Jollof and chicken</div>
                    <div className="element">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      1
                    </div>
                    <div className="text-wrapper-12">0105657</div>
                    <div className="content">
                      <div className="text-wrapper-13">Cash</div>
                    </div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-14">Served</div>
                  </div>
                  <div className="content-2">
                    <div className="text-wrapper-14">Served</div>
                  </div>
                  <div className="content-3">
                    <div className="text-wrapper-14">Served</div>
                  </div>
                  <div className="overlap-6">
                    <div className="names-2">
                      <div className="name-2">
                        <div className="overlap-group-3">
                          <div className="text-wrapper-15">Eren Jaegar</div>
                          <div className="text-wrapper-16">0105657</div>
                        </div>
                        <div className="avatar-2" />
                      </div>
                    </div>
                    <div className="text-wrapper-17">0105657787</div>
                    <div className="text-wrapper-18">Jollof and chicken</div>
                    <div className="element-2">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      2
                    </div>
                    <div className="content-4">
                      <div className="text-wrapper-19">ePayment</div>
                    </div>
                  </div>
                  <div className="content-5">
                    <div className="text-wrapper-20">Fulfilled</div>
                  </div>
                  <img
                    className="icon-toggle-on"
                    alt="Icon toggle on"
                    src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-on-@2x.png"
                  />
                  <div className="overlap-7">
                    <div className="names-3">
                      <div className="name-3">
                        <div className="overlap-group-4">
                          <div className="text-wrapper-21">Eren Jaegar</div>
                          <div className="text-wrapper-16">0105657</div>
                        </div>
                        <div className="avatar" />
                      </div>
                    </div>
                    <div className="text-wrapper-22">0105657787</div>
                    <div className="text-wrapper-23">Jollof and chicken</div>
                    <div className="element-3">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      3
                    </div>
                    <div className="content-6">
                      <div className="text-wrapper-13">Cash</div>
                    </div>
                  </div>
                  <img
                    className="icon-toggle-off-2"
                    alt="Icon toggle off"
                    src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-off--1@2x.png"
                  />
                  <div className="overlap-8">
                    <div className="names-4">
                      <div className="name-4">
                        <div className="overlap-group-5">
                          <div className="text-wrapper-24">Eren Jaegar</div>
                          <div className="text-wrapper-25">0105657</div>
                        </div>
                        <div className="avatar-2" />
                      </div>
                    </div>
                    <div className="text-wrapper-26">0105657787</div>
                    <div className="text-wrapper-27">Jollof and chicken</div>
                    <div className="element-4">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
                    </div>
                    <div className="content-7">
                      <div className="text-wrapper-19">ePayment</div>
                    </div>
                  </div>
                  <img
                    className="icon-toggle-on-2"
                    alt="Icon toggle on"
                    src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-on-@2x.png"
                  />
                  <div className="content-8">
                    <div className="text-wrapper-20">Fulfilled</div>
                  </div>
                  <div className="overlap-9">
                    <div className="names-5">
                      <div className="name-5">
                        <div className="overlap-group-6">
                          <div className="text-wrapper-21">Eren Jaegar</div>
                          <div className="text-wrapper-28">0105657</div>
                        </div>
                        <div className="avatar" />
                      </div>
                    </div>
                    <div className="text-wrapper-29">0105657787</div>
                    <div className="text-wrapper-30">Jollof and chicken</div>
                    <div className="element-5">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                    </div>
                    <div className="content-4">
                      <div className="text-wrapper-19">ePayment</div>
                    </div>
                  </div>
                  <img
                    className="icon-toggle-off-3"
                    alt="Icon toggle off"
                    src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-off-@2x.png"
                  />
                  <div className="overlap-10">
                    <div className="names-6">
                      <div className="name-6">
                        <div className="overlap-group-7">
                          <div className="text-wrapper-31">Eren Jaegar</div>
                          <div className="text-wrapper-28">0105657</div>
                        </div>
                        <div className="avatar-2" />
                      </div>
                    </div>
                    <div className="text-wrapper-32">0105657787</div>
                    <div className="text-wrapper-33">Jollof and chicken</div>
                    <div className="element-6">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      6
                    </div>
                    <div className="content-9">
                      <div className="text-wrapper-13">Cash</div>
                    </div>
                  </div>
                  <img
                    className="icon-toggle-on-3"
                    alt="Icon toggle on"
                    src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-on-@2x.png"
                  />
                  <div className="content-10">
                    <div className="text-wrapper-20">Fulfilled</div>
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
                      <div className="content-11">
                        <div className="text-wrapper-34">Previous</div>
                        <div className="frame-3">
                          <div className="text-wrapper-35">1</div>
                        </div>
                        <div className="text-wrapper-36">2</div>
                        <div className="text-wrapper-36">3</div>
                        <div className="text-wrapper-37">Next</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-38">Tuesday, 18 April 2023</div>
        <div className="overlap-11">
        <Link to="/ordermanagementLocked">
          <button className="select-vendor-wrapper">
            <div className="select-vendor">Locked Orders</div>
          </button>
          </Link>

          <Link to="/ordermanagementDelivery">
          <button className="button-2">
            <div className="rectangle-4" />
            <div className="select-vendor-2"> Order Delivery</div>
          </button>
          </Link>
          <img
            className="delivery"
            alt="Delivery"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/delivery-709790-2.png"
          />
          <div className="rectangle-5" />
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

export default OrderManagementLocked ;
