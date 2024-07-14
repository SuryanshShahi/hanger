import Button from "@/app/shared/button/Button";
import Modal from "@/app/shared/modal/Modal";
import { enquiry } from "@/app/utils/schemas";
import { useFormik } from "formik";
import React from "react";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const EnquiryModal = ({
  close,
  className,
}: {
  close: () => void;
  className?: string;
}) => {
  const InputFields = [
    {
      label: "Name",
      placeholder: "e.g. Rahul Mehra",
      type: "text",
      key: "name",
      icon: (
        <AiOutlineUser
          size={16}
          className="absolute top-3 left-4 text-gray-400"
        />
      ),
      required: true,
    },
    {
      label: "Company Name",
      placeholder: "e.g. Mango",
      type: "text",
      key: "companyName",
      icon: (
        <MdOutlineEmail
          size={16}
          className="absolute top-3 left-4 text-gray-400"
        />
      ),
      required: true,
    },
    {
      label: "Email Address",
      placeholder: "e.g. name@mango.com",
      type: "email",
      key: "email",
      icon: (
        <MdOutlineEmail
          size={16}
          className="absolute top-3 left-4 text-gray-400"
        />
      ),
      required: true,
    },
    {
      label: "Any Notes (Optional)",
      placeholder:
        "e.g. I like product code “KPT001 , KPT002” please contact regarding same",
      type: "email",
      key: "description",
      rows: 4,
      required: false,
    },
  ];
  const initialValues: any = {
    name: "",
    email: "",
    companyName: "",
    description: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: enquiry,
    onSubmit: (data) => {
      var templateParams = {
        name: data?.name,
        email: data?.email,
        message: `name:${data?.name}\nemail:${data?.email}\ncompany:${data?.companyName}\ndescription:${data?.description}`,
      };
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then((res) => {
          console.log(res);
          setSubmitting(false);
          close();
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
          close();
        });
    },
  });
  return (
    <Modal
      onClose={close}
      className={`space-y-6 max-w-[621px] relative animate-modal ${className}`}
    >
      <div className="flex justify-between">
        <div>
          <div className="flex justify-center items-center h-12 modalLogo bg-primary2 w-12 absolute z-20 mt-2">
            <div className="bg-white/60 rounded-[10px] h-full w-full" />
            <AiOutlineUsergroupAdd size={24} className="absolute" />
          </div>
          <div className="h-12 w-12 rounded-[10px] bg-primary2 rotate-[20deg] relative ml-2" />
        </div>
        <div className="cursor-pointer text-3xl" onClick={close}>
          &times;
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-[28px] font-semibold">Enquire about Hanger</div>
        <p className="text-[#374151] text-sm">
          Drop us your email and our team will get in touch with you for your
          hanger inquiry
        </p>
      </div>
      <div className="">
        {InputFields?.map((item, idx) => (
          <div className="space-y-1" key={idx}>
            <h4 className="text-xs font-medium">
              {item?.label}{" "}
              {item?.required && <span className="text-red-600">*</span>}
            </h4>
            <div className="relative">
              {item?.rows ? (
                <textarea
                  rows={5}
                  placeholder={item?.placeholder}
                  className={`rounded-md text-sm p-3 outline-none w-full border ${
                    errors?.[item?.key] && touched?.[item?.key]
                      ? "border-red-600"
                      : "border-gray-200"
                  }`}
                  onChange={handleChange(item?.key)}
                  onBlur={handleBlur(item?.key)}
                  value={values?.[item?.key]}
                ></textarea>
              ) : (
                <input
                  type={item?.type}
                  placeholder={item?.placeholder}
                  className={`h-10 rounded-md text-sm pl-10 outline-none w-full border ${
                    errors?.[item?.key] && touched?.[item?.key]
                      ? "border-red-600"
                      : "border-gray-200"
                  }`}
                  onChange={handleChange(item?.key)}
                  onBlur={handleBlur(item?.key)}
                  value={values?.[item?.key]}
                />
              )}
              {errors?.[item?.key] && touched?.[item?.key] ? (
                <p className="text-red-500 text-[10px] text-right">
                  {errors?.[item?.key] as string}
                </p>
              ) : (
                <p className="text-white text-[10px] text-right">.</p>
              )}
              {item?.icon}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-x-6">
        <Button
          onClick={close}
          className="w-full bg-transparent !text-black rounded border hover:bg-transparent hover:!text-black border-gray-300"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          className="w-full bg-primary2 rounded"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default EnquiryModal;
