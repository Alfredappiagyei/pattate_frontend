import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { SidebarFalse } from "../../components/SidebarFalse";
import { IconLineCustomer3 } from "../../icons/IconLineCustomer3";
import { IconLineDashboard1 } from "../../icons/IconLineDashboard1";
import { IconLineDiscount4 } from "../../icons/IconLineDiscount4";
import { IconLineHome4 } from "../../icons/IconLineHome4";
import { IconLineLogOut2 } from "../../icons/IconLineLogOut2";
import { IconLineNotification1 } from "../../icons/IconLineNotification1";
import { IconLineOrder } from "../../icons/IconLineOrder";
import { IconLineSetting3 } from "../../icons/IconLineSetting3";
import "./OrdermanagementLive.css";
import { Link } from "react-router-dom";

 const OrderManagementLive = () => {
  return (
    <div className="live">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Live Orders</div>
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
                  icon={<IconLineHome4 className="icon-instance-node" />}
                  img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-2.svg"
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineDiscount4 className="icon-instance-node" color="#CB9128" />}
                  img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-2.svg"
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />

               {/* <Link to="/OrderManagementLive"> */}
                <Sidebar
                  className="sidebar-4"
                  frameClassName="sidebar-6"
                  icon={<IconLineDashboard1 className="icon-instance-node" color="white" />}
                  rectangle1="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-7.svg"
                  rectangle2="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-7.svg"
                  rectangleClassName="sidebar-5"
                  rectangleClassNameOverride="sidebar-2"
                  state
                />
                {/* </Link> */}
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineNotification1 className="icon-instance-node" color="#CB9128" />}
                  img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-2.svg"
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineOrder className="icon-instance-node" color="#CB9128" />}
                  img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-2.svg"
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                <Link to="/">
                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineCustomer3 className="icon-instance-node" color="#CB9128" />}
                  img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-2.svg"
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                  rectangleClassName="design-component-instance-node"
                  rectangleClassNameOverride="sidebar-2"
                  state={false}
                />
                  </Link>

                <Sidebar
                  className="sidebar-3"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineSetting3 className="icon-instance-node" color="#CB9128" />}
                  img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/rectangle-25-22.svg"
                  rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
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
        <div className="live-orders-list-wrapper">
          <div className="live-orders-list">
            <div className="navbar">
              <div className="overlap-group-2">
                <div className="text-wrapper-3">ClientID</div>
                <div className="text-wrapper-4">CustomerID</div>
              </div>
              <div className="text-wrapper-5">OrderID</div>
              <div className="text-wrapper-6">Status</div>
              <div className="text-wrapper-7">Status Toggle</div>
              <div className="method">MenuItem</div>
              <div className="method-2">OrderNumber</div>
            </div>
            <img
              className="divider"
              alt="Divider"
              src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/divider-1.svg"
            />
            <div className="rows">
              <div className="rows-wrapper">
                <div className="rows-2">
                  <div className="overlap-4">
                    <img
                      className="icon-toggle-off"
                      alt="Icon toggle off"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-off--3@2x.png"
                    />
                    <div className="text-wrapper-8">Jollof and chicken</div>
                    <div className="element">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      1
                    </div>
                  </div>
                  <div className="overlap-5">
                    <div className="names">
                      <div className="name">
                        <div className="overlap-group-3">
                          <div className="text-wrapper-9">Eren Jaegar</div>
                          <div className="text-wrapper-10">0105657</div>
                        </div>
                        <div className="avatar" />
                      </div>
                    </div>
                    <div className="text-wrapper-11">0105657787</div>
                  </div>
                  <div className="content">
                    <div className="text-wrapper-12">Pending</div>
                  </div>
                  <div className="overlap-6">
                    <div className="names-2">
                      <div className="name-2">
                        <div className="overlap-group-4">
                          <div className="text-wrapper-13">Eren Jaegar</div>
                          <div className="text-wrapper-10">0105657</div>
                        </div>
                        <div className="avatar-2" />
                      </div>
                    </div>
                    <div className="text-wrapper-14">0105657787</div>
                  </div>
                  <div className="overlap-7">
                    <div className="text-wrapper-15">Jollof and chicken</div>
                    <div className="element-2">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      2
                    </div>
                    <img
                      className="icon-toggle-on"
                      alt="Icon toggle on"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-on--3@2x.png"
                    />
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-16">Served</div>
                  </div>
                  <div className="overlap-8">
                    <div className="names">
                      <div className="name">
                        <div className="overlap-group-5">
                          <div className="text-wrapper-17">Eren Jaegar</div>
                          <div className="text-wrapper-10">0105657</div>
                        </div>
                        <div className="avatar-3" />
                      </div>
                    </div>
                    <div className="text-wrapper-18">0105657787</div>
                  </div>
                  <div className="overlap-9">
                    <div className="text-wrapper-19">Jollof and chicken</div>
                    <div className="element-3">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      3
                    </div>
                    <img
                      className="icon-toggle-off-2"
                      alt="Icon toggle off"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-off--3@2x.png"
                    />
                  </div>
                  <div className="content-2">
                    <div className="text-wrapper-12">Pending</div>
                  </div>
                  <div className="overlap-10">
                    <div className="names-3">
                      <div className="name-3">
                        <div className="text-wrapper-20">Eren Jaegar</div>
                        <div className="avatar-2" />
                      </div>
                    </div>
                    <div className="text-wrapper-11">0105657787</div>
                    <div className="text-wrapper-21">0105657</div>
                  </div>
                  <div className="overlap-11">
                    <div className="text-wrapper-19">Jollof and chicken</div>
                    <div className="element-4">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      4
                    </div>
                    <img
                      className="icon-toggle-on-2"
                      alt="Icon toggle on"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-on--4@2x.png"
                    />
                  </div>
                  <div className="content-3">
                    <div className="text-wrapper-16">Served</div>
                  </div>
                  <div className="overlap-12">
                    <div className="names-4">
                      <div className="name-4">
                        <div className="text-wrapper-22">Eren Jaegar</div>
                        <div className="avatar-3" />
                      </div>
                    </div>
                    <div className="text-wrapper-23">0105657787</div>
                    <div className="text-wrapper-24">0105657</div>
                  </div>
                  <div className="overlap-13">
                    <div className="text-wrapper-25">Jollof and chicken</div>
                    <div className="element-5">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
                    </div>
                    <img
                      className="icon-toggle-off-3"
                      alt="Icon toggle off"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-off--3@2x.png"
                    />
                  </div>
                  <div className="content-4">
                    <div className="text-wrapper-12">Pending</div>
                  </div>
                  <div className="overlap-14">
                    <div className="names-5">
                      <div className="name-3">
                        <div className="text-wrapper-20">Eren Jaegar</div>
                        <div className="avatar-2" />
                      </div>
                    </div>
                    <div className="text-wrapper-26">0105657787</div>
                    <div className="text-wrapper-27">0105657</div>
                  </div>
                  <div className="overlap-15">
                    <div className="text-wrapper-28">Jollof and chicken</div>
                    <div className="element-6">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      4
                    </div>
                    <img
                      className="icon-toggle-on-2"
                      alt="Icon toggle on"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/652da1ccfe939296453e9799/img/---icon--toggle-on--4@2x.png"
                    />
                  </div>
                  <div className="content-5">
                    <div className="text-wrapper-16">Served</div>
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
                    <div className="names-wrapper">
                      <div className="names-6">
                        <div className="total-count-of-live-wrapper">
                          <p className="total-count-of-live">
                            <span className="span">Total Count of Live Order</span>
                            <span className="text-wrapper-29">:&nbsp;&nbsp; 18</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-30">Tuesday, 18 April 2023</div>
        <div className="overlap-16">
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

export default OrderManagementLive;
