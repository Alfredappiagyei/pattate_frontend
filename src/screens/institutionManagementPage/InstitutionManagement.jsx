import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { SidebarFalse } from "../../components/SidebarFalse";
import { IconLineCustomer1 } from "../../icons/IconLineCustomer1";
import { IconLineDashboard } from "../../icons/IconLineDashboard";
import { IconLineDiscount2 } from "../../icons/IconLineDiscount2";
import { IconLineHome1 } from "../../icons/IconLineHome1";
import { IconLineLogOut1 } from "../../icons/IconLineLogOut1";
import { IconLineNotification1 } from "../../icons/IconLineNotification1";
import { IconLineOrder } from "../../icons/IconLineOrder";
import { IconLineSetting2 } from "../../icons/IconLineSetting2";
import "./InstitutionManagement.css";
import { Link } from "react-router-dom";

 const InstitutionManagement = () => {
  return (
    <div className="institution">
      <div className="div">
        <div className="div-2">
          <div className="div-2">
            <div className="overlap">
              <SidebarFalse
                className="sidebar-false-instance"
                icon={<IconLineLogOut1 className="icon-line-log-out" color="#CB9128" />}
              />
              <div className="menu">
                <Sidebar
                  className="sidebar-instance"
                  frameClassName="design-component-instance-node"
                  icon={<IconLineHome1 className="icon-instance-node" color="#CB9128" />}
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

              <Link to="/ordermanagementLive"> 
                <div className="overlap-wrapper">
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
                </Link>
                
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
                <div className="overlap-wrapper">
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
                </Link>

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
              <div className="logo" />
            </div>
          </div>
          <div className="text-wrapper">Logo</div>
        </div>
        <div className="order-report">
          <div className="heading">
            <header className="header">
              <div className="text-wrapper-2">Institution Name</div>
              <div className="institution-type">Institution&nbsp;&nbsp;Type</div>
              <div className="text-wrapper-3">Actions</div>
              <div className="text-wrapper-4">Institution Details</div>
            </header>
            <img
              className="divider"
              alt="Divider"
              src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/divider-1.svg"
            />
          </div>
          <div className="rows">
            <div className="rows-wrapper">
              <div className="row-wrapper">
                <div className="row">
                  <div className="content">
                    <div className="names">
                      <div className="name">
                        <div className="text-wrapper-5">Konoha HQ</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-6">Institution</div>
                        </div>
                      </div>
                      <img
                        className="school-campus"
                        alt="School campus"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/school-campus-svgrepo-com.svg"
                      />
                    </div>
                    <p className="p">
                      <span className="span">Email: </span>
                      <a href="mailto:johndoe123@gmail.com" rel="noopener noreferrer" target="_blank">
                        <span className="text-wrapper-7">johndoe123@gmail.com</span>
                      </a>
                      <span className="span">
                        {" "}
                        Contact: John Doe <br />
                        Account Number: 4567890123
                      </span>
                    </p>
                    <img
                      className="frame-2"
                      alt="Frame"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/frame-100.svg"
                    />
                  </div>
                  <div className="content">
                    <div className="names">
                      <div className="name">
                        <div className="text-wrapper-5">Gen</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-6">Campus</div>
                        </div>
                      </div>
                      <img
                        className="school-campus"
                        alt="School campus"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/school-campus-svgrepo-com-1.svg"
                      />
                    </div>
                    <p className="p">
                      <span className="span">Email: </span>
                      <a href="mailto:emilybrown22@gmail.com" rel="noopener noreferrer" target="_blank">
                        <span className="text-wrapper-7">emilybrown22@gmail.com</span>
                      </a>
                      <span className="span">
                        {" "}
                        Contact: Emily Brown <br />
                        Account Number: 5432109876
                      </span>
                    </p>
                    <img
                      className="frame-2"
                      alt="Frame"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/frame-100-1.svg"
                    />
                  </div>
                  <div className="content-2">
                    <div className="names">
                      <div className="name">
                        <div className="text-wrapper-5">TCI</div>
                        <div className="div-wrapper">
                          <div className="text-wrapper-6">Institution</div>
                        </div>
                      </div>
                      <img
                        className="school-campus"
                        alt="School campus"
                        src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/school-campus-svgrepo-com-2.svg"
                      />
                    </div>
                    <p className="p">
                      <span className="span">Email: </span>
                      <a href="mailto:david.jones45@hotmail.com" rel="noopener noreferrer" target="_blank">
                        <span className="text-wrapper-7">david.jones45@hotmail.com</span>
                      </a>
                      <span className="span"> Contact: David JonesAccount Number: 1234567890</span>
                    </p>
                    <img
                      className="frame-2"
                      alt="Frame"
                      src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/frame-100-2.svg"
                    />
                  </div>
                  <div className="content-3">
                  <div class="pagination">
                    <a href="#">Previous</a>
                    <a href="#">1</a>
                    <a class="active" href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">Next</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="divider-2"
            alt="Divider"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/divider.svg"
          />
        </div>
        <div className="frame-4">
          <img
            className="complete"
            alt="Complete"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/complete@2x.png"
          />
          <div className="text-wrapper-12">Add Institution</div>
        </div>
        <div className="frame-5">
          <img
            className="filters-svgrepo"
            alt="Filters svgrepo"
            src="https://cdn.animaapp.com/projects/6525bf945f229152ac25199d/releases/6525c0e99232094d881b7c4b/img/filters-2-svgrepo-com.svg"
          />
          <div className="text-wrapper-13">Filters</div>
        </div>
        <div className="title">
          <div className="title-2">
            <div className="date">Tuesday, 18 April 2023</div>
            <div className="resto-name">Institution management</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionManagement;
