import React from 'react'
import {Field, Form, Formik, useFormik} from 'formik'
import {Button, Box, TextField} from '@material-ui/core'
import s from './MaterialForm.module.scss'
import {object, string} from 'yup'

const initialValues = {
	//? Initial values of form. Its a 'name' property of <Field/> component
	email: '',
	name: '',
	password: ''
}


const MaterialForm = () => {
	return (
		<div className={s.MaterialForm}>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, formikHelpers) => {
					console.log(values);
					formikHelpers.resetForm();
				}}
				validationSchema={object({
					email: string().required('Please enter email')
						.email('Invalid email'),
					name: string().required('Please enter name')
						.min(2, 'Name too short'),
					password: string().required('Please enter password')
						.min(7, 'Password should be minimum 7 chars')
				})}
			>
				{({errors, isValid, touched, dirty}) => (<Form>
					<Field
						name='email'
						type='email'
						as={TextField}
						variant='outlined'
						color='primary'
						label='Email'
						fullWidth
						error={Boolean(errors.email) && Boolean(touched.email)}
						helperText={Boolean(touched.email) && errors.email}
					/>

					<Field
						name='name'
						type='name'
						as={TextField}
						variant='outlined'
						color='primary'
						label='Name'
						fullWidth
					/>

					<Field
						name='password'
						type='password'
						as={TextField}
						variant='outlined'
						color='primary'
						label='Password'
						fullWidth
					/>

					<Button
						type='submit'
						variant='contained'
						color='primary'
						size='large'
						disabled={!dirty || !isValid}
					>
						Sign up
					</Button>
				</Form>)}
			</Formik>
		</div>
	);
}

export default MaterialForm;
