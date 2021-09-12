import React from "react";
import Card from "../components/Card";
import { Formik, Form, Field, ErrorMessage  } from 'formik';

const Signup = () => {
    return (
        <Card>
            <h1 className="text-lg">Sign Up</h1>
            <Formik
                initialValues={{ 
                    name:'',
                    email: '',
                    password: '',
                    password2: '' 
                }}
                validate={values => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.name) {
                        errors.name = 'Required';
                    }

                    if(values.password !== values.password2){
                        errors.password2 = 'Passwords don\'t match';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <div className="grid justify-items-center">
                        <div className="p-2">
                            <div className="p-1">
                                <Field className="px-1 border rounded-xl shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" name="name" placeholder="Name" />
                                <ErrorMessage className="text-red-500 hover:text-red-700" name="name" component="div" />
                            </div>
                            <div className="p-1">
                                <Field className="px-1 border rounded-xl shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="email" name="email" placeholder="Email" />
                                <ErrorMessage className="text-red-500 hover:text-red-700" name="email" component="div" />
                            </div>
                            <div className="p-1">
                                <Field className="px-1 border rounded-xl shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="password" name="password" placeholder="Password"  />
                                <ErrorMessage name="password" className="text-red-500 hover:text-red-700" component="div" />
                            </div>
                            <div className="p-1">
                                <Field className="px-1 border rounded-xl shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="password" name="password2" placeholder="Confirm Password"  />
                                <ErrorMessage name="password2" className="text-red-500 hover:text-red-700" component="div" />
                            </div>
                        </div>
                        <div className="p-2">
                            <button className="text-white bg-blue-800 hover:bg-blue-900 rounded-xl p-3 px-12" type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>
                    </div>
                </Form>
            )}
            </Formik>
        </Card>
    );
}

export default Signup;