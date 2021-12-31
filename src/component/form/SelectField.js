import React from 'react';
import { useField } from 'formik';

const SelectField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="mb-4">
                <label htmlFor={props.id}>{label}</label>
                <select {...field} {...props} />
                  {meta.touched && meta.error ? (
                  <div className="invalid-feedback">{meta.error}</div>
                  ) : null}
            </div>
        </>
    );
};

export default SelectField
