import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faHome, 
  faCar, 
  faUser, 
  faList, 
  faCog, 
  faSquareParking,
  faShieldHalved,
  faCarSide,
  faClipboard,
  faTags
} from '@fortawesome/free-solid-svg-icons';

import '../Css/SideBar.css'

const Sidebar = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon icon={faSquareParking} />
        </div>
        <div className="sidebar-brand-text mx-3">Parquee Aqui</div>
      </a>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <FontAwesomeIcon icon={faHome} className="fas fa-fw" />
          <span>Inicio</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Usuarios</div>

      {/* Nav Item - Propietarios */}
      <li className="nav-item active">
        <a className="nav-link" href="clientes.html">
          <FontAwesomeIcon icon={faUser} className="fas fa-fw" />
          <span>Propietarios</span>
        </a>
      </li>

      {/* Nav Item - Vehiculos */}
      <li className="nav-item">
        <a className="nav-link" href="proveedores.html">
          <FontAwesomeIcon icon={faCar} className="fas fa-fw" />
          <span>Vehiculos</span>
        </a>
      </li>

      {/* Nav Item - Vigilantes */}
      <li className="nav-item">
        <a className="nav-link" href="usuarios.html">
          <FontAwesomeIcon icon={faShieldHalved} className="fas fa-fw" />
          <span>Vigilantes</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Espacios</div>

      {/* Nav Item - Espacios */}
      <li className="nav-item">
        <a className="nav-link" href="productos.html">
          <FontAwesomeIcon icon={faCarSide} className="fas fa-fw" />
          <span>Espacios</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Reportes</div>

      {/* Nav Item - Reporte Venta Dia */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <FontAwesomeIcon icon={faList} className="fas fa-fw" />
          <span>Reporte por Dia</span>
        </a>
      </li>

      {/* Nav Item - Reporte Venta Propietario */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <FontAwesomeIcon icon={faClipboard} className="fas fa-fw" />
          <span>Reporte por Propietario</span>
        </a>
      </li>

      {/* Nav Item - Reporte Venta Vehiculo */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <FontAwesomeIcon icon={faTags} className="fas fa-fw" />
          <span>Reporte por Vehiculo</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Configuracion</div>

      {/* Nav Item - Ajustes */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <FontAwesomeIcon icon={faCog} className="fas fa-fw" />
          <span>Ajustes</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />

    </ul>
  )
}

export default Sidebar
