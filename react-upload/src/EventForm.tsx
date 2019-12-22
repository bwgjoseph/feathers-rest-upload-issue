import React from 'react';
import { useFormik, FormikValues } from 'formik';
import rest from './feathers';

const EventForm = (): JSX.Element => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        name: '',
        type: '',
        files: ''
      },
      onSubmit: (values: FormikValues) => {
        const fData = new FormData();
        fData.append('name', values.name);
        fData.append('type', values.type);
        for (let i = 0; i < values.files.length; i++) {
          fData.append('files', values.files[i]);
        }

        // Using native fetch will work, without the need
        // to specify `Content-Type`
        fetch('http://localhost:3030/event', {
          method: 'POST',
          body: fData,
        });

        // Using `feathers-rest-client` with `fetch` configured
        // There is a bug where it will always sent out the body as JSON
        // And specifying `Content-Type` will cause Multipart: Boundary not found {"code":500}
        // at server-side
        // Probably should not need to specify the `Content-Type` here?
        // rest.service('event').create(fData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // });

        // If `feathers.ts` is configured to use `axios`
        // This will work perfectly too
        // Enable it in `feathers.ts`
        // rest.service('event').create(fData);
      }
    });

    const handleFormUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!e.currentTarget.files) {
        return;
      }

      console.log('target', e.currentTarget.files);
      formik.setFieldValue('files', e.currentTarget.files);
    };

    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <label htmlFor='type'>Type</label>
        <input
          id='type'
          name='type'
          type='type'
          onChange={formik.handleChange}
          value={formik.values.type}
        />
        <br />
        <label htmlFor='upload'>File</label>
        <input
          id='files'
          name='files'
          type='file'
          multiple
          onChange={handleFormUpload}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
};

export default EventForm;
