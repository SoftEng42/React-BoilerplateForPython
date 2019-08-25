import React from 'react';
import { Formik, FormikProps } from 'formik';

export interface Credentials {
  username: string,
  password: string,
}

export interface DispatchProps {
  loginRequest: (credentials: Credentials) => void
}

const initialValues: Credentials = { 
  username: '',
  password: '',
}

export const Login: React.FC<DispatchProps> = ({ loginRequest }: DispatchProps) => (
  <div>
    <Formik
        initialValues={initialValues}
        onSubmit={loginRequest}
        render={({
          values,
          errors,
          status,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }: FormikProps<Credentials>) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && <div>{errors.username}</div>}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && <div>{errors.password}</div>}
            {status && status.msg && <div>{status.msg}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      />
  </div>
)
