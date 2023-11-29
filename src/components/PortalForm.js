import React from 'react';
import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';


const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    });
    actions.resetForm();
}


function PortalForm() {
    return (
        <>
            <Formik
                initialValues={{ username: '', university: 'red', isAccepted: false }}
                onSubmit={onSubmit}
                validationSchema={advancedSchema}
            >
                {() => (
                    <Form>
                        <CustomInput label="Kullanıcı Adı"
                        name="username"
                        type="text"
                        placeholder="Kullanıcı Adınızı Giriniz"/>
                        <CustomSelect label="Okulunuz"
                        name="university"
                        type="text"
                        placeholder="Lütfen Üniversitenizi Seçiniz">
                            <option value="">Lütfen Üniversitenizi Seçiniz</option>
                            <option value="bogazici">Boğaziçi Üniversitesi</option>
                            <option value="gsu">Galatasaray Üniversitesi</option>
                            <option value="odtü">ODTÜ</option>
                            <option value="itü">İstanbul Teknik Üniversitesi</option>




                        </CustomSelect>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default PortalForm