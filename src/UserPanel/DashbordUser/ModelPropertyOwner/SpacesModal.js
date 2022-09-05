import { Modal } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const SpacesModal = ({ showStatus, setshowStatus }) => {
    const handleSubmit = (values) => {
        // setshowStatus(true);
        console.log(values);
        setshowStatus(false)
    };

    const handleOk = () => {
        setshowStatus(false);
    };

    const handleCancel = () => {
        setshowStatus(false);
    };
    return (
        <>
            <Modal
                title="New Category"
                visible={showStatus}
                onOk={handleOk}
                width={650}
                onCancel={handleCancel}
                footer={false}
                destroyOnClose
            >
                <div className="row">
                    <Formik
                        initialValues={{
                            space: "coworking space in Pune",
                            manager_name: "laxaman",
                            manager_email: "lakhsn@gmail.com",
                            manager_contactNumber: 8967452356,
                            seating_capacity: 30,
                            cabin_capacity: 10,
                            total_desks: 50,
                            address: "pume maharashtra 411109",
                            city: "hinjewadi",
                            price: "6000",
                            property_status: "Rent",
                            description: "coworking space for Rent",
                            working_days: "mondayToFriday",
                            property_id: 2134,
                        }}
                        validate={(values) => {
                            let errors = {};

                            if (!values.space) {
                                errors.category = "required*";
                            }
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                        className=""
                    >
                        {({ values, errors, handleSubmit }) => (
                            < Form onSubmit={handleSubmit} className="">
                                <div className="formGroup">
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="Space Name" className="label">
                                                Space Name:{" "}
                                            </label>
                                            <Field
                                                type="text"
                                                name="space"
                                                placeholder="space"
                                                className="form-control  mb-3   "
                                            />
                                            <label htmlFor="manager_email" className="label">
                                                Manager Email:{" "}
                                            </label>
                                            <Field
                                                type="text"
                                                name="manager_email"
                                                placeholder="manager_email"
                                                className="form-control  mb-3 m "
                                            />
                                            <label htmlFor="Seating capacity " className="label">
                                                Seating Capacity:{" "}
                                            </label>

                                            <Field
                                                type="number"
                                                name="seating_capacity"
                                                placeholder="seating_capacity"
                                                className="form-control  mb-3  m"
                                            />
                                            <label htmlFor="Cabins" className="label">
                                                Cabin:{" "}
                                            </label>

                                            <Field
                                                type="number"
                                                name="cabin_capacity"
                                                placeholder="cabin_capacity"
                                                className="form-control  mb-3  m"
                                            />
                                            <label htmlFor="desk" className="label">
                                                Total Desk:{" "}
                                            </label>

                                            <Field
                                                type="Number"
                                                name="total_desks"
                                                placeholder="total_desks"
                                                className="form-control  mb-3  m"
                                            />
                                            <label htmlFor="Property-id" className="label">
                                                Property id:{" "}
                                            </label>

                                            <Field
                                                type="text"
                                                name="property_id"
                                                placeholder="property_id"
                                                className="form-control  mb-3  m"
                                            />

                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="manager_name" className="label">
                                                manager name:{" "}
                                            </label>
                                            <Field
                                                type="text"
                                                name="manager_name"
                                                placeholder="manager_name"
                                                className="form-control  mb-3  m"
                                            />
                                            <label
                                                htmlFor="manager_contactNumber"
                                                className="label"
                                            >
                                                Manager Contact:{" "}
                                            </label>
                                            <Field
                                                type="text"
                                                name="manager_contactNumber"
                                                placeholder="manager_contactNumber"
                                                className="form-control  mb-3  m"
                                            />
                                            <label htmlFor="price" className="label">
                                                Price :
                                            </label>
                                            <Field
                                                type="text"
                                                name="price"
                                                placeholder="price"
                                                className="form-control  mb-3  m"
                                            />

                                            <label htmlFor="status" className="label">
                                                Property Status
                                            </label>
                                            <Field
                                                type="text"
                                                name="property_status"
                                                placeholder="property_status"
                                                className="form-control  mb-3  m"
                                            />
                                            <label htmlFor="Working Days" className="label">
                                                Working Days:
                                            </label>
                                            <Field
                                                type="text"
                                                name="working_days"
                                                placeholder="working_days"
                                                className="form-control  mb-3  m"
                                            />

                                            <label htmlFor="city" className="label">
                                                City:{" "}
                                            </label>

                                            <Field
                                                type="text"
                                                name="city"
                                                placeholder="city"
                                                className="form-control  mb-3  m"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="Address" className="label">
                                                Address
                                            </label>
                                            <Field
                                                type="text"
                                                name="address"
                                                placeholder="address"
                                                className="form-control  mb-3  m"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="description" className="label">
                                                Description
                                            </label>
                                            <Field
                                                type="text"
                                                as="textarea"
                                                row={4}
                                                name="description"
                                                placeholder="description"
                                                className="form-control mt-3 mb-3  m"
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex  mt-3">
                                        <button
                                            className="btn btn-first"
                                            type="button"
                                            onClick={handleSubmit}
                                        >
                                            Add New Space
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    );
};

export default SpacesModal;