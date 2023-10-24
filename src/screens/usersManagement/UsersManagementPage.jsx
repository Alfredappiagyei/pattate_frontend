import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { SidebarFalse } from "../../components/SidebarFalse";
import { IconLineCustomer1 } from "../../icons/IconLineCustomer1";
import { IconLineDashboard } from "../../icons/IconLineDashboard";
import { IconLineDiscount2 } from "../../icons/IconLineDiscount2";
import { IconLineHome2 } from "../../icons/IconLineHome2";
import { IconLineLogOut1 } from "../../icons/IconLineLogOut1";
import { IconLineNotification1 } from "../../icons/IconLineNotification1";
import { IconLineOption1 } from "../../icons/IconLineOption1";
import { IconLineOrder } from "../../icons/IconLineOrder";
import { IconLineSetting2 } from "../../icons/IconLineSetting2";
import "./UsersManagementPage.css";

 const UsersManagement = () => {
  return (
    <div className="usermanagement">
      <div className="div">
        <div className="title">
          <div className="title-2">
            <div className="date">Tuesday, 18 April 2023</div>
            <div className="resto-name">Users management</div>
          </div>
          <div className="form-elements">
            <img
              className="material-symbols-add"
              alt="Material symbols add"
              src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/material-symbols-add.svg"
            />
            <div className="text-wrapper">Add member</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <SidebarFalse
              className="sidebar-false-instance"
              icon={<IconLineLogOut1 className="icon-line-log-out" color="#CB9128" />}
            />
            <div className="menu">
              <Sidebar
                className="sidebar-instance"
                frameClassName="design-component-instance-node"
                icon={<IconLineHome2 className="icon-instance-node" color="#CB9128" />}
                img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-2.svg"
                rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                rectangleClassName="design-component-instance-node"
                rectangleClassNameOverride="sidebar-2"
                state={false}
              />
              <Sidebar
                className="sidebar-3"
                frameClassName="design-component-instance-node"
                icon={<IconLineDiscount2 className="icon-instance-node" color="#CB9128" />}
                img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-2.svg"
                rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                rectangleClassName="design-component-instance-node"
                rectangleClassNameOverride="sidebar-2"
                state={false}
              />
              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <div className="pattern-2">
                    <div className="rectangle-3" />
                    <img
                      className="rectangle-4"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                    />
                    <img
                      className="rectangle-5"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-2.svg"
                    />
                  </div>
                  <div className="icon-line-dashboard-wrapper">
                    <IconLineDashboard className="icon-instance-node" color="#CB9128" />
                  </div>
                </div>
              </div>
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
              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <div className="pattern-2">
                    <div className="rectangle-6" />
                    <img
                      className="rectangle-4"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-7.svg"
                    />
                    <img
                      className="rectangle-5"
                      alt="Rectangle"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-7.svg"
                    />
                  </div>
                  <div className="icon-line-customer-wrapper">
                    <IconLineCustomer1 className="icon-instance-node" color="white" />
                  </div>
                </div>
              </div>
              <Sidebar
                className="sidebar-3"
                frameClassName="design-component-instance-node"
                icon={<IconLineSetting2 className="icon-instance-node" color="#CB9128" />}
                img="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-25-2.svg"
                rectangle="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/rectangle-24-2.svg"
                rectangleClassName="design-component-instance-node"
                rectangleClassNameOverride="sidebar-2"
                state={false}
              />
            </div>
            <div className="logo">
              <div className="overlap-3">
                <div className="rectangle-7" />
                <div className="text-wrapper-2">Logo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="product-management" />
          <div className="title-3">
            <div className="text-wrapper-3">Users</div>
            <div className="form-elements-2">
              <IconLineOption1 className="icon-line-option" />
              <div className="dine-in">Filter users</div>
            </div>
          </div>
          <div className="order-report">
            <div className="heading">
              <img
                className="divider"
                alt="Divider"
                src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/divider-14.svg"
              />
              <header className="header">
                <div className="text-wrapper-4">Firstname</div>
                <div className="text-wrapper-5">Member account</div>
                <div className="text-wrapper-6">Actions</div>
                <div className="method">Email</div>
                <div className="method-2">Lastname</div>
              </header>
            </div>
            <div className="rows">
              <div className="rows-wrapper">
                <div className="row-wrapper">
                  <div className="row">
                    <div className="content">
                      <div className="names">
                        <div className="name">
                          <div className="text-wrapper-7">Reiner Braunn</div>
                          <div className="avatar" />
                        </div>
                      </div>
                      <div className="text-wrapper-8">reinerbrauan@mail.com</div>
                      <div className="text-wrapper-9">Administrator</div>
                      <img
                        className="form-elements-3"
                        alt="Form elements"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/form-elements---dropdown---default@2x.png"
                      />
                    </div>
                    <div className="content">
                      <div className="names-2">
                        <div className="name-2">
                          <div className="text-wrapper-10">Eren</div>
                          <div className="avatar-2" />
                        </div>
                      </div>
                      <div className="text-wrapper-9">Eren</div>
                      <div className="text-wrapper-11">reenjaegar@gmail.com</div>
                      <div className="text-wrapper-12">Server, Admin</div>
                      <div className="form-elements-4">
                        <img
                          className="img-2"
                          alt="Ic outline delete"
                          src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/ic-outline-delete.svg"
                        />
                        <img
                          className="img-2"
                          alt="Material symbols"
                          src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/material-symbols-edit-outline.svg"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <div className="names-3">
                        <div className="name-3">
                          <div className="text-wrapper-13">Reiner</div>
                          <div className="avatar" />
                        </div>
                      </div>
                      <div className="text-wrapper-9">Reiner</div>
                      <div className="text-wrapper-8">reinerbraunn@gmail.com</div>
                      <div className="text-wrapper-9">Server</div>
                      <img
                        className="form-elements-5"
                        alt="Form elements"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/form-elements---dropdown---default-1.svg"
                      />
                    </div>
                    <div className="content">
                      <div className="names-4">
                        <div className="name-2">
                          <div className="text-wrapper-10">Eren</div>
                          <div className="avatar-2" />
                        </div>
                      </div>
                      <div className="text-wrapper-9">Eren</div>
                      <div className="text-wrapper-11">reenjaegar@gmail.com</div>
                      <div className="text-wrapper-12">Server</div>
                      <img
                        className="form-elements-5"
                        alt="Form elements"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/form-elements---dropdown---default-2.svg"
                      />
                    </div>
                    <div className="content">
                      <div className="names-4">
                        <div className="name-2">
                          <div className="text-wrapper-10">Eren</div>
                          <div className="avatar-2" />
                        </div>
                      </div>
                      <div className="text-wrapper-9">Eren</div>
                      <div className="text-wrapper-11">reenjaegar@gmail.com</div>
                      <div className="text-wrapper-12">Server</div>
                      <img
                        className="form-elements-5"
                        alt="Form elements"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/form-elements---dropdown---default-3.svg"
                      />
                    </div>
                    <div className="content">
                      <div className="names-4">
                        <div className="name-2">
                          <div className="text-wrapper-10">Eren</div>
                          <div className="avatar-2" />
                        </div>
                      </div>
                      <div className="text-wrapper-9">Eren</div>
                      <div className="text-wrapper-14">erenjaegar@gmail.com</div>
                      <div className="text-wrapper-12">Administrator</div>
                      <img
                        className="form-elements-5"
                        alt="Form elements"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/form-elements---dropdown---default-4.svg"
                      />
                    </div>
                    <div className="content">
                      <div className="names-3">
                        <div className="name-3">
                          <div className="text-wrapper-13">Reiner</div>
                          <div className="avatar" />
                        </div>
                      </div>
                      <div className="text-wrapper-9">Reiner</div>
                      <div className="text-wrapper-15">reinerbraunn@gmail.com</div>
                      <div className="text-wrapper-9">Server</div>
                      <img
                        className="form-elements-5"
                        alt="Form elements"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/form-elements---dropdown---default-1.svg"
                      />
                    </div>
                    <div className="content">
                      <div className="names-3">
                        <div className="name-3">
                          <div className="text-wrapper-13">Reiner</div>
                          <div className="avatar" />
                        </div>
                      </div>
                      <div className="text-wrapper-9">Reiner</div>
                      <div className="text-wrapper-8">reinerbraunn@gmail.com</div>
                      <div className="text-wrapper-9">Administrator</div>
                      <img
                        className="form-elements-5"
                        alt="Form elements"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525e8e0196b2bd8eaf4b385/img/form-elements---dropdown---default-2.svg"
                      />
                    </div>
                    <div className="content-2">
                      <div className="text-wrapper-16">Previous</div>
                      <div className="div-wrapper">
                        <div className="text-wrapper-17">1</div>
                      </div>
                      <div className="text-wrapper-18">2</div>
                      <div className="text-wrapper-18">3</div>
                      <div className="text-wrapper-19">Next</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
