
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useFormik} from "formik";
import * as yup from 'yup';
import Image from "next/image";
import ButtonFillEffect from "@/components/elements/button-fill-effect";
import {toast} from "react-toastify";
import {useSearchParams} from "next/navigation";
// import {Categor÷ies} from "@/constant";
// import CategoryDropdown from "@/components/get-in-touch/category-dropdown";
// import Cookies from "js-cookie";
// import {v4 as uuidv4} from "uuid";
// import CongratulationDialog from "@/components/congratulation-dialog";
// import ReCAPTCHA from "react-google-recaptcha";/


interface MyValues {
    name: string,
    email: string,
    message: string,
    companyName: string,
    phone: string,
    category: string,
    requestOrigin: string,
    projectCategory: string,
}


const validationSchema = yup.object().shape({
    name: yup
        .string()
        .trim().matches(/^(?!.*[-\s]{2})[A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s.'-]*$/gi, "Enter Valid Name")
        .min(2, 'Name should be of minimum 2 characters length.')
        .max(100, 'Name should be of ,maximum 100 characters length.')
        .required('Name is required.'), email: yup
        .string()
        .trim()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid Email address')
        .required('Email is required.'),

    companyName: yup
        .string()
        .trim()
        .required('Company Name is required.'), message: yup
        .string()
        .trim()
        .min(25, 'Description should be of minimum 25 characters length.')
        .max(200, 'Description should be of maximum 200 characters length.')
        .required('Description is required.'),

    phone: yup
        .string()
        .trim()
        .required('Mobile Number is required.'),


});


const ContactUsForm = (props: any) => {
    const {nextPage, category} = props;
    const params = useSearchParams()



    const [number, setNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const inputRef = useRef(undefined);
    const [searchText, setSearchText] = useState("");
    const [openCongDialog, setOpenCongDialog] = useState(false);
    const [recaptchaFailed, setRecaptchaFailed] = useState(false);
    const recaptchaRef = React.createRef<any>();

    const handleSubmit =  (event:any) => {
        console.log("handle submit called for captcha")
        console.log("error formik---", formik.errors)
        event.preventDefault();

        // if(formik.errors) {
        //     console.log("error formik", formik.errors)
        //      formik.setErrors({email: "Please provide a valid Email."})
        //     return
        // }

        // formik.validateForm()


        console.log("error formik---9", formik.errors)
        if(Object.keys(formik.errors).length>0 || formik.values.name === '') {
            formik.validateForm();
            console.log("error formik", formik.errors)
            return
        }

        else {
              recaptchaRef.current.execute();
        }
        // Execute the reCAPTCHA when the form is submitted
        // recaptchaRef.current.execute();
    };


    const onReCAPTCHAChange = async (captchaCode: any) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }

        try {

            const response = await fetch('/api/recaptchaSubmit', {
                method: 'POST', body: JSON.stringify({gRecaptchaToken: captchaCode}), headers: {
                    'content-type': 'application/json',
                },
            })

            if (response.ok) {
                // If the response is ok than show the success alert
                formik.handleSubmit()
            } else {
                // Else throw an error with the message returned
                // from the API
                const error = await response.json();
                throw new Error(error.message)
            }
        } catch (error: any) {
            toast.error(error?.message || "Something went wrong");
        } finally {
            // Reset the reCAPTCHA when the request has failed or succeeeded
            // so that it can be executed again if user submits another email.
            recaptchaRef.current.reset();
            // setEmail("");
        }
    };


    const handleCongDialogClose = () => {
        setOpenCongDialog(false);
    }

    const handleCongDialogOpen = () => {
        setOpenCongDialog(true);
    }

    const formik = useFormik<MyValues>({
        initialValues: {
            name: '',
            email: '',
            message: '',
            companyName: '',
            phone: '',
            category: 'blockchain',
            requestOrigin: '',
            // projectCategory:params.get('q') ?? Categories[0].items[0],

        }, validationSchema: validationSchema, validateOnMount:false, validateOnBlur:true, validateOnChange:true,// Pass the validation schema
        onSubmit: async (values, formikHelpers) => {

            try {
                setLoading(true)
                const response = await fetch('https://api.bucle.dev/v2/enquiry/new', {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({...values,requestOrigin:params.get('origin') ?? 'enquiry-footer-form'})
                });
                if (!response.ok) {
                    throw response;
                }
                setLoading(false)
                // toast("Thanks for contacting us, we will reach back to you soon! 🤝");
                handleCongDialogOpen();
                formik.resetForm()
                return await response.json();

            } catch (response: any) {
                setLoading(false)
                const errorData = await response.json().catch(() => null);
                const errorMessage = errorData?.message || (await response.text());
                console.log('error', errorMessage);
                formikHelpers.setErrors(errorMessage);
                toast.error(errorMessage ?? 'Something went wrong!');
            }


        },
    });

    const cookiesApi = async (values: any) => {
        console.log("values---", values);
        try {
            setLoading(true)
            const response = await fetch('https://api.bucle.dev/v2/enquiry-logger', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({...values, requestOrigin: params.get('origin') ?? 'enquiry-footer-form'})
            });
            if (!response.ok) {
                throw response;
            }
            setLoading(false)
            // toast("Thanks for contacting us, we will reach back to you soon! 🤝");
            return await response.json();

        } catch (response: any) {
            setLoading(false)
            const errorData = await response.json().catch(() => null);
        }
    }



    // useEffect(() => {

    //     const getData = setTimeout(() => {
    //         let userID = Cookies.get('userID');
    //         if (!userID) {
    //             // If it doesn't exist, generate a new unique ID and set it as a cookie
    //             userID = uuidv4();
    //             Cookies.set('userID', userID, {expires: 365}); // Cookie expires in 1 year
    //             console.log('New user ID generated and stored in cookies:', userID);
    //         } else {
    //             console.log('User ID contact us:', userID);
    //         }
    //         console.log("Cookies.get('userID')---", Cookies.get('userID'));
    //         cookiesApi({session_id: userID, email: formik.values.email, phone: formik.values.phone});


    //     }, 5000)

    //     return () => clearTimeout(getData)


    // }, [formik.values.email, formik.values.phone]);


    useEffect(() => {
        console.log('errors---',formik.errors)
        console.log('values---',formik.values)
    }, [formik.values,formik.errors]);


    return (<div className={'flex justify-center items-start flex-col rounded-xl px-0 lg:pl-8 lg:pr-0'}>
            {/* {openCongDialog && <CongratulationDialog openDialog={openCongDialog} handleClose={handleCongDialogClose}/>} */}
            <div className={'py-4 w-full grid grid-cols-12'}>
                <div className={'col-span-10'}>
                    <div className={'flex justify-between items-center w-full'}>
                        <div className={'flex w-full'}>
                            <p className={'font-montserrat text-white text-sm md:text-2xl font-quicksand'}>
                                <span>We respond within 24 hours </span>
                            </p>
                        </div>


                    </div>

                    <p className={'font-montserrat text-white text-xs md:text-base'}>

                        Available: &nbsp;
                        <span className={'font-black'}>
                         Monday to Friday
                    </span>

                    </p>


                    <p className={'font-inter text-[#E00000] text-xs'}>
                        **No Spamming**
                    </p>


                </div>
                <div className={'col-span-2'}>

                    <div className={'flex w-full flex-1 justify-end py-2 z-50'}>
                        <Image src={'/images/team/pallab.png'} className={'relative rounded-full left-4 z-0'} width={48}
                               height={48}
                               alt={'profile'}/>
                        <Image src={'/images/team/omar.png'} width={48} height={48} className={'rounded-full z-10'}
                               alt={'profile'}/>
                    </div>
                </div>


            </div>
            <div className={'flex justify-start items-center w-full'}
                // sx={{display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'row'}}
            >
                <form className={'contactForm w-full'} onSubmit={handleSubmit} style={{
                    display: 'flex', // justifyContent: 'center',
                    // alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-2'}>
                        <div
                            className={'flex justify-center items-start flex-col w-full col-span-2 md:col-span-1'}>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder={"Enter Full Name*"}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                style={{
                                    width: '100%',
                                    border: `1px solid ${formik.errors.name ? 'red' : 'transparent'}`,
                                    borderRadius: '8px',

                                    // color: '#11192A',
                                    // outlineColor: `${formik.errors.name ? '#ff4d48' : '#11192A'}`
                                }}
                            />
                            {formik.errors.name && (<span style={{
                                color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                            }}>*{formik.errors.name}</span>)}

                        </div>
                        <div
                            className={'flex justify-center items-start flex-col w-full col-span-2 md:col-span-1'}>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder={"Enter Email*"}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                style={{
                                    width: '100%',
                                    border: `1px solid ${formik.errors.email ? 'red' : 'transparent'}`,
                                    borderRadius: '8px',

                                    // color: '#11192A',
                                    // outlineColor: `${formik.errors.email ? '#ff4d48' : '#11192A'}`
                                }}
                            />
                            <div className={'flex gap-1 justify-start items-center py-1'}>
                                <Image src={'/images/cross1.svg'} width={16} height={16} alt={'lock'}/>
                                <p className={'font-inter text-xs'}>No spamming</p>
                            </div>

                            {formik.errors.email && (<span style={{
                                color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                            }}>*{formik.errors.email}</span>)}

                        </div>


                        <div className={'flex justify-center items-start flex-col w-full col-span-2'}>
                            <PhoneInput
                                placeholder={"+81 0000 000 000"}
                                specialLabel={''}
                                value={formik.values.phone}
                                isValid={(value, country: any) => {
                                    if (value.slice(country?.dialCode.length).length < 10 && value.slice(country?.dialCode.length).length >= 1) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                }}
                                country={'in'}
                                countryCodeEditable={false}
                                // preferredCountries={['in', 'us']}
                                // onlyCountries={['in', 'us']}
                                onChange={(value, data, event, formattedValue) => {
                                    if ('dialCode' in data) {
                                        formik.setFieldValue('phone', `+${value}`);
                                    }
                                }}
                                inputStyle={{
                                    width: '100%',
                                    border: `0 solid ${formik.errors.phone ? 'red' : 'transparent'}`,
                                    borderRadius: '8px',
                                    paddingTop: '16px',
                                    paddingBottom: '16px',
                                    height: '56px',
                                    background:'transparent'
                                }}
                                containerStyle={{
                                    border: `1px solid ${formik.errors.phone ? 'red' : 'transparent'}`,
                                    marginTop: '0.5rem',
                                    width: '100%',
                                    color :'#FFFFFFB2 !important',
                                    backgroundColor: '#FFFFFF26 !important'
                                }}
                            />

                            <div className={'flex gap-1 justify-start items-center py-1'}>
                                <Image src={'/images/lock-fill.svg'} width={16} height={16} alt={'lock'}/>
                                <p className={'font-inter ext-xs text-opacity-70'}>Data is Safe</p>
                            </div>


                            {formik.errors.phone && (<span style={{
                                color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                            }}>*{formik.errors.phone}</span>)}
                        </div>


                        <div className={'flex justify-center items-start flex-col w-full col-span-2'}>

                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                placeholder={"Company Name"}
                                onChange={formik.handleChange}
                                value={formik.values.companyName}
                                style={{
                                    width: '100%',
                                    border: `1px solid ${formik.errors.companyName ? 'red' : 'transparent'}`,
                                    borderRadius: '8px',
                                }}
                            />
                            {formik.errors.companyName && (<span style={{
                                color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                            }}>*{formik.errors.companyName}</span>)}
                        </div>

                        {/* {nextPage && <div className={'flex justify-center items-start flex-col w-full col-span-2'}>
                            <CategoryDropdown formik={formik}/>
                        </div>} */}


                        <div className={'flex justify-center items-start flex-col w-full col-span-2'}

                        >
                            <textarea
                                id="message"
                                name="message"
                                aria-multiline={true}
                                placeholder={"Describe Your Project"}
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                style={{
                                    padding: '4px',
                                    height: '8rem',
                                    width: '100%',
                                    border: `1px solid ${formik.errors.message ? 'red' : 'transparent'}`,
                                    borderRadius: '8px',
                                }}
                            />
                            <div className={'flex justify-between w-full'}>
                                <div>
                                    {formik.errors.message && (<span style={{
                                        color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                                    }}>*{formik.errors.message}</span>)}
                                </div>


                                <div className={'flex gap-1 justify-start items-center py-1'}>
                                    <Image src={'/images/error-round.svg'} width={16} height={16} alt={'lock'}/>
                                    <p className={'font-inter'}>{`Limit: ${formik.values.message.trim().length + '/' + '200'}`}</p>
                                </div>

                            </div>
                        </div>


                    </div>
                    {/*<div*/}
                    {/*    className="g-recaptcha"*/}
                    {/*    data-sitekey="6LdffAcqAAAAAKszFHUScMND5k8QdtZKc-M_G48A"*/}
                    {/*    data-callback="onRecaptchaVerify"*/}
                    {/*    data-size={recaptchaFailed ? 'normal' : 'invisible'}*/}
                    {/*></div>*/}

                    <div className={'m-1 w-full flex justify-center items-center pt-10'}>
                        <button className={'bg-[#075199] w-full  py-2 lg:py-4 rounded-[12px]'}
                                          type="submit" disabled={formik.values.name === ''}
                        >
                            {loading ? 'Submitting...' : 'Send Request'}
                        </button>

                    </div>

                   
                </form>
            </div>
        </div>


    );


};

export default ContactUsForm;
