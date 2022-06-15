import React from "react";
import Image from "next/image";
import sideImage from "../../public/images/logoo.png";
import Checkbox from "../Atoms/Checkbox/Checkbox";
import girlImage from "../../public/images/sideGirl.png";
import Input from "../Atoms/Input/Input";
import Sidebar from "./Components/Sidebar";
import Footer from "../Footer/Footer";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { send } from "@emailjs/browser";

const initialValues = {
  NOMBRECOMPLETO: "",
  NOMBREDECONTACTO: "",
  CORREOELECTRÓNICO: "",
  ASUNTOMENSAJE: "",
  details: "",
  haveWhatsApp: "",
  youReceiveInfoThroughEmail: "",
  youAuthorizeUs: "",
};
let validationSchema = Yup.object().shape({
  NOMBRECOMPLETO: Yup.string().required("REQUIRED"),
  NOMBREDECONTACTO: Yup.string().required("REQUIRED"),
  CORREOELECTRÓNICO: Yup.string().required("REQUIRED"),
  ASUNTOMENSAJE: Yup.string().required("REQUIRED"),
  // details: Yup.string().required("Required"),
  // yes: Yup.string().required("Required"),
  // no: Yup.string().required("Required"),

  // uploadImage: Yup.string().required("Required"),
});

const FormEmail = () => {
  return (
    <div className="relative h-[100%] mt-[40rem]">
      <Formik
        // initialValues={{ email: "", password: "" }}
        initialValues={initialValues}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.initialValues) {
        //     errors.NOMBRECOMPLETO = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.initialValues)
        //   ) {
        //     errors.NOMBRECOMPLETO = "Invalid email address";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values!", values);

          send(
            "service_mfs30xb",
            "template_e5enr7u",
            values,
            "HnXFle8Uvx0h9I2Dy"
          )
            .then((response) => {
              console.log("SUCCESS!", response.status, response.text);
            })
            .catch((err) => {
              console.log("FAILED...", err);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <div
              style={{ backgroundSize: "100% 100%" }}
              className="bg-[url(/images/Asset9.png)]  h-[100%] flex justify-center flex-col bg-no-repeat p-5 pt-[10rem] pb-[20rem]"
            >
              <p className=" text-center font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                repellat iste eveniet aperiam eligendi libero totam
              </p>
              <div
                className="mt-5 mx-auto bg-no-repeat xl:w-[80%] lg:w-[100%] md:w-[100%] sm:w-[100%] 
        xs:w-[100%] h-[100%] bg-[#ffff] rounded-[50px] 
        flex xl:pl-[70px] lg:pl-[20px] md:pl-[10px]shadow-lg shadow-cyan-500/50 relative"
              >
                <div
                  className="sm:hidden xl:block lg:block md:hidden
          w-[37%]
           xl:right-[-150px] lg:right-[-12px] absolute bottom-0"
                >
                  <Image src={girlImage} alt="img" />
                </div>
                <div
                  className=" xl:w-[70%] lg:w-[70%] md:w-[100%] sm:w-[100%]
           flex items-center xl:justify-center lg:justify-center md:justify-around xl:gap-x-[132px] lg:gap-x-[22px] p-1"
                >
                  <div className="">
                    <Image src={sideImage} alt="img" />
                  </div>
                  <div className="flex-initial my-4 max-w-[470px]">
                    <Input
                      label="NOMBRE COMPLETO "
                      subLabel="(REQUERIDO)"
                      className="outline-none mt-2 border-b-2 border-[#8BD10B] pb-2  w-full"
                      name="NOMBRECOMPLETO"
                      errorMessage={
                        touched.NOMBRECOMPLETO && errors.NOMBRECOMPLETO
                      }
                      onChange={handleChange}
                    />
                    <div className="my-4">
                      <Input
                        className="outline-none mt-2 border-b-2 border-[#8BD10B] pb-2  w-full"
                        label="NOMBRE DE CONTACTO"
                        subLabel="(REQUERIDO)"
                        name="NOMBREDECONTACTO"
                        errorMessage={
                          touched.NOMBREDECONTACTO && errors.NOMBREDECONTACTO
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4">
                      <p>¿Este número cuenta con whatsapp?</p>
                      <div className="flex items-center justify-center gap-x-2 my-2">
                        {["yes", "no"].map((item) => (
                          <Checkbox
                            onChange={() => setFieldValue("haveWhatsApp", item)}
                            value={values.haveWhatsApp === item}
                            label={item}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="my-4">
                      <p>
                        ¿Quieres recibir información acerca de la industria
                        webcam en tu correo electrónico?
                      </p>
                      <div className="flex items-center justify-center gap-x-2 my-2">
                        {["yes", "no"].map((item) => (
                          <Checkbox
                            onChange={() =>
                              setFieldValue("youReceiveInfoThroughEmail", item)
                            }
                            value={values.youReceiveInfoThroughEmail === item}
                            label={item}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="my-4">
                      <p>
                        ¿Autorizas que usemos tu número de contactopara
                        brindarte información sobre nuestras tarifas y
                        servicios?
                      </p>
                      <div className="flex items-center justify-center gap-x-2 my-2">
                        {["yes", "no"].map((item) => (
                          <Checkbox
                            onChange={() =>
                              setFieldValue("youAuthorizeUs", item)
                            }
                            value={values.youAuthorizeUs === item}
                            label={item}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="my-2">
                      <Input
                        label="CORREO ELECTRÓNICO "
                        subLabel="(REQUERIDO)"
                        className="outline-none mt-2 border-b-2 border-[#8BD10B] pb-2  w-full"
                        name="CORREOELECTRÓNICO"
                        errorMessage={
                          touched.CORREOELECTRÓNICO && errors.CORREOELECTRÓNICO
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-2">
                      <Input
                        label="ASUNTOMENSAJE"
                        subLabel="(REQUERIDO)"
                        className="outline-none mt-2 border-b-2 border-[#8BD10B] pb-2  w-full"
                        name="ASUNTOMENSAJE"
                        errorMessage={
                          touched.ASUNTOMENSAJE && errors.ASUNTOMENSAJE
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <textarea
                        className="outline-none border-b-2 border-l-2 w-full h-[130px] border-[#8BD10B] pb-2 mt- bg-[#e2e2e2]"
                        name="details"
                        value={values.details}
                        onChange={(e) =>
                          setFieldValue("details", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="text-center font-extrabold text-[#8BD10B] text-[40px]"
                        onClick={() => handleSubmit}
                      >
                        ENVIAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="absolute top-[20%] xl:w-[500px] lg:w-[302px] md:w-[320px]">
        <Sidebar />
      </div>
      <div className="absolute bottom-[-468px]">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default FormEmail;
