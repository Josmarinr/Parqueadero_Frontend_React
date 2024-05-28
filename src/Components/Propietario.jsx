import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

import '../vendor/datatables/dataTables.bootstrap4.css';
import '../vendor/fontawesome-free/css/all.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'datatables.net';
import 'datatables.net-bs4';    

const dataTableOptions = { 
    pageLength: 10,
    destroy: true,
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
    },
};

const Propietario = () => {
    useEffect(() => {
        // Inicializar DataTables
        $(document).ready(function() {
            $('#dataTable').DataTable(dataTableOptions);
        });
    }, []);

    return (
        <div className="app-container">
            <Sidebar />
            <div className="content">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Propietarios</h6>
                    </div>
                    <div className="my-2"></div>
                    <div className="d-flex justify-content-end mr-3">
                        <button className="btn btn-success btn-icon-split" data-toggle="modal" data-target="#crearClienteModal">
                            <span className="icon text-white-50">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className="text">Crear Nuevo Propietario</span>
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr className="text-center">
                                    <th>Tipo ID</th>
                                    <th>ID</th>
                                    <th>Primer Nombre</th>
                                    <th>Segundo Nombre</th>
                                    <th>Primer Apellido</th>
                                    <th>Segundo Apellido</th>
                                    <th>Telefono</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr className="text-center">
                                    <th>Tipo ID</th>
                                    <th>ID</th>
                                    <th>Primer Nombre</th>
                                    <th>Segundo Nombre</th>
                                    <th>Primer Apellido</th>
                                    <th>Segundo Apellido</th>
                                    <th>Telefono</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Propietario;
